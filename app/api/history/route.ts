import { NextResponse } from 'next/server';
import { completedYouTubeJobs } from '@/lib/youtube-jobs';
export const runtime = 'nodejs';
export async function GET() { return NextResponse.json({ history: completedYouTubeJobs() }); }
