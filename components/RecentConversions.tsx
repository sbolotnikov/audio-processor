import React from 'react';
import { Download, Trash2, X, Music, Clock, HardDrive, ExternalLink } from 'lucide-react';
import { HistoryItem } from '../types/types';

interface RecentConversionsProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryItem[];
  onClearHistory: () => void;
  onPlayItem?: (item: HistoryItem) => void;
}

export const RecentConversions: React.FC<RecentConversionsProps> = ({
  isOpen,
  onClose,
  history,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#141414] border border-white/10 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 flex items-center justify-center">
              <Music className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Recent Downloads
              </h3>
              <p className="text-xs text-[#8E9299]">
                {history.length} {history.length === 1 ? 'file' : 'files'} converted in this session
              </p>
            </div>
          </div>

          <button
            id="btn-close-history"
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#8E9299] hover:text-white hover:bg-[#1A1A1A] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          {history.length === 0 ? (
            <div className="text-center py-12 text-[#8E9299] text-sm space-y-2">
              <Music className="w-10 h-10 mx-auto text-[#5A5E66] stroke-1" />
              <p>No downloads yet in this session.</p>
              <p className="text-xs text-[#5A5E66]">
                Paste a YouTube link to download MP3 audio or MP4 video.
              </p>
            </div>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-[#0A0A0A] border border-white/5 hover:border-white/15 transition flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-12 h-12 rounded-lg object-cover bg-[#1A1A1A] shrink-0 border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] flex items-center justify-center shrink-0 text-[#5A5E66]">
                      <Music className="w-5 h-5" />
                    </div>
                  )}

                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#8E9299] truncate">
                      {item.artist}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-[#5A5E66] mt-0.5">
                      <span className="font-mono text-[#F27D26] font-semibold uppercase">{item.outputType === 'video' ? 'MP4' : item.bitrate}</span>
                      <span>•</span>
                      <span>{item.durationFormatted}</span>
                      {item.fileSize && (
                        <>
                          <span>•</span>
                          <span>{(item.fileSize / (1024 * 1024)).toFixed(1)} MB</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    id={`btn-history-download-${item.id}`}
                    href={item.downloadUrl}
                    download
                    className="p-2 rounded-xl bg-[#F27D26]/15 hover:bg-[#F27D26]/25 text-[#F27D26] hover:text-white border border-[#F27D26]/30 transition text-xs flex items-center gap-1 font-medium cursor-pointer"
                    title={`Download ${item.outputType === 'video' ? 'MP4 video' : 'MP3 audio'}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        {history.length > 0 && (
          <div className="p-4 border-t border-white/10 bg-[#0A0A0A] flex items-center justify-between">
            <button
              id="btn-clear-all-history"
              onClick={onClearHistory}
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1.5 transition cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>

            <button
              id="btn-history-done"
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-[#1A1A1A] hover:bg-[#262626] border border-white/10 text-white text-xs font-semibold transition cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
