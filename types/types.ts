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
  bitrate: '320k' | '256k' | '192k' | '128k' | '64k';
  label: string;
  qualityNote: string;
  estimatedSizeBytes: number;
  format: 'mp3';
}

export type JobStatus = 'queued' | 'fetching' | 'downloading' | 'converting' | 'tagging' | 'completed' | 'error';

export interface ConversionJob {
  id: string;
  url: string;
  videoTitle: string;
  finalFileName: string;
  status: JobStatus;
  progress: number;
  stageMessage: string;
  bitrate: string;
  outputType?: 'audio' | 'video';
  filePath?: string;
  fileSize?: number;
  error?: string;
  createdAt: number;
  completedAt?: number;
  metadata?: VideoMetadata;
}

export interface HistoryItem {
  id: string;
  jobId: string;
  title: string;
  artist: string;
  thumbnail: string;
  durationFormatted: string;
  bitrate: string;
  outputType?: 'audio' | 'video';
  fileSize?: number;
  downloadUrl: string;
  streamUrl: string;
  timestamp: number;
}
