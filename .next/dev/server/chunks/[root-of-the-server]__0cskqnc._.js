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
"[project]/audio-processor/app/api/youtube/extract/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/lib/youtube.ts [app-route] (ecmascript)");
;
;
const runtime = 'nodejs';
const maxDuration = 300;
async function POST(request) {
    try {
        const body = await request.json();
        if (!body.url) return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'YouTube URL is required.'
        }, {
            status: 400
        });
        const { info, data, extension } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractYouTubeAudio"])(body.url);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](new Uint8Array(data), {
            headers: {
                'Content-Type': extension === 'm4a' ? 'audio/mp4' : extension === 'mp3' ? 'audio/mpeg' : 'audio/webm',
                'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$youtube$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeAudioName"])(info.title, extension))}`,
                'X-Video-Title': encodeURIComponent(info.title),
                'X-Audio-Extension': extension
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : 'Unable to extract audio.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0cskqnc._.js.map