import { readFile } from 'node:fs/promises';
import { NextResponse } from 'next/server';
import { getYouTubeJob } from '@/lib/youtube-jobs';
export const runtime = 'nodejs';
export async function GET(_: Request, { params }: { params: Promise<{ jobId: string }> }) {
  const job = getYouTubeJob((await params).jobId);
  if (!job?.filePath || job.status !== 'completed') return NextResponse.json({ error: 'File not ready or expired.' }, { status: 404 });
  try {
    return new NextResponse(new Uint8Array(await readFile(job.filePath)), { headers: {
      'Content-Type': job.mimeType || 'audio/mpeg',
      'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(job.finalFileName)}`,
      'Content-Length': String(job.fileSize || 0),
    }});
  } catch { return NextResponse.json({ error: 'File no longer exists.' }, { status: 404 }); }
}
