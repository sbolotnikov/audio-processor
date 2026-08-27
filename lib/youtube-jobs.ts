import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import type { ConversionJob, VideoMetadata } from '@/types/types';
import { getYouTubeInfo, normalizeYouTubeUrl, safeAudioName } from '@/lib/youtube';

type ConvertRequest = {
  url: string; bitrate?: string; title?: string; artist?: string; album?: string;
  startTime?: number; endTime?: number; normalizeAudio?: boolean; fadeInOut?: boolean;
};
type StoredJob = ConversionJob & { filePath?: string; mimeType?: string };
type Registry = { jobs: Map<string, StoredJob>; cleanupStarted: boolean };

const globalJobs = globalThis as typeof globalThis & { __youtubeJobs?: Registry };
const registry = globalJobs.__youtubeJobs ??= { jobs: new Map(), cleanupStarted: false };
const workRoot = path.join(tmpdir(), 'audio-processor-youtube');

function executable(name: 'yt-dlp' | 'ffmpeg') {
  const configured = process.env[name === 'yt-dlp' ? 'YT_DLP_PATH' : 'FFMPEG_PATH']?.trim();
  const local = path.join(process.cwd(), 'bin', `${name}${process.platform === 'win32' ? '.exe' : ''}`);
  return existsSync(local) ? local : configured || name;
}

function run(command: string, args: string[], onLine?: (line: string) => void) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, { windowsHide: true });
    let errorOutput = '';
    const consume = (chunk: Buffer) => {
      const text = chunk.toString();
      errorOutput = (errorOutput + text).slice(-8000);
      text.split(/\r?\n/).forEach((line) => onLine?.(line));
    };
    child.stdout.on('data', consume);
    child.stderr.on('data', consume);
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolve() : reject(new Error(errorOutput.trim() || `${path.basename(command)} exited with code ${code}`)));
  });
}

function durationLabel(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const rest = Math.floor(seconds % 60).toString().padStart(2, '0');
  return hours ? `${hours}:${minutes.toString().padStart(2, '0')}:${rest}` : `${minutes}:${rest}`;
}

function formats(duration: number) {
  return (['320k', '256k', '192k', '128k', '64k'] as const).map((bitrate) => ({
    bitrate,
    label: `${bitrate.replace('k', '')} kbps MP3`,
    qualityNote: bitrate === '320k' ? 'Highest quality' : bitrate === '192k' ? 'Recommended' : 'Smaller file',
    estimatedSizeBytes: Math.round((parseInt(bitrate) * 1000 / 8) * Math.max(duration, 180)),
    format: 'mp3' as const,
  }));
}

export async function videoInfo(url: string): Promise<VideoMetadata> {
  const basic = await getYouTubeInfo(url);
  let detail: any = {};
  try {
    let json = '';
    await run(executable('yt-dlp'), ['--dump-single-json', '--skip-download', '--no-playlist', '--no-warnings', basic.url], (line) => { if (line.trim().startsWith('{')) json = line; });
    if (json) detail = JSON.parse(json);
  } catch { /* oEmbed data is a valid fallback */ }
  const duration = Number(detail.duration) || 180;
  const title = detail.title || basic.title;
  let artist = detail.artist || detail.uploader || basic.author;
  if (!detail.artist && title.includes(' - ')) artist = title.split(' - ')[0].trim();
  return {
    id: basic.id, url: basic.url, title, artist, album: detail.album || 'YouTube Audio',
    channel: detail.channel || detail.uploader || basic.author, channelUrl: detail.channel_url || detail.uploader_url,
    duration, durationFormatted: durationLabel(duration), thumbnail: detail.thumbnail || basic.thumbnail,
    viewCount: Number(detail.view_count) || 0,
    uploadDate: detail.upload_date ? `${detail.upload_date.slice(0, 4)}-${detail.upload_date.slice(4, 6)}-${detail.upload_date.slice(6, 8)}` : undefined,
    description: detail.description?.slice(0, 300), formats: formats(duration),
  };
}

export async function startYouTubeJob(request: ConvertRequest) {
  normalizeYouTubeUrl(request.url);
  const id = crypto.randomUUID();
  const job: StoredJob = {
    id, url: request.url, videoTitle: 'YouTube audio', finalFileName: 'audio.mp3', status: 'queued',
    progress: 5, stageMessage: 'Queued for extraction…', bitrate: request.bitrate || '320k', createdAt: Date.now(),
  };
  registry.jobs.set(id, job);
  void execute(job, request);
  return job;
}

