const APPLAUSE_SOUND_URL = '/clapping-hurray.oga'
const APPLAUSE_VOLUME = 0.9
const PAGE_PLAYBACK_LIMIT_MILLISECONDS = 4000

export function playApplauseSound(celebrationType) {
  if (typeof window === 'undefined') {
    return
  }
  const applauseAudio = new Audio(APPLAUSE_SOUND_URL)
  applauseAudio.volume = APPLAUSE_VOLUME
  applauseAudio.play()
  if (celebrationType === 'page') {
    window.setTimeout(() => {
      applauseAudio.pause()
    }, PAGE_PLAYBACK_LIMIT_MILLISECONDS)
  }
}
