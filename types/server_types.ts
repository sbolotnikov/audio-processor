export interface VideoMetadata {
  id: string;
  url: string;
  title: string;
  artist: string;
  album?: string;
  channel: string;
  channelUrl?: string;
  duration: number; // in seconds
  durationFormatted: string;
  thumbnail: string;
  viewCount: number;
  uploadDate?: string;
  description?: string;
  formats?: AudioFormatOption[];
}

export interface AudioFormatOption {
  bitrate: string; // e.g. "320k", "256k", "192k", "128k", "64k"
  label: string;
  qualityNote: string;
  estimatedSizeBytes: number;
  format: 'mp3';
}

export type JobStatus = 'queued' | 'fetching' | 'downloading' | 'converting' | 'tagging' | 'completed' | 'error';

export interface ConvertOptions {
  url: string;
  bitrate: '320k' | '256k' | '192k' | '128k' | '64k';
  title?: string;
  artist?: string;
  album?: string;
  startTime?: number; // in seconds
  endTime?: number; // in seconds
  normalizeAudio?: boolean;
  fadeInOut?: boolean;
}

export interface ConversionJob {
  id: string;
  url: string;
  videoTitle: string;
  finalFileName: string;
  status: JobStatus;
  progress: number; // 0 to 100
  stageMessage: string;
  bitrate: string;
  filePath?: string;
  fileSize?: number;
  error?: string;
  createdAt: number;
  completedAt?: number;
  metadata?: VideoMetadata;
}
