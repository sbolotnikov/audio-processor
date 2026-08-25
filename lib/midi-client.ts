type MidiNote = { midi: number; start: number; duration: number; velocity: number; channel: number };

function readVariableLength(data: Uint8Array, cursor: { value: number }) {
  let value = 0;
  for (let count = 0; count < 4; count++) {
    const byte = data[cursor.value++];
    value = (value << 7) | (byte & 0x7f);
    if (!(byte & 0x80)) break;
  }
  return value;
}

function readUint32(data: Uint8Array, offset: number) {
  return ((data[offset] << 24) | (data[offset + 1] << 16) | (data[offset + 2] << 8) | data[offset + 3]) >>> 0;
}

export async function renderMidiToWav(file: File) {
  const data = new Uint8Array(await file.arrayBuffer());
  const text = (offset: number, length: number) => String.fromCharCode(...data.slice(offset, offset + length));
  if (text(0, 4) !== 'MThd') throw new Error('This is not a valid Standard MIDI file.');
  const tracks = (data[10] << 8) | data[11];
  const division = (data[12] << 8) | data[13];
  if (division & 0x8000) throw new Error('SMPTE-timed MIDI files are not supported.');

  const events: Array<{ tick: number; type: 'on' | 'off'; note: number; velocity: number; channel: number }> = [];
  const tempos: Array<{ tick: number; micros: number }> = [{ tick: 0, micros: 500000 }];
  let offset = 8 + readUint32(data, 4);

  for (let track = 0; track < tracks && offset + 8 <= data.length; track++) {
    if (text(offset, 4) !== 'MTrk') throw new Error('The MIDI track data is malformed.');
    const end = offset + 8 + readUint32(data, offset + 4);
    const cursor = { value: offset + 8 };
    let tick = 0;
    let runningStatus = 0;
    while (cursor.value < end) {
      tick += readVariableLength(data, cursor);
      let status = data[cursor.value++];
      if (status < 0x80) {
        cursor.value--;
        status = runningStatus;
      } else if (status < 0xf0) runningStatus = status;

      if (status === 0xff) {
        const kind = data[cursor.value++];
        const length = readVariableLength(data, cursor);
        if (kind === 0x51 && length === 3) {
          tempos.push({ tick, micros: (data[cursor.value] << 16) | (data[cursor.value + 1] << 8) | data[cursor.value + 2] });
        }
        cursor.value += length;
      } else if (status === 0xf0 || status === 0xf7) {
        cursor.value += readVariableLength(data, cursor);
      } else {
        const kind = status & 0xf0;
        const channel = status & 0x0f;
        const first = data[cursor.value++];
        const second = kind === 0xc0 || kind === 0xd0 ? 0 : data[cursor.value++];
        if (kind === 0x90) events.push({ tick, type: second ? 'on' : 'off', note: first, velocity: second, channel });
        if (kind === 0x80) events.push({ tick, type: 'off', note: first, velocity: second, channel });
      }
    }
    offset = end;
  }

  tempos.sort((a, b) => a.tick - b.tick);
  const uniqueTempos = tempos.filter((tempo, index) => index === tempos.length - 1 || tempos[index + 1].tick !== tempo.tick);
  const tickToSeconds = (tick: number) => {
    let seconds = 0;
    let priorTick = 0;
    let micros = 500000;
    for (const tempo of uniqueTempos) {
      if (tempo.tick > tick) break;
      seconds += ((tempo.tick - priorTick) * micros) / division / 1_000_000;
      priorTick = tempo.tick;
      micros = tempo.micros;
    }
    return seconds + ((tick - priorTick) * micros) / division / 1_000_000;
  };

  const active = new Map<string, Array<{ tick: number; velocity: number }>>();
  const notes: MidiNote[] = [];
  for (const event of events.sort((a, b) => a.tick - b.tick || (a.type === 'off' ? -1 : 1))) {
    const key = `${event.channel}:${event.note}`;
    if (event.type === 'on') {
      const stack = active.get(key) || [];
      stack.push({ tick: event.tick, velocity: event.velocity });
      active.set(key, stack);
    } else {
      const start = active.get(key)?.shift();
      if (start) notes.push({ midi: event.note, start: tickToSeconds(start.tick), duration: Math.max(0.03, tickToSeconds(event.tick) - tickToSeconds(start.tick)), velocity: start.velocity / 127, channel: event.channel });
    }
  }
  if (!notes.length) throw new Error('No playable notes were found in this MIDI file.');
  if (notes.length > 25_000) throw new Error('This MIDI contains too many notes to render safely in the browser.');

  const fullDuration = Math.max(...notes.map((note) => note.start + note.duration)) + 1;
  if (fullDuration > 10 * 60) throw new Error('MIDI files longer than 10 minutes are not supported.');
  const duration = fullDuration;
  const sampleRate = 32000;
  const context = new OfflineAudioContext(1, Math.ceil(duration * sampleRate), sampleRate);
  const master = context.createGain();
  master.gain.value = Math.min(0.8, 2.5 / Math.sqrt(Math.max(1, notes.length / duration)));
  master.connect(context.destination);
  for (const note of notes) {
    if (note.start >= duration) continue;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = note.channel === 9 ? 'square' : note.channel % 3 === 0 ? 'triangle' : 'sine';
    oscillator.frequency.value = 440 * Math.pow(2, (note.midi - 69) / 12);
    const end = Math.min(duration, note.start + note.duration);
    gain.gain.setValueAtTime(0.0001, note.start);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.01, note.velocity * 0.3), note.start + 0.01);
    gain.gain.setValueAtTime(Math.max(0.01, note.velocity * 0.22), Math.max(note.start + 0.01, end - 0.04));
    gain.gain.exponentialRampToValueAtTime(0.0001, end);
    oscillator.connect(gain).connect(master);
    oscillator.start(note.start);
    oscillator.stop(end + 0.01);
  }
  return audioBufferToWav(await context.startRendering());
}

function audioBufferToWav(buffer: AudioBuffer) {
  const channels = buffer.numberOfChannels;
  const output = new ArrayBuffer(44 + buffer.length * channels * 2);
  const view = new DataView(output);
  const write = (offset: number, value: string) => [...value].forEach((char, index) => view.setUint8(offset + index, char.charCodeAt(0)));
  write(0, 'RIFF'); view.setUint32(4, output.byteLength - 8, true); write(8, 'WAVE'); write(12, 'fmt ');
  view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, channels, true);
  view.setUint32(24, buffer.sampleRate, true); view.setUint32(28, buffer.sampleRate * channels * 2, true);
  view.setUint16(32, channels * 2, true); view.setUint16(34, 16, true); write(36, 'data'); view.setUint32(40, output.byteLength - 44, true);
  let position = 44;
  for (let sample = 0; sample < buffer.length; sample++) for (let channel = 0; channel < channels; channel++) {
    const value = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[sample]));
    view.setInt16(position, value < 0 ? value * 0x8000 : value * 0x7fff, true); position += 2;
  }
  return new Blob([output], { type: 'audio/wav' });
}
