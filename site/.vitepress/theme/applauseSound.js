const CLAP_COUNT = 14
const APPLAUSE_DURATION_SECONDS = 0.9
const CLAP_FREQUENCY_HERTZ = 1500
const CLAP_FILTER_QUALITY = 1.2
const CLAP_VOLUME = 0.5
const CLAP_DECAY_SECONDS = 0.12
const CLAP_START_DELAY_SECONDS = 0.05

let audioContext = null

function getAudioContext() {
  if (audioContext === null) {
    audioContext = new AudioContext()
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume()
  }
  return audioContext
}

function createNoiseBuffer(context) {
  const sampleRate = context.sampleRate
  const bufferLength = Math.floor(sampleRate * APPLAUSE_DURATION_SECONDS)
  const noiseBuffer = context.createBuffer(1, bufferLength, sampleRate)
  const channelData = noiseBuffer.getChannelData(0)
  for (let sampleIndex = 0; sampleIndex < bufferLength; sampleIndex += 1) {
    channelData[sampleIndex] = Math.random() * 2 - 1
  }
  return noiseBuffer
}

function scheduleClap(context, noiseBuffer, clapTime) {
  const clapSource = context.createBufferSource()
  clapSource.buffer = noiseBuffer
  const clapFilter = context.createBiquadFilter()
  clapFilter.type = 'bandpass'
  clapFilter.frequency.value = CLAP_FREQUENCY_HERTZ
  clapFilter.Q.value = CLAP_FILTER_QUALITY
  const clapGain = context.createGain()
  clapGain.gain.setValueAtTime(CLAP_VOLUME, clapTime)
  clapGain.gain.exponentialRampToValueAtTime(0.001, clapTime + CLAP_DECAY_SECONDS)
  clapSource.connect(clapFilter)
  clapFilter.connect(clapGain)
  clapGain.connect(context.destination)
  clapSource.start(clapTime)
  clapSource.stop(clapTime + CLAP_DECAY_SECONDS)
}

export function playApplauseSound() {
  if (typeof window === 'undefined' || typeof window.AudioContext === 'undefined') {
    return
  }
  const context = getAudioContext()
  const noiseBuffer = createNoiseBuffer(context)
  const firstClapTime = context.currentTime + CLAP_START_DELAY_SECONDS
  for (let clapIndex = 0; clapIndex < CLAP_COUNT; clapIndex += 1) {
    const clapTime = firstClapTime + Math.random() * (APPLAUSE_DURATION_SECONDS - CLAP_DECAY_SECONDS)
    scheduleClap(context, noiseBuffer, clapTime)
  }
}
