import React, { useState } from 'react';
import { 
  Music2, 
  Sliders, 
  Clock, 
  Eye, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Volume2, 
  Scissors, 
  Disc, 
  User, 
  FileAudio,
  Play,
  ExternalLink,
  Video
} from 'lucide-react';
import { VideoMetadata, AudioFormatOption } from '../types/types';

interface VideoDetailsCardProps {
  metadata: VideoMetadata;
  selectedBitrate: AudioFormatOption['bitrate'];
  onSelectBitrate: (bitrate: AudioFormatOption['bitrate']) => void;
  outputType: 'audio' | 'video';
  onSelectOutputType: (type: 'audio' | 'video') => void;
  onConvert: (options: {
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
  }) => void;
  isConverting: boolean;
}

export const VideoDetailsCard: React.FC<VideoDetailsCardProps> = ({
  metadata,
  selectedBitrate,
  onSelectBitrate,
  outputType,
  onSelectOutputType,
  onConvert,
  isConverting,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [customTitle, setCustomTitle] = useState(metadata.title);
  const [customArtist, setCustomArtist] = useState(metadata.artist);
  const [customAlbum, setCustomAlbum] = useState(metadata.album || 'YouTube Audio');
  
  // Trimming
  const [enableTrim, setEnableTrim] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(metadata.duration || 0);

  // Audio enhancements
  const [normalizeAudio, setNormalizeAudio] = useState(true);
  const [fadeInOut, setFadeInOut] = useState(false);
  const [videoQuality, setVideoQuality] = useState<'best' | '1080' | '720' | '480' | '360'>('720');

  const formatSecToMin = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartConversion = () => {
    onConvert({
      bitrate: selectedBitrate,
      title: customTitle,
      artist: customArtist,
      album: customAlbum,
      startTime: enableTrim ? startTime : undefined,
      endTime: enableTrim ? endTime : undefined,
      normalizeAudio,
      fadeInOut,
      outputType,
      videoQuality,
    });
  };

  const currentFormat = metadata.formats?.find(f => f.bitrate === selectedBitrate) || {
    bitrate: '320k',
    label: '320 kbps (Extreme HQ)',
    qualityNote: 'Studio Master Quality',
    estimatedSizeBytes: Math.round((320 * 1000 / 8) * (metadata.duration || 180)),
    format: 'mp3' as const,
  };

  const estSizeMB = (currentFormat.estimatedSizeBytes / (1024 * 1024)).toFixed(1);

  return (
    <div className="w-full bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
      {/* Top Banner with Video Details */}
      <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Video Thumbnail */}
        <div className="md:col-span-4 relative group rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/10 aspect-video flex items-center justify-center">
          <img
            src={metadata.thumbnail}
            alt={metadata.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Duration Badge */}
          <div className="absolute bottom-2.5 right-2.5 bg-black/85 text-white text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 backdrop-blur-xs border border-white/10">
            <Clock className="w-3 h-3 text-[#F27D26]" />
            <span>{metadata.durationFormatted}</span>
          </div>

          {/* Quick link to YT */}
          <a
            href={metadata.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 hover:bg-black text-white/80 hover:text-white transition"
            title="Open source video"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Information Header */}
        <div className="md:col-span-8 flex flex-col justify-between h-full space-y-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#F27D26] font-medium mb-1">
              <Music2 className="w-3.5 h-3.5" />
              <span>Ready for High Quality Conversion</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white line-clamp-2 leading-snug">
              {metadata.title}
            </h2>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#8E9299] mt-2">
              <span className="text-[#E0E0E0] font-medium flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#5A5E66]" />
                {metadata.channel}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-[#5A5E66]" />
                {metadata.viewCount.toLocaleString()} views
              </span>
              {metadata.uploadDate && (
                <span>Published {metadata.uploadDate}</span>
              )}
            </div>
          </div>

          {/* Bitrate Selector Chips */}
          {outputType === 'audio' ? <div className="pt-2 border-t border-white/10">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#8E9299] mb-2 block flex items-center justify-between">
              <span>Select Audio Bitrate</span>
              <span className="text-[#F27D26] lowercase text-[11px] font-normal">
                est. size: ~{estSizeMB} MB
              </span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {(metadata.formats || []).map((fmt) => {
                const isSelected = selectedBitrate === fmt.bitrate;
                return (
                  <button
                    key={fmt.bitrate}
                    id={`btn-bitrate-${fmt.bitrate}`}
                    type="button"
                    onClick={() => onSelectBitrate(fmt.bitrate)}
                    className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between relative cursor-pointer ${
                      isSelected
                        ? 'bg-[#F27D26]/15 border-[#F27D26] text-white shadow-lg shadow-[#F27D26]/10 ring-1 ring-[#F27D26]/40'
                        : 'bg-[#1A1A1A] border-white/5 text-[#8E9299] hover:border-white/20 hover:text-[#E0E0E0]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{fmt.bitrate.toUpperCase()}</span>
                      {isSelected && <Check className="w-3 h-3 text-[#F27D26]" />}
                    </div>
                    <span className="text-[10px] text-[#8E9299] mt-1 line-clamp-1">
                      {fmt.qualityNote}
                    </span>
                  </button>
                );
              })}
            </div>
          </div> : (
            <div className="pt-2 border-t border-white/10">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#8E9299]">Video quality</label>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {(['best', '1080', '720', '480', '360'] as const).map((quality) => (
                  <button key={quality} type="button" onClick={() => setVideoQuality(quality)} className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${videoQuality === quality ? 'border-[#F27D26] bg-[#F27D26]/15 text-white ring-1 ring-[#F27D26]/40' : 'border-white/5 bg-[#1A1A1A] text-[#8E9299] hover:border-white/20 hover:text-white'}`}>
                    {quality === 'best' ? 'Best' : `${quality}p`}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-[#5A5E66]">Maximum resolution; falls back to the closest available quality.</p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 sm:px-6">
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#0A0A0A] p-1.5">
          <button type="button" onClick={() => onSelectOutputType('audio')} className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition ${outputType === 'audio' ? 'bg-[#F27D26] text-white shadow-lg shadow-[#F27D26]/20' : 'text-[#8E9299] hover:bg-white/5 hover:text-white'}`}>
            <Music2 className="h-4 w-4" /> Audio MP3
          </button>
          <button type="button" onClick={() => onSelectOutputType('video')} className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition ${outputType === 'video' ? 'bg-[#F27D26] text-white shadow-lg shadow-[#F27D26]/20' : 'text-[#8E9299] hover:bg-white/5 hover:text-white'}`}>
            <Video className="h-4 w-4" /> Video MP4
          </button>
        </div>
      </div>

      {/* Advanced Tuning & ID3 Metadata Toggle */}
      <div className="border-t border-white/10 bg-[#0A0A0A]/60">
        <button
          id="btn-toggle-advanced"
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full px-6 py-3 flex items-center justify-between text-xs font-semibold text-[#8E9299] hover:text-[#E0E0E0] transition cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>Audio Trimming & ID3 Tag Customization</span>
            {(enableTrim || customTitle !== metadata.title) && (
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-[#F27D26]/20 text-[#F27D26] font-normal">
                Modified
              </span>
            )}
          </div>
          {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showAdvanced && (
          <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-5 animate-in fade-in duration-200">
            {/* ID3 Tag Editor */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-medium text-[#8E9299] block mb-1 flex items-center gap-1.5">
                  <FileAudio className="w-3 h-3 text-[#5A5E66]" /> Track Title
                </label>
                <input
                  id="input-tag-title"
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[#8E9299] block mb-1 flex items-center gap-1.5">
                  <User className="w-3 h-3 text-[#5A5E66]" /> Artist Name
                </label>
                <input
                  id="input-tag-artist"
                  type="text"
                  value={customArtist}
                  onChange={(e) => setCustomArtist(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[#8E9299] block mb-1 flex items-center gap-1.5">
                  <Disc className="w-3 h-3 text-[#5A5E66]" /> Album / Collection
                </label>
                <input
                  id="input-tag-album"
                  type="text"
                  value={customAlbum}
                  onChange={(e) => setCustomAlbum(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                />
              </div>
            </div>

            {/* Audio Trimming Section */}
            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#E0E0E0] flex items-center gap-2">
                  <Scissors className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>Trim Audio Range (Cut intro / outro)</span>
                </label>
                <input
                  id="check-enable-trim"
                  type="checkbox"
                  checked={enableTrim}
                  onChange={(e) => setEnableTrim(e.target.checked)}
                  className="rounded text-[#F27D26] focus:ring-[#F27D26] h-4 w-4 bg-[#0A0A0A] border-white/20 accent-[#F27D26] cursor-pointer"
                />
              </div>

              {enableTrim && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <div className="flex justify-between text-xs text-[#8E9299] mb-1">
                      <span>Start Time:</span>
                      <span className="font-mono text-[#F27D26]">{formatSecToMin(startTime)}</span>
                    </div>
                    <input
                      id="range-start-time"
                      type="range"
                      min={0}
                      max={Math.max(0, endTime - 1)}
                      value={startTime}
                      onChange={(e) => setStartTime(Number(e.target.value))}
                      className="w-full accent-[#F27D26]"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-[#8E9299] mb-1">
                      <span>End Time:</span>
                      <span className="font-mono text-[#F27D26]">{formatSecToMin(endTime)}</span>
                    </div>
                    <input
                      id="range-end-time"
                      type="range"
                      min={startTime + 1}
                      max={metadata.duration || 300}
                      value={endTime}
                      onChange={(e) => setEndTime(Number(e.target.value))}
                      className="w-full accent-[#F27D26]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Audio Filters (Normalization & Fade) */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#E0E0E0]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  id="check-normalize-audio"
                  type="checkbox"
                  checked={normalizeAudio}
                  onChange={(e) => setNormalizeAudio(e.target.checked)}
                  className="rounded text-[#F27D26] focus:ring-[#F27D26] h-4 w-4 bg-[#0A0A0A] border-white/20 accent-[#F27D26]"
                />
                <Volume2 className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>Normalize Audio Volume (EBU R128 standard)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  id="check-fade-in-out"
                  type="checkbox"
                  checked={fadeInOut}
                  onChange={(e) => setFadeInOut(e.target.checked)}
                  className="rounded text-[#F27D26] focus:ring-[#F27D26] h-4 w-4 bg-[#0A0A0A] border-white/20 accent-[#F27D26]"
                />
                <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>Smooth 1.5s Fade In / Out</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Main Convert Action Footer */}
      <div className="p-5 sm:p-6 bg-[#0A0A0A]/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#F27D26]/10 border border-[#F27D26]/20 text-[#F27D26] flex items-center justify-center font-bold text-xs">
            {outputType === 'video' ? 'MP4' : 'MP3'}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              {outputType === 'video' ? `${videoQuality === 'best' ? 'Best available' : `${videoQuality}p`} MP4 video` : currentFormat.label}
            </div>
            <div className="text-xs text-[#8E9299]">
              {outputType === 'video' ? 'Video and audio merged with FFmpeg' : 'ID3 metadata included'}
            </div>
          </div>
        </div>

        <button
          id="btn-start-convert"
          type="button"
          onClick={handleStartConversion}
          disabled={isConverting}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F27D26] hover:bg-[#E06D1A] text-white font-bold text-sm shadow-xl shadow-[#F27D26]/20 transition cursor-pointer flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>{outputType === 'video' ? 'Download Video (MP4)' : `Convert to MP3 (${selectedBitrate.toUpperCase()})`}</span>
        </button>
      </div>
    </div>
  );
};
