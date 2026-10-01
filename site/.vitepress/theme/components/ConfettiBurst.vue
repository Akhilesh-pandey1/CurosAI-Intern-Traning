<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { MODULE_COMPLETED_EVENT } from '../composables/useProgress'

const SIDE_BURST_DELAY_MILLISECONDS = 250

async function fireConfettiBurst() {
  const confetti = (await import('canvas-confetti')).default
  confetti({ particleCount: 140, spread: 80, origin: { y: 0.7 } })
  window.setTimeout(() => {
    confetti({ particleCount: 90, angle: 60, spread: 70, origin: { x: 0, y: 0.8 } })
    confetti({ particleCount: 90, angle: 120, spread: 70, origin: { x: 1, y: 0.8 } })
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
