import { NextRequest, NextResponse } from 'next/server';
import { startYouTubeJob } from '@/lib/youtube-jobs';
export const runtime = 'nodejs';
export const maxDuration = 300;
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.url) return NextResponse.json({ error: 'YouTube URL is required.' }, { status: 400 });
    return NextResponse.json({ success: true, job: await startYouTubeJob(body) });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to start conversion.' }, { status: 400 });
  }
}
