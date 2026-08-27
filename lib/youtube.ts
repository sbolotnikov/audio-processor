import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export function normalizeYouTubeUrl(rawValue: string) {
  const value = rawValue.trim();
  const match = value.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?(?:[^#]*&)?v=)|music\.youtube\.com\/watch\?(?:[^#]*&)?v=)([\w-]{11})/i);
  const id = match?.[1] ?? (/^[\w-]{11}$/.test(value) ? value : undefined);
  if (!id) throw new Error('Enter a valid YouTube video, Shorts, or Music URL.');
  return { id, url: `https://www.youtube.com/watch?v=${id}` };
}

export async function getYouTubeInfo(rawUrl: string) {
  const { id, url } = normalizeYouTubeUrl(rawUrl);
  const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error('This video is unavailable or private.');
  const data = await response.json() as { title?: string; author_name?: string; thumbnail_url?: string };
  return {
    id,
    url,
    title: data.title || `YouTube audio ${id}`,
    author: data.author_name || 'YouTube',
    thumbnail: data.thumbnail_url || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  };
}

function ytDlpInvocation() {
  const configuredPath = process.env.YT_DLP_PATH?.trim();
  // A bare command is only useful when it really exists on PATH. Prefer the
  // app-bundled executable so copied example env files cannot cause ENOENT.
  const binDirectory = path.join(process.cwd(), 'bin');
  const windowsExecutable = path.join(binDirectory, 'yt-dlp.exe');
  if (process.platform === 'win32' && existsSync(windowsExecutable)) {
    return { command: windowsExecutable, prefixArgs: [] as string[] };
  }
  const bundled = path.join(binDirectory, 'yt-dlp');
  if (existsSync(bundled)) {
    return { command: bundled, prefixArgs: [] as string[] };
  }
  if (configuredPath) return { command: configuredPath, prefixArgs: [] as string[] };
  throw new Error('yt-dlp is not installed. Add the platform executable to the app bin folder or set YT_DLP_PATH.');
}

export async function extractYouTubeAudio(rawUrl: string) {
  const info = await getYouTubeInfo(rawUrl);
  const workDir = await mkdtemp(path.join(tmpdir(), 'audio-processor-'));
  const outputTemplate = path.join(workDir, 'audio.%(ext)s');

  try {
    const { command, prefixArgs } = ytDlpInvocation();
    await execFileAsync(command, [...prefixArgs,
      '--no-playlist',
      '--no-warnings',
      '--format', 'bestaudio/best',
      '--output', outputTemplate,
      info.url,
    ], { timeout: 5 * 60_000, maxBuffer: 10 * 1024 * 1024 });
    const outputName = (await readdir(workDir)).find((name) => name.startsWith('audio.'));
    if (!outputName) throw new Error('The extractor did not produce an audio file.');
    const extension = path.extname(outputName).slice(1).toLowerCase() || 'webm';
    return { info, data: await readFile(path.join(workDir, outputName)), extension };
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`YouTube extraction failed. ${detail}`);
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
}

export function safeAudioName(title: string, extension: string) {
  return `${title.replace(/[<>:"/\\|?*\x00-\x1f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 120) || 'youtube-audio'}.${extension}`;
}