async function execute(job: StoredJob, request: ConvertRequest) {
  const directory = path.join(workRoot, job.id);
  try {
    await mkdir(directory, { recursive: true });
    job.status = 'fetching'; job.progress = 12; job.stageMessage = 'Reading video metadata…';
    const metadata = await videoInfo(request.url);
    job.metadata = metadata; job.videoTitle = request.title?.trim() || metadata.title;
    const artist = request.artist?.trim() || metadata.artist;
    const album = request.album?.trim() || metadata.album || 'YouTube Audio';

    job.status = 'downloading'; job.progress = 25; job.stageMessage = 'Downloading the best audio stream…';
    const sourceTemplate = path.join(directory, 'source.%(ext)s');
    await run(executable('yt-dlp'), [
      '--no-playlist', '--newline', '--no-warnings', '--format', 'bestaudio/best',
      '--progress-template', 'download:%(progress._percent_str)s', '--output', sourceTemplate, metadata.url,
    ], (line) => {
      const match = line.match(/download:\s*([\d.]+)%/);
      if (match) job.progress = Math.min(76, 25 + Math.round(Number(match[1]) * 0.51));
    });
    const sourceName = (await readdir(directory)).find((name) => name.startsWith('source.'));
    if (!sourceName) throw new Error('No audio stream was downloaded.');
    const sourcePath = path.join(directory, sourceName);
    const outputPath = path.join(directory, 'output.mp3');

    job.status = 'converting'; job.progress = 80; job.stageMessage = `Encoding ${job.bitrate} MP3…`;
    const ffmpegArgs = ['-y'];
    if (request.startTime && request.startTime > 0) ffmpegArgs.push('-ss', String(request.startTime));
    ffmpegArgs.push('-i', sourcePath);
    if (request.endTime && request.endTime > 0) {
      const length = request.startTime ? request.endTime - request.startTime : request.endTime;
      if (length > 0) ffmpegArgs.push('-t', String(length));
    }
    const filters: string[] = [];
    if (request.normalizeAudio) filters.push('loudnorm=I=-16:TP=-1.5:LRA=11');
    if (request.fadeInOut) {
      filters.push('afade=t=in:st=0:d=1.5');
      const end = request.endTime || metadata.duration;
      const length = Math.max(0, end - (request.startTime || 0));
      if (length > 1.5) filters.push(`afade=t=out:st=${Math.max(0, length - 1.5)}:d=1.5`);
    }
    if (filters.length) ffmpegArgs.push('-af', filters.join(','));
    ffmpegArgs.push('-vn', '-c:a', 'libmp3lame', '-b:a', job.bitrate, '-id3v2_version', '3',
      '-metadata', `title=${job.videoTitle}`, '-metadata', `artist=${artist}`, '-metadata', `album=${album}`, outputPath);
    await run(executable('ffmpeg'), ffmpegArgs);

    job.progress = 96; job.status = 'tagging'; job.stageMessage = 'Finalizing MP3 metadata…';
    job.filePath = outputPath; job.mimeType = 'audio/mpeg'; job.fileSize = (await stat(outputPath)).size;
    job.finalFileName = safeAudioName(`${artist} - ${job.videoTitle}`, 'mp3');
    job.status = 'completed'; job.progress = 100; job.completedAt = Date.now(); job.stageMessage = 'MP3 ready to play and download.';
    await rm(sourcePath, { force: true });
  } catch (error) {
    job.status = 'error'; job.progress = 100; job.error = error instanceof Error ? error.message : String(error);
    job.stageMessage = 'Conversion failed.';
  }
}

export function getYouTubeJob(id: string) { return registry.jobs.get(id); }
export function completedYouTubeJobs() { return [...registry.jobs.values()].filter((job) => job.status === 'completed').sort((a, b) => b.createdAt - a.createdAt); }

if (!registry.cleanupStarted) {
  registry.cleanupStarted = true;
  setInterval(() => {
    const cutoff = Date.now() - 60 * 60_000;
    for (const [id, job] of registry.jobs) if (job.createdAt < cutoff) {
      registry.jobs.delete(id);
      void rm(path.join(workRoot, id), { recursive: true, force: true });
    }
  }, 10 * 60_000).unref();
}
