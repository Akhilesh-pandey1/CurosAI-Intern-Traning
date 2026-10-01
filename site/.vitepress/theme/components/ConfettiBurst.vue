<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { MODULE_COMPLETED_EVENT } from '../composables/useProgress'

const CENTER_BURST_OPTIONS = { particleCount: 140, spread: 80, origin: { y: 0.7 } }
const LEFT_SIDE_BURST_OPTIONS = { particleCount: 90, angle: 60, spread: 70, origin: { x: 0, y: 0.8 } }
const RIGHT_SIDE_BURST_OPTIONS = { particleCount: 90, angle: 120, spread: 70, origin: { x: 1, y: 0.8 } }
const SIDE_BURST_DELAY_MILLISECONDS = 250

async function fireConfettiBurst() {
  const confetti = (await import('canvas-confetti')).default
  confetti(CENTER_BURST_OPTIONS)
  window.setTimeout(() => {
    confetti(LEFT_SIDE_BURST_OPTIONS)
    confetti(RIGHT_SIDE_BURST_OPTIONS)
  }, SIDE_BURST_DELAY_MILLISECONDS)
}

onMounted(() => {
  window.addEventListener(MODULE_COMPLETED_EVENT, fireConfettiBurst)
})

onBeforeUnmount(() => {
  window.removeEventListener(MODULE_COMPLETED_EVENT, fireConfettiBurst)
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
