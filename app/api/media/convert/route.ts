import { NextRequest, NextResponse } from 'next/server';
import { startMediaJob } from '@/lib/youtube-jobs';
export const runtime = 'nodejs';
export const maxDuration = 300;
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.url) return NextResponse.json({ error: 'Media URL is required.' }, { status: 400 });
    return NextResponse.json({ success: true, job: await startMediaJob(body) });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to start download.' }, { status: 400 });
  }
}
