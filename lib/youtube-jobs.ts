import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import type { ConversionJob, VideoMetadata } from '@/types/types';
import { getYouTubeInfo, normalizeYouTubeUrl, safeAudioName } from '@/lib/youtube';

type ConvertRequest = {
  url: string; bitrate?: string; title?: string; artist?: string; album?: string;
  startTime?: number; endTime?: number; normalizeAudio?: boolean; fadeInOut?: boolean;
  outputType?: 'audio' | 'video';
  videoQuality?: 'best' | '1080' | '720' | '480' | '360';
  sourceKind?: 'youtube' | 'media';
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

const supportedMediaHosts = [
  'vk.com', 'vkvideo.ru', 'rutube.ru', 'vimeo.com', 'dailymotion.com', 'tiktok.com',
  'twitch.tv', 'soundcloud.com', 'facebook.com', 'instagram.com', 'x.com', 'twitter.com',
];

function validateMediaUrl(rawUrl: string) {
  let parsed: URL;
  try { parsed = new URL(rawUrl); } catch { throw new Error('Enter a valid media URL.'); }
  if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error('Only HTTP and HTTPS links are supported.');
  const host = parsed.hostname.toLowerCase().replace(/^www\./, '');
  if (!supportedMediaHosts.some((allowed) => host === allowed || host.endsWith(`.${allowed}`))) {
    throw new Error(`Unsupported site: ${host}. Try VK, Rutube, Vimeo, Dailymotion, TikTok, Twitch, SoundCloud, Facebook, Instagram, or X.`);
  }
  return parsed.toString();
}

export async function mediaInfo(rawUrl: string): Promise<VideoMetadata> {
  const url = validateMediaUrl(rawUrl);
  let json = '';
  await run(executable('yt-dlp'), ['--dump-single-json', '--skip-download', '--no-playlist', '--no-warnings', url], (line) => {
    if (line.trim().startsWith('{')) json = line;
  });
  if (!json) throw new Error('The site did not return usable video information. The media may be private or DRM-protected.');
  const detail = JSON.parse(json);
  const duration = Number(detail.duration) || 0;
  return {
    id: detail.id || crypto.randomUUID(), url: detail.webpage_url || url,
    title: detail.title || 'Untitled media', artist: detail.artist || detail.uploader || detail.channel || new URL(url).hostname,
    album: detail.album || 'Downloaded Media', channel: detail.channel || detail.uploader || new URL(url).hostname,
    channelUrl: detail.channel_url || detail.uploader_url, duration, durationFormatted: durationLabel(duration),
    thumbnail: detail.thumbnail || '', viewCount: Number(detail.view_count) || 0,
    uploadDate: detail.upload_date ? `${detail.upload_date.slice(0, 4)}-${detail.upload_date.slice(4, 6)}-${detail.upload_date.slice(6, 8)}` : undefined,
    description: detail.description?.slice(0, 300), formats: formats(duration),
  };
}

export async function startMediaJob(request: ConvertRequest) {
  const url = validateMediaUrl(request.url);
  return startYouTubeJob({ ...request, url, sourceKind: 'media' });
}

export async function startYouTubeJob(request: ConvertRequest) {
  if (request.sourceKind !== 'media') normalizeYouTubeUrl(request.url);
  const id = crypto.randomUUID();
  const isVideo = request.outputType === 'video';
  const job: StoredJob = {
    id, url: request.url, videoTitle: 'YouTube media', finalFileName: isVideo ? 'video.mp4' : 'audio.mp3', status: 'queued',
    outputType: isVideo ? 'video' : 'audio',
    progress: 5, stageMessage: 'Queued for extraction…', bitrate: request.bitrate || '320k', createdAt: Date.now(),
  };
  if (isVideo) job.bitrate = request.videoQuality === 'best' ? 'best' : `${request.videoQuality || '720'}p`;
  registry.jobs.set(id, job);
  void execute(job, request);
  return job;
}

async function execute(job: StoredJob, request: ConvertRequest) {
  const directory = path.join(workRoot, job.id);
  try {
    await mkdir(directory, { recursive: true });
    job.status = 'fetching'; job.progress = 12; job.stageMessage = 'Reading video metadata…';
    const metadata = request.sourceKind === 'media' ? await mediaInfo(request.url) : await videoInfo(request.url);
    job.metadata = metadata; job.videoTitle = request.title?.trim() || metadata.title;
    const artist = request.artist?.trim() || metadata.artist;
    const album = request.album?.trim() || metadata.album || 'YouTube Audio';
    if (request.outputType === 'video') {
      await executeVideo(job, request, metadata, artist, directory);
      return;
    }

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

async function executeVideo(job: StoredJob, request: ConvertRequest, metadata: VideoMetadata, artist: string, directory: string) {
  job.status = 'downloading'; job.progress = 25; job.stageMessage = 'Downloading video and audio streams...';
  const sourceTemplate = path.join(directory, 'source.%(ext)s');
  const heightFilter = request.videoQuality && request.videoQuality !== 'best' ? `[height<=${request.videoQuality}]` : '';
  const videoFormat = `bestvideo${heightFilter}[ext=mp4]+bestaudio[ext=m4a]/bestvideo${heightFilter}+bestaudio/best${heightFilter}[ext=mp4]/best${heightFilter}`;
  await run(executable('yt-dlp'), [
    '--no-playlist', '--newline', '--no-warnings',
    '--format', videoFormat,
    '--merge-output-format', 'mp4', '--ffmpeg-location', path.dirname(executable('ffmpeg')),
    '--progress-template', 'download:%(progress._percent_str)s', '--output', sourceTemplate, metadata.url,
  ], (line) => {
    const match = line.match(/download:\s*([\d.]+)%/);
    if (match) job.progress = Math.min(76, 25 + Math.round(Number(match[1]) * 0.51));
  });
  const sourceName = (await readdir(directory)).find((name) => name.startsWith('source.'));
  if (!sourceName) throw new Error('No video file was downloaded.');
  const sourcePath = path.join(directory, sourceName);
  const outputPath = path.join(directory, 'output.mp4');

  job.status = 'converting'; job.progress = 82; job.stageMessage = 'Finalizing MP4 video...';
  const args = ['-y'];
  if (request.startTime && request.startTime > 0) args.push('-ss', String(request.startTime));
  args.push('-i', sourcePath);
  if (request.endTime && request.endTime > 0) {
    const length = request.endTime - (request.startTime || 0);
    if (length > 0) args.push('-t', String(length));
  }
  const filters: string[] = [];
  if (request.normalizeAudio) filters.push('loudnorm=I=-16:TP=-1.5:LRA=11');
  if (request.fadeInOut) {
    filters.push('afade=t=in:st=0:d=1.5');
    const length = Math.max(0, (request.endTime || metadata.duration) - (request.startTime || 0));
    if (length > 1.5) filters.push(`afade=t=out:st=${Math.max(0, length - 1.5)}:d=1.5`);
  }
  if (filters.length) args.push('-af', filters.join(','));
  args.push('-map', '0:v:0', '-map', '0:a:0?', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart',
    '-metadata', `title=${job.videoTitle}`, '-metadata', `artist=${artist}`, outputPath);
  await run(executable('ffmpeg'), args);

  job.progress = 96; job.status = 'tagging'; job.stageMessage = 'Finalizing MP4 metadata...';
  job.filePath = outputPath; job.mimeType = 'video/mp4'; job.fileSize = (await stat(outputPath)).size;
  job.finalFileName = safeAudioName(`${artist} - ${job.videoTitle}`, 'mp4');
  job.status = 'completed'; job.progress = 100; job.completedAt = Date.now(); job.stageMessage = 'Video ready to play and download.';
  await rm(sourcePath, { force: true });
}

export function getYouTubeJob(id: string) { return registry.jobs.get(id); }
export function completedYouTubeJobs() { return [...registry.jobs.values()].filter((job) => job.status === 'completed').sort((a, b) => b.createdAt - a.createdAt); }

async function bestRemoteVideoStream(url: string) {
  const urls: string[] = [];
  await run(executable('yt-dlp'), [
    '--no-playlist', '--no-warnings', '--get-url', '--format', 'bestvideo/best', url,
  ], (line) => {
    const value = line.trim();
    if (/^https?:\/\//i.test(value)) urls.push(value);
  });
  if (!urls[0]) throw new Error('No directly seekable video stream was found.');
  return urls[0];
}

export async function extractVideoFrame(jobId: string, time: number, preferStream = true) {
  const job = registry.jobs.get(jobId);
  if (!job?.filePath || job.status !== 'completed' || job.outputType !== 'video') {
    throw new Error('Video is not ready or has expired.');
  }
  if (!Number.isFinite(time) || time < 0) throw new Error('Enter a valid timestamp.');
  const duration = job.metadata?.duration;
  if (duration && time > duration) throw new Error(`Timestamp must be between 0 and ${duration} seconds.`);

  const framePath = path.join(path.dirname(job.filePath), `frame-${crypto.randomUUID()}.png`);
  try {
    // Put -ss after -i so FFmpeg decodes to the requested instant instead of
    // jumping only to the nearest keyframe. No scale filter preserves the
    // downloaded stream's full native dimensions.
    const extract = (input: string) => run(executable('ffmpeg'), [
      '-y', '-i', input, '-ss', time.toFixed(6), '-map', '0:v:0',
      '-frames:v', '1', '-compression_level', '0', framePath,
    ]);
    let source = 'downloaded video';
    if (preferStream) {
      try {
        await extract(await bestRemoteVideoStream(job.url));
        source = 'highest-resolution remote stream';
      } catch {
        await extract(job.filePath);
      }
    } else {
      await extract(job.filePath);
    }
    return {
      data: await readFile(framePath),
      fileName: safeAudioName(`${job.videoTitle} - ${time.toFixed(3)}s`, 'png'),
      source,
    };
  } finally {
    await rm(framePath, { force: true });
  }
}

export async function extractYouTubeFrame(rawUrl: string, time: number) {
  const { url } = normalizeYouTubeUrl(rawUrl);
  if (!Number.isFinite(time) || time < 0) throw new Error('Enter a valid non-negative timestamp.');
  const directory = path.join(workRoot, `frames-${crypto.randomUUID()}`);
  const framePath = path.join(directory, 'frame.png');
  await mkdir(directory, { recursive: true });
  try {
    const streamUrl = await bestRemoteVideoStream(url);
    await run(executable('ffmpeg'), [
      '-y', '-i', streamUrl, '-ss', time.toFixed(6), '-map', '0:v:0',
      '-frames:v', '1', '-compression_level', '0', framePath,
    ]);
    return await readFile(framePath);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

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
