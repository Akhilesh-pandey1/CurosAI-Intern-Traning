<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { playApplauseSound } from '../applauseSound.js'
import { MODULE_COMPLETED_EVENT, PAGE_CHECKED_EVENT } from '../composables/useProgress'

const PAGE_CHECK_BURST_OPTIONS = { particleCount: 80, spread: 60, origin: { y: 0.8 } }
const CENTER_BURST_OPTIONS = { particleCount: 140, spread: 80, origin: { y: 0.7 } }
const LEFT_SIDE_BURST_OPTIONS = { particleCount: 90, angle: 60, spread: 70, origin: { x: 0, y: 0.8 } }
const RIGHT_SIDE_BURST_OPTIONS = { particleCount: 90, angle: 120, spread: 70, origin: { x: 1, y: 0.8 } }
const SIDE_BURST_DELAY_MILLISECONDS = 250

async function fireConfetti(burstOptions) {
  const confetti = (await import('canvas-confetti')).default
  confetti(burstOptions)
}

function handlePageChecked() {
  playApplauseSound()
  fireConfetti(PAGE_CHECK_BURST_OPTIONS)
}

function handleModuleCompleted() {
  playApplauseSound()
  fireConfetti(CENTER_BURST_OPTIONS)
  window.setTimeout(() => {
    fireConfetti(LEFT_SIDE_BURST_OPTIONS)
    fireConfetti(RIGHT_SIDE_BURST_OPTIONS)
  }, SIDE_BURST_DELAY_MILLISECONDS)
}

onMounted(() => {
  window.addEventListener(PAGE_CHECKED_EVENT, handlePageChecked)
  window.addEventListener(MODULE_COMPLETED_EVENT, handleModuleCompleted)
})

onBeforeUnmount(() => {
  window.removeEventListener(PAGE_CHECKED_EVENT, handlePageChecked)
  window.removeEventListener(MODULE_COMPLETED_EVENT, handleModuleCompleted)
})
</script>

<template>
  <span class="confetti-burst-host" aria-hidden="true"></span>
</template>

<style scoped>
.confetti-burst-host {
  display: none;
}
</style>
