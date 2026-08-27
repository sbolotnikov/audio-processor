import React, { useState } from 'react';
import { Search, Clipboard, X, Loader2, ArrowRight, Youtube, CheckCircle2, Play } from 'lucide-react';

interface UrlInputSectionProps {
  url: string;
  setUrl: (url: string) => void;
  onFetch: (customUrl?: string) => void;
  isLoading: boolean;
  error?: string | null;
}

const SAMPLE_VIDEOS = [
  {
    title: 'Never Gonna Give You Up (Classic)',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    label: '🎵 Music Track',
  },
  {
    title: 'Lofi Hip Hop Chill Beats',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    label: '☕ Lofi Beats',
  },
  {
    title: 'TED Talk: Body Language',
    url: 'https://www.youtube.com/watch?v=Ks-_Mh1QhMc',
    label: '🎙️ Podcast / Speech',
  },
];

export const UrlInputSection: React.FC<UrlInputSectionProps> = ({
  url,
  setUrl,
  onFetch,
  isLoading,
  error,
}) => {
  const [pasteSuccess, setPasteSuccess] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        setPasteSuccess(true);
        setTimeout(() => setPasteSuccess(false), 1800);
        // Automatically trigger fetch if it looks like a YouTube link
        if (text.includes('youtu')) {
          onFetch(text);
        }
      }
    } catch (err) {
      console.warn('Clipboard read failed:', err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && url.trim() && !isLoading) {
      onFetch();
    }
  };

  return (
    <div className="w-full">
      {/* Search Input Box */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F27D26] via-[#FF944D] to-[#FBBF24] rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition duration-300 pointer-events-none" />
        
        <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-[#141414] border border-white/10 hover:border-white/20 rounded-2xl p-2 shadow-2xl transition-all">
          {/* Icon */}
          <div className="hidden sm:flex items-center justify-center pl-3 pr-2 text-[#F27D26]">
            <Youtube className="w-6 h-6" />
          </div>

          {/* Input field */}
          <input
            id="input-youtube-url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Paste YouTube link here (e.g. https://www.youtube.com/watch?v=... or shorts/...)"
            className="flex-1 bg-transparent px-3 py-3 text-sm sm:text-base text-white placeholder-[#8E9299] focus:outline-none w-full"
            disabled={isLoading}
          />

          {/* Action buttons inside input */}
          <div className="flex items-center gap-2 px-1 pt-2 sm:pt-0 justify-end">
            {url && (
              <button
                id="btn-clear-url"
                type="button"
                onClick={() => setUrl('')}
                className="p-2 rounded-xl text-[#8E9299] hover:text-white hover:bg-[#1A1A1A] transition cursor-pointer"
                title="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              id="btn-paste-clipboard"
              type="button"
              onClick={handlePaste}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1A1A1A] hover:bg-[#262626] text-[#E0E0E0] hover:text-white transition text-xs font-medium border border-white/10 cursor-pointer"
              title="Paste from clipboard"
            >
              {pasteSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Pasted!</span>
                </>
              ) : (
                <>
                  <Clipboard className="w-3.5 h-3.5 text-[#8E9299]" />
                  <span>Paste</span>
                </>
              )}
            </button>

            <button
              id="btn-fetch-video"
              type="button"
              onClick={() => onFetch()}
              disabled={!url.trim() || isLoading}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F27D26] hover:bg-[#E06D1A] disabled:bg-[#1A1A1A] disabled:text-[#5A5E66] text-white font-bold text-sm shadow-md shadow-[#F27D26]/20 transition disabled:cursor-not-allowed cursor-pointer shrink-0"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Fetching...</span>
                </>
              ) : (
                <>
                  <span>Extract MP3</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-3 p-3.5 rounded-xl bg-rose-950/30 border border-rose-800/50 text-rose-300 text-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Quick Sample Links */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-[#8E9299] flex items-center gap-1 mr-1">
          <Play className="w-3 h-3 text-[#5A5E66]" /> Or try a sample link:
        </span>
        {SAMPLE_VIDEOS.map((sample, idx) => (
          <button
            key={idx}
            id={`btn-sample-${idx}`}
            type="button"
            onClick={() => {
              setUrl(sample.url);
              onFetch(sample.url);
            }}
            className="text-xs px-3 py-1.5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] text-[#8E9299] hover:text-[#E0E0E0] border border-white/10 hover:border-white/20 transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>{sample.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
