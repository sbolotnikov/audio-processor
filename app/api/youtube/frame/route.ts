import { NextRequest, NextResponse } from 'next/server';
import { extractYouTubeFrame } from '@/lib/youtube-jobs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  const time = Number(request.nextUrl.searchParams.get('time'));
  if (!url) return NextResponse.json({ error: 'YouTube URL is required.' }, { status: 400 });
  if (!Number.isFinite(time) || time < 0) {
    return NextResponse.json({ error: 'Provide a non-negative timestamp in seconds.' }, { status: 400 });
  }
  try {
    const image = await extractYouTubeFrame(url, time);
    return new NextResponse(new Uint8Array(image), {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="frame-${time.toFixed(3)}s.png"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unable to extract frame from stream.' },
      { status: 400 },
    );
  }
}
