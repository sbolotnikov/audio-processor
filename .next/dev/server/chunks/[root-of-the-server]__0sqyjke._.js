module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:child_process [external] (node:child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:child_process", () => require("node:child_process"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/audio-processor/lib/youtube.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractYouTubeAudio",
    ()=>extractYouTubeAudio,
    "getYouTubeInfo",
    ()=>getYouTubeInfo,
    "normalizeYouTubeUrl",
    ()=>normalizeYouTubeUrl,
    "safeAudioName",
    ()=>safeAudioName
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:child_process [external] (node:child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
;
;
;
;
;
;
const execFileAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__["execFile"]);
function normalizeYouTubeUrl(rawValue) {
    const value = rawValue.trim();
    const match = value.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?(?:[^#]*&)?v=)|music\.youtube\.com\/watch\?(?:[^#]*&)?v=)([\w-]{11})/i);
    const id = match?.[1] ?? (/^[\w-]{11}$/.test(value) ? value : undefined);
    if (!id) throw new Error('Enter a valid YouTube video, Shorts, or Music URL.');
    return {
        id,
        url: `https://www.youtube.com/watch?v=${id}`
    };
}
async function getYouTubeInfo(rawUrl) {
    const { id, url } = normalizeYouTubeUrl(rawUrl);
    const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`, {
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        signal: AbortSignal.timeout(10_000)
    });
    if (!response.ok) throw new Error('This video is unavailable or private.');
    const data = await response.json();
    return {
        id,
        url,
        title: data.title || `YouTube audio ${id}`,
        author: data.author_name || 'YouTube',
        thumbnail: data.thumbnail_url || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    };
}
function ytDlpInvocation() {
    const configuredPath = process.env.YT_DLP_PATH?.trim();
    // A bare command is only useful when it really exists on PATH. Prefer the
    // app-bundled executable so copied example env files cannot cause ENOENT.
    const binDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), 'bin');
    const windowsExecutable = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(binDirectory, 'yt-dlp.exe');
    if (process.platform === 'win32' && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])(windowsExecutable)) {
        return {
            command: windowsExecutable,
            prefixArgs: []
        };
    }
    const bundled = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(binDirectory, 'yt-dlp');
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])(bundled)) {
        return {
            command: bundled,
            prefixArgs: []
        };
    }
    if (configuredPath) return {
        command: configuredPath,
        prefixArgs: []
    };
    throw new Error('yt-dlp is not installed. Add the platform executable to the app bin folder or set YT_DLP_PATH.');
}
async function extractYouTubeAudio(rawUrl) {
    const info = await getYouTubeInfo(rawUrl);
    const workDir = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdtemp"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["tmpdir"])(), 'audio-processor-'));
    const outputTemplate = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(workDir, 'audio.%(ext)s');
    try {
        const { command, prefixArgs } = ytDlpInvocation();
        await execFileAsync(command, [
            ...prefixArgs,
            '--no-playlist',
            '--no-warnings',
            '--format',
            'bestaudio/best',
            '--output',
            outputTemplate,
            info.url
        ], {
            timeout: 5 * 60_000,
            maxBuffer: 10 * 1024 * 1024
        });
        const outputName = (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readdir"])(workDir)).find((name)=>name.startsWith('audio.'));
        if (!outputName) throw new Error('The extractor did not produce an audio file.');
        const extension = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].extname(outputName).slice(1).toLowerCase() || 'webm';
        return {
            info,
            data: await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(workDir, outputName)),
            extension
        };
    } catch (error) {
        const detail = error instanceof Error ? error.message : String(error);
        throw new Error(`YouTube extraction failed. ${detail}`);
    } finally{
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["rm"])(workDir, {
            recursive: true,
            force: true
        });
    }
}
function safeAudioName(title, extension) {
    return `${title.replace(/[<>:"/\\|?*\x00-\x1f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 120) || 'youtube-audio'}.${extension}`;
}
}),
"[project]/audio-processor/lib/youtube-jobs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "completedYouTubeJobs",
    ()=>completedYouTubeJobs,
    "getYouTubeJob",
    ()=>getYouTubeJob,
    "startYouTubeJob",
    ()=>startYouTubeJob,
    "videoInfo",
    ()=>videoInfo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:child_process [external] (node:child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/lib/youtube.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const globalJobs = globalThis;
const registry = globalJobs.__youtubeJobs ??= {
    jobs: new Map(),
    cleanupStarted: false
};
const workRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["tmpdir"])(), 'audio-processor-youtube');
function executable(name) {
    const configured = process.env[name === 'yt-dlp' ? 'YT_DLP_PATH' : 'FFMPEG_PATH']?.trim();
    const local = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), 'bin', `${name}${("TURBOPACK compile-time truthy", 1) ? '.exe' : "TURBOPACK unreachable"}`);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])(local) ? local : configured || name;
}
function run(command, args, onLine) {
    return new Promise((resolve, reject)=>{
        const child = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__["spawn"])(command, args, {
            windowsHide: true
        });
        let errorOutput = '';
        const consume = (chunk)=>{
            const text = chunk.toString();
            errorOutput = (errorOutput + text).slice(-8000);
            text.split(/\r?\n/).forEach((line)=>onLine?.(line));
        };
        child.stdout.on('data', consume);
        child.stderr.on('data', consume);
        child.on('error', reject);
        child.on('close', (code)=>code === 0 ? resolve() : reject(new Error(errorOutput.trim() || `${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].basename(command)} exited with code ${code}`)));
    });
}
function durationLabel(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const rest = Math.floor(seconds % 60).toString().padStart(2, '0');
    return hours ? `${hours}:${minutes.toString().padStart(2, '0')}:${rest}` : `${minutes}:${rest}`;
}
function formats(duration) {
    return [
        '320k',
        '256k',
        '192k',
        '128k',
        '64k'
    ].map((bitrate)=>({
            bitrate,
            label: `${bitrate.replace('k', '')} kbps MP3`,
            qualityNote: bitrate === '320k' ? 'Highest quality' : bitrate === '192k' ? 'Recommended' : 'Smaller file',
            estimatedSizeBytes: Math.round(parseInt(bitrate) * 1000 / 8 * Math.max(duration, 180)),
            format: 'mp3'
        }));
}
async function videoInfo(url) {
    const basic = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getYouTubeInfo"])(url);
    let detail = {};
    try {
        let json = '';
        await run(executable('yt-dlp'), [
            '--dump-single-json',
            '--skip-download',
            '--no-playlist',
            '--no-warnings',
            basic.url
        ], (line)=>{
            if (line.trim().startsWith('{')) json = line;
        });
        if (json) detail = JSON.parse(json);
    } catch  {}
    const duration = Number(detail.duration) || 180;
    const title = detail.title || basic.title;
    let artist = detail.artist || detail.uploader || basic.author;
    if (!detail.artist && title.includes(' - ')) artist = title.split(' - ')[0].trim();
    return {
        id: basic.id,
        url: basic.url,
        title,
        artist,
        album: detail.album || 'YouTube Audio',
        channel: detail.channel || detail.uploader || basic.author,
        channelUrl: detail.channel_url || detail.uploader_url,
        duration,
        durationFormatted: durationLabel(duration),
        thumbnail: detail.thumbnail || basic.thumbnail,
        viewCount: Number(detail.view_count) || 0,
        uploadDate: detail.upload_date ? `${detail.upload_date.slice(0, 4)}-${detail.upload_date.slice(4, 6)}-${detail.upload_date.slice(6, 8)}` : undefined,
        description: detail.description?.slice(0, 300),
        formats: formats(duration)
    };
}
async function startYouTubeJob(request) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeYouTubeUrl"])(request.url);
    const id = crypto.randomUUID();
    const isVideo = request.outputType === 'video';
    const job = {
        id,
        url: request.url,
        videoTitle: 'YouTube media',
        finalFileName: isVideo ? 'video.mp4' : 'audio.mp3',
        status: 'queued',
        outputType: isVideo ? 'video' : 'audio',
        progress: 5,
        stageMessage: 'Queued for extraction…',
        bitrate: request.bitrate || '320k',
        createdAt: Date.now()
    };
    if (isVideo) job.bitrate = request.videoQuality === 'best' ? 'best' : `${request.videoQuality || '720'}p`;
    registry.jobs.set(id, job);
    void execute(job, request);
    return job;
}
async function execute(job, request) {
    const directory = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(workRoot, job.id);
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(directory, {
            recursive: true
        });
        job.status = 'fetching';
        job.progress = 12;
        job.stageMessage = 'Reading video metadata…';
        const metadata = await videoInfo(request.url);
        job.metadata = metadata;
        job.videoTitle = request.title?.trim() || metadata.title;
        const artist = request.artist?.trim() || metadata.artist;
        const album = request.album?.trim() || metadata.album || 'YouTube Audio';
        if (request.outputType === 'video') {
            await executeVideo(job, request, metadata, artist, directory);
            return;
        }
        job.status = 'downloading';
        job.progress = 25;
        job.stageMessage = 'Downloading the best audio stream…';
        const sourceTemplate = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(directory, 'source.%(ext)s');
        await run(executable('yt-dlp'), [
            '--no-playlist',
            '--newline',
            '--no-warnings',
            '--format',
            'bestaudio/best',
            '--progress-template',
            'download:%(progress._percent_str)s',
            '--output',
            sourceTemplate,
            metadata.url
        ], (line)=>{
            const match = line.match(/download:\s*([\d.]+)%/);
            if (match) job.progress = Math.min(76, 25 + Math.round(Number(match[1]) * 0.51));
        });
        const sourceName = (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readdir"])(directory)).find((name)=>name.startsWith('source.'));
        if (!sourceName) throw new Error('No audio stream was downloaded.');
        const sourcePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(directory, sourceName);
        const outputPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(directory, 'output.mp3');
        job.status = 'converting';
        job.progress = 80;
        job.stageMessage = `Encoding ${job.bitrate} MP3…`;
        const ffmpegArgs = [
            '-y'
        ];
        if (request.startTime && request.startTime > 0) ffmpegArgs.push('-ss', String(request.startTime));
        ffmpegArgs.push('-i', sourcePath);
        if (request.endTime && request.endTime > 0) {
            const length = request.startTime ? request.endTime - request.startTime : request.endTime;
            if (length > 0) ffmpegArgs.push('-t', String(length));
        }
        const filters = [];
        if (request.normalizeAudio) filters.push('loudnorm=I=-16:TP=-1.5:LRA=11');
        if (request.fadeInOut) {
            filters.push('afade=t=in:st=0:d=1.5');
            const end = request.endTime || metadata.duration;
            const length = Math.max(0, end - (request.startTime || 0));
            if (length > 1.5) filters.push(`afade=t=out:st=${Math.max(0, length - 1.5)}:d=1.5`);
        }
        if (filters.length) ffmpegArgs.push('-af', filters.join(','));
        ffmpegArgs.push('-vn', '-c:a', 'libmp3lame', '-b:a', job.bitrate, '-id3v2_version', '3', '-metadata', `title=${job.videoTitle}`, '-metadata', `artist=${artist}`, '-metadata', `album=${album}`, outputPath);
        await run(executable('ffmpeg'), ffmpegArgs);
        job.progress = 96;
        job.status = 'tagging';
        job.stageMessage = 'Finalizing MP3 metadata…';
        job.filePath = outputPath;
        job.mimeType = 'audio/mpeg';
        job.fileSize = (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])(outputPath)).size;
        job.finalFileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeAudioName"])(`${artist} - ${job.videoTitle}`, 'mp3');
        job.status = 'completed';
        job.progress = 100;
        job.completedAt = Date.now();
        job.stageMessage = 'MP3 ready to play and download.';
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["rm"])(sourcePath, {
            force: true
        });
    } catch (error) {
        job.status = 'error';
        job.progress = 100;
        job.error = error instanceof Error ? error.message : String(error);
        job.stageMessage = 'Conversion failed.';
    }
}
async function executeVideo(job, request, metadata, artist, directory) {
    job.status = 'downloading';
    job.progress = 25;
    job.stageMessage = 'Downloading video and audio streams...';
    const sourceTemplate = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(directory, 'source.%(ext)s');
    const heightFilter = request.videoQuality && request.videoQuality !== 'best' ? `[height<=${request.videoQuality}]` : '';
    const videoFormat = `bestvideo${heightFilter}[ext=mp4]+bestaudio[ext=m4a]/bestvideo${heightFilter}+bestaudio/best${heightFilter}[ext=mp4]/best${heightFilter}`;
    await run(executable('yt-dlp'), [
        '--no-playlist',
        '--newline',
        '--no-warnings',
        '--format',
        videoFormat,
        '--merge-output-format',
        'mp4',
        '--ffmpeg-location',
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(executable('ffmpeg')),
        '--progress-template',
        'download:%(progress._percent_str)s',
        '--output',
        sourceTemplate,
        metadata.url
    ], (line)=>{
        const match = line.match(/download:\s*([\d.]+)%/);
        if (match) job.progress = Math.min(76, 25 + Math.round(Number(match[1]) * 0.51));
    });
    const sourceName = (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readdir"])(directory)).find((name)=>name.startsWith('source.'));
    if (!sourceName) throw new Error('No video file was downloaded.');
    const sourcePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(directory, sourceName);
    const outputPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(directory, 'output.mp4');
    job.status = 'converting';
    job.progress = 82;
    job.stageMessage = 'Finalizing MP4 video...';
    const args = [
        '-y'
    ];
    if (request.startTime && request.startTime > 0) args.push('-ss', String(request.startTime));
    args.push('-i', sourcePath);
    if (request.endTime && request.endTime > 0) {
        const length = request.endTime - (request.startTime || 0);
        if (length > 0) args.push('-t', String(length));
    }
    const filters = [];
    if (request.normalizeAudio) filters.push('loudnorm=I=-16:TP=-1.5:LRA=11');
    if (request.fadeInOut) {
        filters.push('afade=t=in:st=0:d=1.5');
        const length = Math.max(0, (request.endTime || metadata.duration) - (request.startTime || 0));
        if (length > 1.5) filters.push(`afade=t=out:st=${Math.max(0, length - 1.5)}:d=1.5`);
    }
    if (filters.length) args.push('-af', filters.join(','));
    args.push('-map', '0:v:0', '-map', '0:a:0?', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-metadata', `title=${job.videoTitle}`, '-metadata', `artist=${artist}`, outputPath);
    await run(executable('ffmpeg'), args);
    job.progress = 96;
    job.status = 'tagging';
    job.stageMessage = 'Finalizing MP4 metadata...';
    job.filePath = outputPath;
    job.mimeType = 'video/mp4';
    job.fileSize = (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])(outputPath)).size;
    job.finalFileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeAudioName"])(`${artist} - ${job.videoTitle}`, 'mp4');
    job.status = 'completed';
    job.progress = 100;
    job.completedAt = Date.now();
    job.stageMessage = 'Video ready to play and download.';
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["rm"])(sourcePath, {
        force: true
    });
}
function getYouTubeJob(id) {
    return registry.jobs.get(id);
}
function completedYouTubeJobs() {
    return [
        ...registry.jobs.values()
    ].filter((job)=>job.status === 'completed').sort((a, b)=>b.createdAt - a.createdAt);
}
if (!registry.cleanupStarted) {
    registry.cleanupStarted = true;
    setInterval(()=>{
        const cutoff = Date.now() - 60 * 60_000;
        for (const [id, job] of registry.jobs)if (job.createdAt < cutoff) {
            registry.jobs.delete(id);
            void (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["rm"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(workRoot, id), {
                recursive: true,
                force: true
            });
        }
    }, 10 * 60_000).unref();
}
}),
"[project]/audio-processor/app/api/progress/[jobId]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2d$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/lib/youtube-jobs.ts [app-route] (ecmascript)");
;
;
const runtime = 'nodejs';
async function GET(_, { params }) {
    const job = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2d$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getYouTubeJob"])((await params).jobId);
    return job ? __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        job
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Job not found or expired.'
    }, {
        status: 404
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0sqyjke._.js.map