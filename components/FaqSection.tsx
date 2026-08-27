import React from 'react';
import { Sparkles, Shield, Cpu, Smartphone, Zap, Music2, Headphones, Radio } from 'lucide-react';

export const FaqSection: React.FC = () => {
  return (
    <div className="w-full mt-16 space-y-12 border-t border-white/10 pt-12">
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 flex items-center justify-center">
            <Music2 className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white">320 kbps Studio Quality</h3>
          <p className="text-xs text-[#8E9299] leading-relaxed">
            Extracts the highest available audio stream and encodes to pristine 320kbps MP3 for crystal-clear acoustics.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white">ID3 Tags & Artwork</h3>
          <p className="text-xs text-[#8E9299] leading-relaxed">
            Automatically embeds track title, artist name, and high-resolution YouTube cover artwork into the MP3 file.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
            <Smartphone className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white">Universal Playback</h3>
          <p className="text-xs text-[#8E9299] leading-relaxed">
            Compatible with iPhone, Android, Apple Music, Spotify local files, in-car stereo USBs, and all MP3 players.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white">Audio Trimming & Boost</h3>
          <p className="text-xs text-[#8E9299] leading-relaxed">
            Trim intros and outros with precision timestamps, and apply EBU R128 loudness normalization.
          </p>
        </div>
      </div>

      {/* Quick 3-Step Guide */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-white/10 text-center space-y-6">
        <h3 className="text-lg font-bold text-white">
          How to turn any YouTube link into an MP3
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 flex items-center justify-center font-bold text-xs shrink-0">
              1
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Copy YouTube Link</h4>
              <p className="text-xs text-[#8E9299] mt-1">
                Copy the link from YouTube, YouTube Shorts, or YouTube Music from your browser or mobile app.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 flex items-center justify-center font-bold text-xs shrink-0">
              2
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Paste & Customize</h4>
              <p className="text-xs text-[#8E9299] mt-1">
                Paste the URL above, choose your preferred bitrate (320k to 64k), and optionally trim or tag the track.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 flex items-center justify-center font-bold text-xs shrink-0">
              3
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Download MP3</h4>
              <p className="text-xs text-[#8E9299] mt-1">
                Click Convert and save your MP3 instantly or listen to the preview directly inside the browser player.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
