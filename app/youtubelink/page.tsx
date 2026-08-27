"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../../components/Header';
import { UrlInputSection } from '../../components/UrlInputSection';
import { VideoDetailsCard } from '../../components/VideoDetailsCard';
import { ConversionCard } from '../../components/ConversionCard';
import { RecentConversions } from '../../components/RecentConversions';
import { FaqSection } from '../../components/FaqSection';
import { VideoMetadata, AudioFormatOption, ConversionJob, HistoryItem } from'../../types/types';
import { Music, Sparkles, Video } from 'lucide-react';

export default function App() {
  const [url, setUrl] = useState<string>('');
  const [isLoadingInfo, setIsLoadingInfo] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [selectedBitrate, setSelectedBitrate] = useState<AudioFormatOption['bitrate']>('320k');
  const [outputType, setOutputType] = useState<'audio' | 'video'>('audio');

  const [currentJob, setCurrentJob] = useState<ConversionJob | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false);

  // Keep the server render and first browser render identical. Saved history
  // is restored only after React has hydrated the page.
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  const pollingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Restore history after hydration.
  useEffect(() => {
    try {
      const saved = localStorage.getItem('yt_mp3_history');
      if (saved) setHistory(JSON.parse(saved));
    } catch (error) {
      console.warn('Failed to restore history from localStorage:', error);
    } finally {
      setHistoryLoaded(true);
    }
  }, []);

  // Save history only after restoration, so the initial empty state does not
  // overwrite a returning user's saved downloads.
  useEffect(() => {
    if (!historyLoaded) return;
    try {
      localStorage.setItem('yt_mp3_history', JSON.stringify(history));
    } catch (e) {
      console.warn('Failed to save history to localStorage:', e);
    }
  }, [history, historyLoaded]);

  // Clean up polling timer on unmount
  useEffect(() => {
    return () => {
      if (pollingTimerRef.current) {
        clearInterval(pollingTimerRef.current);
      }
    };
  }, []);

  // Fetch Video Info from Backend
  const handleFetchInfo = async (overrideUrl?: string) => {
    const targetUrl = (overrideUrl || url).trim();
    if (!targetUrl) return;

    setIsLoadingInfo(true);
    setError(null);
    setMetadata(null);
    setCurrentJob(null);

    try {
      const res = await fetch(`/api/info?url=${encodeURIComponent(targetUrl)}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to retrieve video details');
      }

      setMetadata(data);
      if (data.formats && data.formats.length > 0) {
        setSelectedBitrate('320k');
      }
    } catch (err: any) {
      console.error('Fetch info error:', err);
      setError(err.message || 'Unable to fetch video information. Please verify the URL.');
    } finally {
      setIsLoadingInfo(false);
    }
  };

  // Poll Conversion Job Progress
  const startPollingJob = (jobId: string) => {
    if (pollingTimerRef.current) {
      clearInterval(pollingTimerRef.current);
    }

    pollingTimerRef.current = setInterval(async () => {
      try {
        const res = await fetch(`/api/progress/${jobId}`);
        if (!res.ok) return;

        const data = await res.json();
        if (data.job) {
          setCurrentJob(data.job);

          if (data.job.status === 'completed') {
            setIsConverting(false);
            if (pollingTimerRef.current) {
              clearInterval(pollingTimerRef.current);
              pollingTimerRef.current = null;
            }

            // Add to session history
            const historyItem: HistoryItem = {
              id: `${jobId}_${Date.now()}`,
              jobId: data.job.id,
              title: data.job.videoTitle,
              artist: data.job.metadata?.artist || 'Unknown Artist',
              thumbnail: data.job.metadata?.thumbnail || '',
              durationFormatted: data.job.metadata?.durationFormatted || '',
              bitrate: data.job.bitrate,
              outputType: data.job.outputType,
              fileSize: data.job.fileSize,
              downloadUrl: `/api/download/${data.job.id}`,
              streamUrl: `/api/stream/${data.job.id}`,
              timestamp: Date.now(),
            };

            setHistory(prev => [historyItem, ...prev.filter(h => h.jobId !== data.job.id)]);
          } else if (data.job.status === 'error') {
            setIsConverting(false);
            if (pollingTimerRef.current) {
              clearInterval(pollingTimerRef.current);
              pollingTimerRef.current = null;
            }
          }
        }
      } catch (err) {
        console.error('Polling error:', err);
      }
    }, 800);
  };

  // Trigger Conversion
  const handleStartConversion = async (options: {
    bitrate: AudioFormatOption['bitrate'];
    title?: string;
    artist?: string;
    album?: string;
    startTime?: number;
    endTime?: number;
    normalizeAudio?: boolean;
    fadeInOut?: boolean;
    outputType?: 'audio' | 'video';
    videoQuality?: 'best' | '1080' | '720' | '480' | '360';
  }) => {
    if (!metadata) return;

    setIsConverting(true);
    setError(null);

    try {
      const res = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: metadata.url,
          bitrate: options.bitrate,
          title: options.title,
          artist: options.artist,
          album: options.album,
          startTime: options.startTime,
          endTime: options.endTime,
          normalizeAudio: options.normalizeAudio,
          fadeInOut: options.fadeInOut,
          outputType: options.outputType,
          videoQuality: options.videoQuality,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.job) {
        throw new Error(data.error || 'Failed to start conversion');
      }

      setCurrentJob(data.job);
      startPollingJob(data.job.id);
    } catch (err: any) {
      console.error('Conversion start error:', err);
      setError(err.message || 'Failed to start conversion');
      setIsConverting(false);
    }
  };

  // Reset to convert another video
  const handleReset = () => {
    if (pollingTimerRef.current) {
      clearInterval(pollingTimerRef.current);
      pollingTimerRef.current = null;
    }
    setUrl('');
    setMetadata(null);
    setCurrentJob(null);
    setIsConverting(false);
    setError(null);
  };

  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem('yt_mp3_history');
    } catch {}
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] flex flex-col selection:bg-[#F27D26] selection:text-white font-sans antialiased">
      {/* Background ambient accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#F27D26]/10 via-[#F27D26]/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F27D26]/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/[0.02] blur-3xl" />
      </div>

      {/* Persistent Navigation Header */}
      <Header
        historyCount={history.length}
        onOpenHistory={() => setIsHistoryOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 z-10 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-semibold text-[#F27D26]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Speed 320kbps YouTube Audio Downloader</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Turn YouTube Links into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#F27D26] via-[#FF944D] to-[#FBBF24] bg-clip-text text-transparent">
              High-Fidelity MP3 or MP4 Files
            </span>
          </h1>

          <p className="text-[#8E9299] text-sm sm:text-base max-w-2xl mx-auto">
            Paste a YouTube video, Music track, or Shorts link. Download high-quality MP3 audio or the complete MP4 video.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#141414] p-1.5 shadow-xl">
          <button type="button" onClick={() => setOutputType('audio')} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${outputType === 'audio' ? 'bg-[#F27D26] text-white shadow-lg shadow-[#F27D26]/20' : 'text-[#8E9299] hover:bg-white/5 hover:text-white'}`}>
            <Music className="h-4 w-4" /> Audio MP3
          </button>
          <button type="button" onClick={() => setOutputType('video')} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${outputType === 'video' ? 'bg-[#F27D26] text-white shadow-lg shadow-[#F27D26]/20' : 'text-[#8E9299] hover:bg-white/5 hover:text-white'}`}>
            <Video className="h-4 w-4" /> Video MP4
          </button>
        </div>

        {/* URL Input Box */}
        <UrlInputSection
          url={url}
          setUrl={setUrl}
          onFetch={handleFetchInfo}
          isLoading={isLoadingInfo}
          error={error}
          outputType={outputType}
        />

        {/* Active Conversion Progress Card (when converting or complete) */}
        {currentJob && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <ConversionCard
              job={currentJob}
              onReset={handleReset}
            />
          </div>
        )}

        {/* Video Preview & Format Selection (when video details fetched and not yet converted) */}
        {metadata && !currentJob && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <VideoDetailsCard
              metadata={metadata}
              selectedBitrate={selectedBitrate}
              onSelectBitrate={setSelectedBitrate}
              outputType={outputType}
              onSelectOutputType={setOutputType}
              onConvert={handleStartConversion}
              isConverting={isConverting}
            />
          </div>
        )}

        {/* Information & Features Guide */}
        <FaqSection />
      </main>

      {/* Recent Conversions Slide-over Drawer / Modal */}
      <RecentConversions
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onClearHistory={handleClearHistory}
      />

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-[#0A0A0A] py-6 text-center text-xs text-[#8E9299] z-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[#8E9299]">YouTube Media Studio &copy; 2026</span>
          <span className="text-[#5A5E66]">Supports standard videos, Shorts, & YouTube Music</span>
        </div>
      </footer>
    </div>
  );
}
