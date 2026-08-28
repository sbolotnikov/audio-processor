import { NextRequest, NextResponse } from 'next/server';
import { extractVideoFrame } from '@/lib/youtube-jobs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, { params }: { params: Promise<{ jobId: string }> }) {
  const time = Number(request.nextUrl.searchParams.get('time'));
  if (!Number.isFinite(time) || time < 0) {
    return NextResponse.json({ error: 'Provide a non-negative timestamp in seconds.' }, { status: 400 });
  }

  try {
    const preferStream = request.nextUrl.searchParams.get('source') !== 'local';
    const frame = await extractVideoFrame((await params).jobId, time, preferStream);
    return new NextResponse(new Uint8Array(frame.data), {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(frame.fileName)}`,
        'Cache-Control': 'no-store',
        'X-Frame-Source': frame.source,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unable to extract the frame.' },
      { status: 400 },
    );
  }
}
