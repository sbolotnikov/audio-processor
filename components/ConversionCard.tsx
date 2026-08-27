import React, { useState, useRef, useEffect } from 'react';
import { 
  Download, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles, 
  Music, 
  Copy, 
  Check, 
  AlertCircle, 
  HardDrive,
  FileAudio,
  FileVideo,
  Video
} from 'lucide-react';
import { ConversionJob } from '../types/types';

interface ConversionCardProps {
  job: ConversionJob;
  onReset: () => void;
}

export const ConversionCard: React.FC<ConversionCardProps> = ({ job, onReset }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const downloadUrl = `/api/download/${job.id}`;
  const streamUrl = `/api/stream/${job.id}`;

  const formatTime = (timeInSec: number) => {
    if (isNaN(timeInSec) || timeInSec < 0) return '0:00';
    const mins = Math.floor(timeInSec / 60);
    const secs = Math.floor(timeInSec % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(e => console.warn('Audio play prevented:', e));
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      setIsMuted(newVol === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume || 0.8;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${downloadUrl}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  // Format file size in MB
  const fileSizeMB = job.fileSize ? (job.fileSize / (1024 * 1024)).toFixed(2) : null;

  const isCompleted = job.status === 'completed';
  const isError = job.status === 'error';
  const isVideo = job.outputType === 'video';

  return (
    <div className="w-full bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Hidden audio tag for streaming */}
      {isCompleted && !isVideo && (
        <audio
          ref={audioRef}
          src={streamUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-md ${
            isCompleted 
              ? 'bg-emerald-500' 
              : isError
              ? 'bg-rose-600'
              : 'bg-[#F27D26] animate-pulse'
          }`}>
            {isCompleted ? (
              <CheckCircle2 className="w-5 h-5 text-slate-950" />
            ) : isError ? (
              <AlertCircle className="w-5 h-5" />
            ) : (
              isVideo ? <Video className="w-5 h-5" /> : <Music className="w-5 h-5" />
            )}
          </div>

          <div>
            <h3 className="text-base font-bold text-white line-clamp-1">
              {job.finalFileName || job.videoTitle}
            </h3>
            <p className="text-xs text-[#8E9299]">
              {job.stageMessage}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] text-[#E0E0E0] border border-white/10">
            {isVideo ? `${job.bitrate.toUpperCase()} MP4` : `${job.bitrate.toUpperCase()} MP3`}
          </span>
        </div>
      </div>

      {/* Progress Bar (During Conversion) */}
      {!isCompleted && !isError && (
        <div className="p-6 sm:p-8 space-y-6">
          {/* Progress % */}
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-[#E0E0E0] flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27D26] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F27D26]"></span>
              </span>
              Processing {isVideo ? 'Video' : 'Audio'}...
            </span>
            <span className="font-mono font-bold text-[#F27D26] text-lg">
              {job.progress}%
            </span>
          </div>

          {/* Animated Bar */}
          <div className="w-full bg-[#0A0A0A] rounded-full h-3.5 overflow-hidden p-0.5 border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#F27D26] via-[#FF944D] to-[#FBBF24] rounded-full transition-all duration-300 ease-out shadow-lg shadow-[#F27D26]/30"
              style={{ width: `${Math.max(5, job.progress)}%` }}
            />
          </div>

          {/* Stage Milestones */}
          <div className="grid grid-cols-4 gap-2 text-center text-[11px] text-[#8E9299]">
            <div className={`p-2 rounded-lg border ${job.progress >= 15 ? 'text-[#F27D26] font-semibold bg-[#F27D26]/10 border-[#F27D26]/20' : 'opacity-40 border-transparent'}`}>
              1. Fetch Stream
            </div>
            <div className={`p-2 rounded-lg border ${job.progress >= 30 ? 'text-[#F27D26] font-semibold bg-[#F27D26]/10 border-[#F27D26]/20' : 'opacity-40 border-transparent'}`}>
              2. Download {isVideo ? 'Media' : 'Audio'}
            </div>
            <div className={`p-2 rounded-lg border ${job.progress >= 80 ? 'text-[#F27D26] font-semibold bg-[#F27D26]/10 border-[#F27D26]/20' : 'opacity-40 border-transparent'}`}>
              3. FFmpeg {isVideo ? 'MP4' : 'MP3'}
            </div>
            <div className={`p-2 rounded-lg border ${job.progress >= 92 ? 'text-[#F27D26] font-semibold bg-[#F27D26]/10 border-[#F27D26]/20' : 'opacity-40 border-transparent'}`}>
              4. Metadata
            </div>
          </div>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="p-6 sm:p-8 space-y-4">
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-200 text-sm">
            <div className="font-semibold mb-1 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" /> Conversion Encountered an Error
            </div>
            <p className="text-xs text-rose-300">{job.error || 'Please check the YouTube URL and try again.'}</p>
          </div>

          <button
            id="btn-error-retry"
            type="button"
            onClick={onReset}
            className="w-full py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#262626] border border-white/10 text-white font-medium text-xs flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Another Video</span>
          </button>
        </div>
      )}

      {/* Completed State: Download & In-browser Audio Player */}
      {isCompleted && (
        <div className="p-6 sm:p-8 space-y-6">
          {/* File summary banner */}
          <div className="flex flex-wrap items-center justify-between p-4 rounded-xl bg-[#0A0A0A] border border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {isVideo ? <FileVideo className="w-6 h-6" /> : <FileAudio className="w-6 h-6" />}
              </div>
              <div>
                <div className="text-sm font-bold text-white line-clamp-1">
                  {job.finalFileName}
                </div>
                <div className="flex items-center gap-3 text-xs text-[#8E9299] mt-0.5">
                  {fileSizeMB && (
                    <span className="flex items-center gap-1 text-[#E0E0E0] font-mono">
                      <HardDrive className="w-3 h-3 text-[#5A5E66]" />
                      {fileSizeMB} MB
                    </span>
                  )}
                  <span className="text-emerald-400 font-medium">Ready for Download</span>
                </div>
              </div>
            </div>

            {/* Main Direct Download Button */}
            <a
              id="btn-direct-download"
              href={downloadUrl}
              download={job.finalFileName}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-950/40 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Download {isVideo ? 'MP4 Video' : 'MP3 File'}</span>
            </a>
          </div>

          {isVideo && (
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
              <video src={streamUrl} controls preload="metadata" className="aspect-video w-full" />
            </div>
          )}

          {/* In-Browser Audio Player */}
          {!isVideo && <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#8E9299]">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-[#F27D26]" /> Audio Preview
              </span>
              <span className="font-mono text-[#E0E0E0]">
                {formatTime(currentTime)} / {formatTime(duration || job.metadata?.duration || 0)}
              </span>
            </div>

            {/* Seek bar */}
            <input
              id="range-audio-seek"
              type="range"
              min={0}
              max={duration || job.metadata?.duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full accent-[#F27D26] cursor-pointer"
            />

            {/* Player Controls */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <button
                  id="btn-player-play-pause"
                  type="button"
                  onClick={handleTogglePlay}
                  className="w-10 h-10 rounded-full bg-[#F27D26] hover:bg-[#E06D1A] text-white flex items-center justify-center transition shadow-lg shadow-[#F27D26]/20 cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <div className="hidden sm:flex items-center gap-2 ml-3">
                  <button
                    id="btn-player-mute"
                    type="button"
                    onClick={toggleMute}
                    className="text-[#8E9299] hover:text-white transition cursor-pointer"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-[#F27D26]" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    id="range-player-volume"
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 accent-[#F27D26]"
                  />
                </div>
              </div>

              {/* Secondary Actions */}
              <div className="flex items-center gap-2">
                <button
                  id="btn-copy-direct-link"
                  type="button"
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1A1A1A] hover:bg-[#262626] text-[#E0E0E0] hover:text-white border border-white/10 text-xs font-medium transition cursor-pointer"
                  title="Copy direct download link"
                >
                  {copiedLink ? (
                    <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8E9299]" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <button
                  id="btn-convert-another"
                  type="button"
                  onClick={onReset}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1A1A1A] hover:bg-[#262626] text-[#E0E0E0] hover:text-white border border-white/10 text-xs font-medium transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#8E9299]" />
                  <span>Convert Another</span>
                </button>
              </div>
            </div>
          </div>}
        </div>
      )}
    </div>
  );
};
