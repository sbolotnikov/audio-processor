import { NextRequest, NextResponse } from 'next/server';
import { videoInfo } from '@/lib/youtube-jobs';
export const runtime = 'nodejs';
export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get('url');
    if (!url) return NextResponse.json({ error: 'YouTube URL is required.' }, { status: 400 });
    return NextResponse.json(await videoInfo(url));
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to read video.' }, { status: 400 });
  }
}
