import React from 'react';
import Link from 'next/link';
import { Music, Headphones } from 'lucide-react';
import { SiteNavigation } from './SiteNavigation';

interface HeaderProps {
  historyCount: number;
  onOpenHistory: () => void;
}

export const Header: React.FC<HeaderProps> = ({ historyCount, onOpenHistory }) => {
  return (
    <header className="w-full border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/youtubelink" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F27D26] flex items-center justify-center shadow-lg shadow-[#F27D26]/20 text-white font-bold">
            <Music className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight">
                YT<span className="text-[#F27D26]">Audio</span> Studio
              </span>
              <span className="hidden lg:inline text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20">
                320 kbps MP3
              </span>
            </div>
            <p className="text-xs text-[#8E9299] hidden sm:block">
              Fast, lossless YouTube to MP3 audio converter
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <SiteNavigation accent="orange" />

          <button
            id="btn-header-history"
            onClick={onOpenHistory}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#141414] border border-white/10 hover:border-white/20 text-[#E0E0E0] hover:text-white transition-all text-xs font-medium cursor-pointer"
            title="View recent converted downloads"
          >
            <Headphones className="w-3.5 h-3.5 text-[#F27D26]" />
            <span className="hidden md:inline">Downloads</span>
            {historyCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 text-[11px] font-bold flex items-center justify-center">
                {historyCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
