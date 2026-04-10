# Audio Processor App

A full-featured, client-side audio processing application built with Next.js, React, and Tailwind CSS. It leverages the power of WebAssembly to perform complex audio manipulation directly in the browser without requiring a backend server.

## Features

- **Client-Side Processing:** Uses `FFmpeg.wasm` to process audio entirely within the browser, ensuring user privacy and fast feedback.
- **Visual Audio Editing:** Integrates `WaveSurfer.js` to provide a visual waveform of the uploaded audio. Users can drag to select specific regions to cut or trim.
- **Loudness Normalization:** Implements EBU R128 loudness normalization, allowing users to set target Integrated Loudness (LUFS), Loudness Range (LRA), and True Peak (dBTP).
- **Playback Speed Control:** Adjust the speed of the audio output (±30% range).
- **Fade In / Fade Out:** Add smooth fade-in and fade-out transitions to the processed audio.
- **Format Conversion:** Export the processed audio as either a high-quality WAV file or a 320kbps MP3 file.
- **Modern UI:** Built with Tailwind CSS and shadcn/ui components for a sleek, dark-mode interface.

## Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Audio Engine:** FFmpeg.wasm (`@ffmpeg/ffmpeg`, `@ffmpeg/core`, `@ffmpeg/util`)
- **Audio Visualization:** WaveSurfer.js

## How It Works

1. **Initialization:** On load, the app fetches the FFmpeg WebAssembly core and initializes a background worker.
2. **File Upload:** The user selects an audio file (WAV, MP3, AAC, FLAC). The file is loaded into a local Blob URL.
3. **Visualization:** WaveSurfer.js reads the Blob URL and draws an interactive waveform. A Regions plugin is attached to allow visual trimming.
4. **Parameter Configuration:** The user adjusts sliders for loudness targets, speed, and fades.
5. **Processing:** 
   - The original file is written to FFmpeg's virtual in-memory file system.
   - A complex FFmpeg command is constructed based on the user's parameters (using filters like `atempo`, `loudnorm`, `afade`).
   - FFmpeg executes the command, processing the audio entirely in the browser.
6. **Export:** The resulting file is read from the virtual file system, converted to a Blob URL, and presented to the user for playback and download.

## Development

This project uses Next.js with static export (`output: 'export'`).

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

## Notes on FFmpeg.wasm

This app uses the single-threaded ESM build of FFmpeg.wasm (`@ffmpeg/core@0.12.6/dist/esm`). This avoids the strict Cross-Origin Isolation (COOP/COEP) requirements of the multi-threaded version, making it easier to deploy and embed while still providing excellent performance for standard audio processing tasks.
