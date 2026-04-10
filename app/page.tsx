"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Upload, Play, Pause, Download, Scissors, Loader2, Settings2, FastForward, Rewind } from 'lucide-react';

/**
 * Main Application Component
 * 
 * This component provides a full-featured audio processing interface directly in the browser.
 * It uses FFmpeg.wasm for audio manipulation (normalization, speed, fading, cutting, format conversion)
 * and WaveSurfer.js for visual audio playback and region selection.
 */
export default function App() {
  // --- State Management ---
  
  // FFmpeg Engine State
  const [isFfmpegLoaded, setIsFfmpegLoaded] = useState(false);
  const [engineError, setEngineError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState<string>("INITIALIZING");
  
  // File & URL State
  const [file, setFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  
  // Playback & Processing State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processError, setProcessError] = useState<string | null>(null);
  const [wsError, setWsError] = useState<string | null>(null);

  // Audio Processing Parameters
  const [lufs, setLufs] = useState(-27); // Target Integrated Loudness
  const [lra, setLra] = useState(12);    // Loudness Range
  const [tp, setTp] = useState(-2);      // True Peak
  const [speed, setSpeed] = useState(1.0); // Playback Speed Multiplier
  const [fadeIn, setFadeIn] = useState(0); // Fade In duration (seconds)
  const [fadeOut, setFadeOut] = useState(0); // Fade Out duration (seconds)
  
  // Region Selection (Cutting)
  const [cutStart, setCutStart] = useState<number | null>(null);
  const [cutEnd, setCutEnd] = useState<number | null>(null);
  
  // Output Format
  const [outputFormat, setOutputFormat] = useState<'wav' | 'mp3'>('wav');
  
  // Playback Time Tracking
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Client-side mount detection (to avoid hydration mismatch)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Refs ---
  const ffmpegRef = useRef<FFmpeg | null>(null); // Persist FFmpeg instance across renders
  const waveformRef = useRef<HTMLDivElement>(null); // Container for WaveSurfer
  const wavesurferRef = useRef<WaveSurfer | null>(null); // Persist WaveSurfer instance
  const regionsRef = useRef<RegionsPlugin | null>(null); // Persist Regions plugin instance
  
  // Initialization Locks (prevent double-loading in React Strict Mode)
  const isLoadedRef = useRef(false);
  const isLoadingRef = useRef(false);

  /**
   * Initialize FFmpeg.wasm on component mount.
   * This downloads the WebAssembly core and sets up the worker.
   */
  useEffect(() => {
    const load = async () => {
      if (isLoadedRef.current || isLoadingRef.current) return;
      isLoadingRef.current = true;
      
      try {
        // Check for SharedArrayBuffer support (required for multi-threaded FFmpeg)
        if (typeof window !== 'undefined' && !window.crossOriginIsolated) {
          console.warn("SharedArrayBuffer is not available. FFmpeg may fail to load or be extremely slow.");
          // We don't throw here to allow trying to load, but it's a common cause of hanging
        }

        if (!ffmpegRef.current) {
          ffmpegRef.current = new FFmpeg();
        }
        const ffmpeg = ffmpegRef.current;

        // Track FFmpeg internal logs
        ffmpeg.on('log', ({ message }) => {
          console.log("FFmpeg Engine Log:", message);
        });

        // Track processing progress
        ffmpeg.on('progress', ({ progress }) => {
          setProgress(Math.round(progress * 100));
        });

        setLoadingStep("SETTING UP ENGINE");
        // Using UMD version of core for better single-threaded compatibility
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd';
        
        console.log("FFmpeg: Fetching core JS...");
        setLoadingStep("FETCHING CORE JS");
        const coreURL = await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript');
        
        console.log("FFmpeg: Fetching core WASM...");
        setLoadingStep("FETCHING CORE WASM");
        const wasmURL = await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm');
        
        console.log("FFmpeg: Starting load()...");
        setLoadingStep("LOADING FFMPEG");
        
        // Load the core and wasm files. 
        // We omit classWorkerURL to let it use the default, 
        // which is safer for the single-threaded core.
        await ffmpeg.load({
          coreURL,
          wasmURL,
        });
        
        console.log("FFmpeg: Load complete!");
        setLoadingStep("READY");
        setIsFfmpegLoaded(true);
        isLoadedRef.current = true;
      } catch (err: any) {
        console.error("FFmpeg load error:", err);
        setEngineError(err.message || "Failed to load FFmpeg");
      } finally {
        isLoadingRef.current = false;
      }
    };
    load();
  }, []);

  /**
   * Initialize WaveSurfer.js when an audio file is loaded.
   * Sets up the waveform visualization and region selection plugin.
   */
  useEffect(() => {
    if (audioUrl && waveformRef.current) {
      try {
        setWsError(null);
        // Clean up previous instance if it exists
        if (wavesurferRef.current) {
          wavesurferRef.current.destroy();
        }

        // Create new WaveSurfer instance
        const ws = WaveSurfer.create({
          container: waveformRef.current,
          waveColor: '#4a4a4a',
          progressColor: '#00FF00',
          cursorColor: '#00FF00',
          barWidth: 2,
          barGap: 1,
          barRadius: 2,
          height: 100,
        });

        // Register Regions plugin for audio cutting
        const wsRegions = ws.registerPlugin(RegionsPlugin.create());
        regionsRef.current = wsRegions;

        ws.load(audioUrl);

        // Set up initial region covering the entire audio file
        ws.on('ready', () => {
          const dur = ws.getDuration();
          setDuration(dur);
          setCurrentTime(0);
          wsRegions.addRegion({
            start: 0,
            end: dur,
            color: 'rgba(0, 255, 0, 0.1)',
            drag: true,
            resize: true,
          });
          setCutStart(0);
          setCutEnd(dur);
        });

        // Update cut boundaries when region is dragged/resized
        wsRegions.on('region-updated', (region) => {
          setCutStart(region.start);
          setCutEnd(region.end);
        });

        // Track playback time
        ws.on('timeupdate', (time) => {
          setCurrentTime(time);
        });

        // Track play/pause state
        ws.on('play', () => setIsPlaying(true));
        ws.on('pause', () => setIsPlaying(false));
        
        ws.on('error', (err: any) => {
          console.error("WaveSurfer error event:", err);
          setWsError(err.message || "Error loading audio in WaveSurfer");
        });

        wavesurferRef.current = ws;
      } catch (err: any) {
        console.error("WaveSurfer init error:", err);
        setWsError(err.message || "Failed to initialize WaveSurfer");
      }
    }
  }, [audioUrl]);

  /**
   * Handle user file selection
   */
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setAudioUrl(URL.createObjectURL(selectedFile));
      setProcessedUrl(null); // Reset previous output
    }
  };

  // --- Playback Controls ---
  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  const skipBackward = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.skip(-5);
    }
  };

  const skipForward = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.skip(5);
    }
  };

  /**
   * Main Audio Processing Logic
   * Constructs and executes the FFmpeg command based on user parameters.
   */
  const processAudio = async () => {
    if (!file || !isFfmpegLoaded || !ffmpegRef.current) return;
    
    setIsProcessing(true);
    setProgress(0);
    setProcessError(null);
    
    try {
      const ffmpeg = ffmpegRef.current;
      const ext = file.name.split('.').pop() || 'wav';
      const inputName = `input.${ext}`;
      const outputName = `output.${outputFormat}`;

      // Write the input file to FFmpeg's virtual file system
      await ffmpeg.writeFile(inputName, await fetchFile(file));

      const args = [];
      
      // 1. Cutting (Trimming)
      // Apply -ss (start) and -to (end) before the input for faster seeking
      if (typeof cutStart === 'number' && typeof cutEnd === 'number') {
        args.push('-ss', cutStart.toString(), '-to', cutEnd.toString());
      }
      
      args.push('-i', inputName);

      const filters = [];
      
      // 2. Playback Speed (atempo)
      const safeSpeed = typeof speed === 'number' ? speed : 1.0;
      if (safeSpeed !== 1.0) {
        filters.push(`atempo=${safeSpeed}`);
      }
      
      // 3. Loudness Normalization (loudnorm)
      // EBU R128 standard normalization
      const safeLufs = typeof lufs === 'number' ? lufs : -27;
      const safeLra = typeof lra === 'number' ? lra : 12;
      const safeTp = typeof tp === 'number' ? tp : -2;
      filters.push(`loudnorm=I=${safeLufs}:LRA=${safeLra}:TP=${safeTp}`);

      // 4. Fades (afade)
      // Calculate final duration to accurately place the fade-out
      const baseDuration = (typeof cutStart === 'number' && typeof cutEnd === 'number') ? (cutEnd - cutStart) : duration;
      const finalDuration = baseDuration / safeSpeed;

      if (fadeIn > 0) {
        filters.push(`afade=t=in:ss=0:d=${fadeIn}`);
      }
      if (fadeOut > 0) {
        const fadeOutStart = Math.max(0, finalDuration - fadeOut);
        filters.push(`afade=t=out:st=${fadeOutStart}:d=${fadeOut}`);
      }

      // Apply all filters
      args.push('-af', filters.join(','));
      
      // 5. Encoding Options
      if (outputFormat === 'mp3') {
        args.push('-c:a', 'libmp3lame', '-b:a', '320k'); // High quality MP3
      }
      
      args.push(outputName);

      // Execute FFmpeg command
      await ffmpeg.exec(args);

      // Read the output file from the virtual file system
      const data = await ffmpeg.readFile(outputName);
      const mimeType = outputFormat === 'mp3' ? 'audio/mpeg' : 'audio/wav';
      // Ensure the buffer is a standard ArrayBuffer for Blob compatibility
      const safeData = typeof data === 'string'
        ? new Uint8Array([...data].map((c) => c.charCodeAt(0)))
        : new Uint8Array(data);
      const blob = new Blob([safeData], { type: mimeType });
      const url = URL.createObjectURL(blob);
      
      setProcessedUrl(url);
    } catch (error: any) {
      console.error('Error processing audio:', error);
      setProcessError(error.message || "An error occurred during processing");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#151619] text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Audio Processor</h1>
            <p className="text-zinc-400 font-mono text-sm mt-1">Loudness Normalization & Editing</p>
          </div>
          {/* FFmpeg Loading Status */}
          {!isFfmpegLoaded && !engineError && (
            <div className="flex items-center text-zinc-400 font-mono text-xs">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {loadingStep}...
              {loadingStep === "LOADING FFMPEG" && (
                <span className="ml-1 opacity-50 hidden sm:inline">(Check console if stuck)</span>
              )}
            </div>
          )}
          {engineError && (
            <div className="flex flex-col items-end text-red-400 font-mono text-xs max-w-xs text-right">
              <span className="font-bold">ENGINE ERROR:</span>
              <span>{engineError}</span>
              {mounted && !window.crossOriginIsolated && (
                <span className="text-[10px] mt-1 opacity-80">
                  SharedArrayBuffer not enabled. Check COOP/COEP headers.
                </span>
              )}
            </div>
          )}
        </header>

        {/* Audio Input & Waveform Section */}
        <Card className="bg-[#1C1D21] border-zinc-800">
          <CardContent className="p-6 space-y-6">
            {!file ? (
              // File Upload Dropzone
              <div className="border-2 border-dashed border-zinc-700 rounded-lg p-12 text-center hover:border-zinc-500 transition-colors cursor-pointer relative">
                <input 
                  type="file" 
                  accept="audio/*" 
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-12 h-12 mx-auto text-zinc-500 mb-4" />
                <p className="text-zinc-300 font-medium">Drop audio file here or click to browse</p>
                <p className="text-zinc-500 text-sm mt-2">Supports WAV, MP3, AAC, FLAC</p>
              </div>
            ) : (
              // Active Audio Player
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm text-zinc-400 truncate max-w-[300px]">
                    {file.name}
                  </div>
                  <Button variant="outline" size="sm" onClick={() => {
                    setFile(null);
                    setAudioUrl(null);
                    setProcessedUrl(null);
                  }}>
                    Change File
                  </Button>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  {wsError && (
                    <div className="text-red-400 font-mono text-xs mb-4 p-2 bg-red-400/10 rounded">
                      WAVESURFER ERROR: {wsError}
                    </div>
                  )}
                  {/* WaveSurfer Container */}
                  <div ref={waveformRef} className="w-full" />
                  
                  {/* Playback Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" onClick={skipBackward}>
                        <Rewind className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={togglePlay}>
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </Button>
                      <Button variant="ghost" size="icon" onClick={skipForward}>
                        <FastForward className="w-4 h-4" />
                      </Button>
                      <span className="font-mono text-xs text-zinc-400 ml-2">
                        {currentTime.toFixed(2)}s / {duration.toFixed(2)}s
                      </span>
                    </div>
                    <div className="font-mono text-xs text-zinc-500">
                      {typeof cutStart === 'number' && typeof cutEnd === 'number' && (
                        <span>REGION: {cutStart.toFixed(2)}s - {cutEnd.toFixed(2)}s</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Processing Parameters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Loudness Normalization Settings */}
          <Card className="bg-[#1C1D21] border-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Settings2 className="w-5 h-5 mr-2 text-zinc-400" />
                Loudness Targets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-zinc-300">Integrated Loudness (LUFS)</Label>
                  <span className="font-mono text-xs text-zinc-400">{typeof lufs === 'number' ? lufs : -27}</span>
                </div>
                <Slider 
                  value={[typeof lufs === 'number' ? lufs : -27]} 
                  min={-70} 
                  max={-5} 
                  step={1} 
                  onValueChange={(v) => setLufs(Array.isArray(v) ? v[0] : v)} 
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-zinc-300">Loudness Range (LRA)</Label>
                  <span className="font-mono text-xs text-zinc-400">{typeof lra === 'number' ? lra : 12}</span>
                </div>
                <Slider 
                  value={[typeof lra === 'number' ? lra : 12]} 
                  min={1} 
                  max={20} 
                  step={1} 
                  onValueChange={(v) => setLra(Array.isArray(v) ? v[0] : v)} 
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-zinc-300">True Peak (dBTP)</Label>
                  <span className="font-mono text-xs text-zinc-400">{typeof tp === 'number' ? tp : -2}</span>
                </div>
                <Slider 
                  value={[typeof tp === 'number' ? tp : -2]} 
                  min={-9} 
                  max={0} 
                  step={0.1} 
                  onValueChange={(v) => setTp(Array.isArray(v) ? v[0] : v)} 
                />
              </div>
            </CardContent>
          </Card>

          {/* Time, Speed, Fades & Export Settings */}
          <Card className="bg-[#1C1D21] border-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Scissors className="w-5 h-5 mr-2 text-zinc-400" />
                Time, Speed & Fades
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-zinc-300">Playback Speed</Label>
                  <span className="font-mono text-xs text-zinc-400">{typeof speed === 'number' ? speed.toFixed(2) : '1.00'}x</span>
                </div>
                <Slider 
                  value={[typeof speed === 'number' ? speed : 1.0]} 
                  min={0.7} 
                  max={1.3} 
                  step={0.01} 
                  onValueChange={(v) => setSpeed(Array.isArray(v) ? v[0] : v)} 
                />
                <p className="text-xs text-zinc-500 font-mono">Range: ±30%</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-zinc-300">Fade In</Label>
                  <span className="font-mono text-xs text-zinc-400">{fadeIn.toFixed(1)}s</span>
                </div>
                <Slider 
                  value={[fadeIn]} 
                  min={0} 
                  max={10} 
                  step={0.1} 
                  onValueChange={(v) => setFadeIn(Array.isArray(v) ? v[0] : v)} 
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-zinc-300">Fade Out</Label>
                  <span className="font-mono text-xs text-zinc-400">{fadeOut.toFixed(1)}s</span>
                </div>
                <Slider 
                  value={[fadeOut]} 
                  min={0} 
                  max={10} 
                  step={0.1} 
                  onValueChange={(v) => setFadeOut(Array.isArray(v) ? v[0] : v)} 
                />
              </div>

              {/* Action Section */}
              <div className="pt-8 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <Label className="text-zinc-300">Output Format</Label>
                  <div className="flex space-x-2">
                    <Button 
                      variant={outputFormat === 'wav' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setOutputFormat('wav')}
                      className={outputFormat === 'wav' ? 'bg-[#00FF00] text-black hover:bg-[#00CC00]' : ''}
                    >
                      WAV
                    </Button>
                    <Button 
                      variant={outputFormat === 'mp3' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setOutputFormat('mp3')}
                      className={outputFormat === 'mp3' ? 'bg-[#00FF00] text-black hover:bg-[#00CC00]' : ''}
                    >
                      MP3
                    </Button>
                  </div>
                </div>

                {processError && (
                  <div className="text-red-400 font-mono text-xs p-2 bg-red-400/10 rounded">
                    PROCESSING ERROR: {processError}
                  </div>
                )}
                <Button 
                  className="w-full bg-[#00FF00] text-black hover:bg-[#00CC00] font-bold"
                  disabled={!file || !isFfmpegLoaded || isProcessing}
                  onClick={processAudio}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      PROCESSING {progress}%
                    </>
                  ) : (
                    'PROCESS AUDIO'
                  )}
                </Button>
              </div>

              {/* Output Result Section */}
              {processedUrl && (
                <div className="pt-4 space-y-4 border-t border-zinc-800">
                  <div className="flex items-center justify-between">
                    <Label className="text-zinc-300">Output Ready</Label>
                    <a 
                      href={processedUrl} 
                      download={`processed_audio.${outputFormat}`}
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download {outputFormat.toUpperCase()}
                    </a>
                  </div>
                  <audio controls src={processedUrl} className="w-full" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
