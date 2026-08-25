import { NextRequest, NextResponse } from 'next/server';
import { extractYouTubeAudio, safeAudioName } from '@/lib/youtube';

export const runtime = 'nodejs';
export const maxDuration = 300;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { url?: string };
    if (!body.url) return NextResponse.json({ error: 'YouTube URL is required.' }, { status: 400 });
    const { info, data, extension } = await extractYouTubeAudio(body.url);
    return new NextResponse(new Uint8Array(data), {
      headers: {
        'Content-Type': extension === 'm4a' ? 'audio/mp4' : extension === 'mp3' ? 'audio/mpeg' : 'audio/webm',
        'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(safeAudioName(info.title, extension))}`,
        'X-Video-Title': encodeURIComponent(info.title),
        'X-Audio-Extension': extension,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to extract audio.' }, { status: 500 });
  }
}
