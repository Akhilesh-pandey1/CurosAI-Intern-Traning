const APPLAUSE_SOUND_URL = '/audience-clapping.mp3'
const APPLAUSE_VOLUME = 0.9

export function playApplauseSound() {
  if (typeof window === 'undefined') {
    return
  }
  const applauseAudio = new Audio(APPLAUSE_SOUND_URL)
  applauseAudio.volume = APPLAUSE_VOLUME
  applauseAudio.play()
}
