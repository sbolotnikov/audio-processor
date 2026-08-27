"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Globe2, Loader2, Music, ShieldCheck, Video } from 'lucide-react';
import { SiteNavigation } from '@/components/SiteNavigation';
import { VideoDetailsCard } from '@/components/VideoDetailsCard';
import { ConversionCard } from '@/components/ConversionCard';
import type { AudioFormatOption, ConversionJob, VideoMetadata } from '@/types/types';

export default function MediaLinkPage() {
  const [url, setUrl] = useState('');
  const [outputType, setOutputType] = useState<'audio' | 'video'>('video');
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [job, setJob] = useState<ConversionJob | null>(null);
  const [selectedBitrate, setSelectedBitrate] = useState<AudioFormatOption['bitrate']>('320k');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => { if (pollRef.current) clearInterval(pollRef.current); }, []);

  const inspectUrl = async () => {
    if (!url.trim()) return;
    setIsLoading(true); setError(null); setMetadata(null); setJob(null);
    try {
      const response = await fetch(`/api/media/info?url=${encodeURIComponent(url.trim())}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to inspect this link.');
      setMetadata(data);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Unable to inspect this link.');
    } finally { setIsLoading(false); }
  };

  const beginPolling = (id: string) => {
    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = setInterval(async () => {
      const response = await fetch(`/api/progress/${id}`);
      if (!response.ok) return;
      const data = await response.json();
      if (!data.job) return;
      setJob(data.job);
      if (data.job.status === 'completed' || data.job.status === 'error') {
        if (pollRef.current) clearInterval(pollRef.current);
        pollRef.current = null;
      }
    }, 800);
  };

  const convert = async (options: {
    bitrate: AudioFormatOption['bitrate']; title?: string; artist?: string; album?: string;
    startTime?: number; endTime?: number; normalizeAudio?: boolean; fadeInOut?: boolean;
    outputType?: 'audio' | 'video'; videoQuality?: 'best' | '1080' | '720' | '480' | '360';
  }) => {
    if (!metadata) return;
    setIsLoading(true); setError(null);
    try {
      const response = await fetch('/api/media/convert', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...options, url: metadata.url }),
      });
      const data = await response.json();
      if (!response.ok || !data.job) throw new Error(data.error || 'Unable to start download.');
      setJob(data.job); beginPolling(data.job.id);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Unable to start download.');
    } finally { setIsLoading(false); }
  };

  const reset = () => {
    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = null; setUrl(''); setMetadata(null); setJob(null); setError(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link href="/medialink" className="flex items-center gap-3 font-bold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/15 text-sky-400"><Globe2 className="h-5 w-5" /></span><span className="hidden sm:inline">Media Downloader</span></Link>
          <SiteNavigation accent="orange" />
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6">
        <section className="space-y-3 text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300"><ShieldCheck className="h-3.5 w-3.5" /> Public, non-DRM media</div>
          <h1 className="text-3xl font-extrabold sm:text-5xl">Download from <span className="text-sky-400">VK, Rutube & more</span></h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-400">Supports public links from VK, VK Video, Rutube, Vimeo, Dailymotion, TikTok, Twitch, SoundCloud, Facebook, Instagram, and X.</p>
        </section>

        <div className="mx-auto grid max-w-md grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#141414] p-1.5">
          <button onClick={() => setOutputType('audio')} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ${outputType === 'audio' ? 'bg-sky-500 text-white' : 'text-zinc-400 hover:bg-white/5'}`}><Music className="h-4 w-4" /> Audio MP3</button>
          <button onClick={() => setOutputType('video')} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ${outputType === 'video' ? 'bg-sky-500 text-white' : 'text-zinc-400 hover:bg-white/5'}`}><Video className="h-4 w-4" /> Video MP4</button>
        </div>

        <section className="rounded-2xl border border-white/10 bg-[#141414] p-2 shadow-2xl">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input value={url} onChange={(event) => setUrl(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && inspectUrl()} placeholder="Paste a VK, Rutube, Vimeo, or other supported link" className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-zinc-600" />
            <button onClick={inspectUrl} disabled={!url.trim() || isLoading} className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold disabled:opacity-40">{isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />} Prepare {outputType === 'video' ? 'MP4' : 'MP3'}</button>
          </div>
          {error && <p className="px-4 pb-2 pt-3 text-xs text-rose-400">{error}</p>}
        </section>

        {job && <ConversionCard job={job} onReset={reset} />}
        {metadata && !job && <VideoDetailsCard metadata={metadata} selectedBitrate={selectedBitrate} onSelectBitrate={setSelectedBitrate} outputType={outputType} onSelectOutputType={setOutputType} onConvert={convert} isConverting={isLoading} />}
      </main>
    </div>
  );
}
