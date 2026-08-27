import { NextResponse } from 'next/server';
import { getYouTubeJob } from '@/lib/youtube-jobs';
export const runtime = 'nodejs';
export async function GET(_: Request, { params }: { params: Promise<{ jobId: string }> }) {
  const job = getYouTubeJob((await params).jobId);
  return job ? NextResponse.json({ job }) : NextResponse.json({ error: 'Job not found or expired.' }, { status: 404 });
}
