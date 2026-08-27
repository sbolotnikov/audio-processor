import { open, stat } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { NextRequest, NextResponse } from 'next/server';
import { getYouTubeJob } from '@/lib/youtube-jobs';
export const runtime = 'nodejs';
export async function GET(request: NextRequest, { params }: { params: Promise<{ jobId: string }> }) {
  const job = getYouTubeJob((await params).jobId);
  if (!job?.filePath || job.status !== 'completed') return NextResponse.json({ error: 'Audio not ready or expired.' }, { status: 404 });
  try {
    const size = (await stat(job.filePath)).size;
    const range = request.headers.get('range');
    let start = 0, end = size - 1, status = 200;
    if (range) {
      const match = range.match(/bytes=(\d*)-(\d*)/);
      if (match) {
        start = match[1] ? Number(match[1]) : 0;
        end = match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
        status = 206;
      }
    }
    if (start > end || start >= size) return new NextResponse(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
    const handle = await open(job.filePath, 'r');
    const stream = handle.createReadStream({ start, end });
    stream.once('close', () => void handle.close());
    return new NextResponse(Readable.toWeb(stream) as ReadableStream, { status, headers: {
      'Content-Type': job.mimeType || 'audio/mpeg', 'Accept-Ranges': 'bytes',
      'Content-Length': String(end - start + 1), ...(status === 206 ? { 'Content-Range': `bytes ${start}-${end}/${size}` } : {}),
    }});
  } catch { return NextResponse.json({ error: 'Audio file no longer exists.' }, { status: 404 }); }
}
