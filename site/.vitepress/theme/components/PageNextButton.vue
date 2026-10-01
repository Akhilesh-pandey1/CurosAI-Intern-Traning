<script setup>
import { computed, onMounted, ref } from 'vue'
import { useData, useRouter } from 'vitepress'
import { playApplauseSound } from '../applauseSound.js'
import { toPageKey, useProgress } from '../composables/useProgress'
import { useSiteText } from '../composables/useSiteText'

const { page } = useData()
const router = useRouter()
const { isPageChecked, togglePageCheck, findNextPageAfter, resolveCelebrationType } = useProgress()
const { pickSiteText, localePrefix } = useSiteText()

const PAGE_BURST_OPTIONS = { particleCount: 120, spread: 70, origin: { y: 0.7 } }
const CENTER_BURST_OPTIONS = { particleCount: 160, spread: 80, origin: { y: 0.7 } }
const LEFT_SIDE_BURST_OPTIONS = { particleCount: 90, angle: 60, spread: 70, origin: { x: 0, y: 0.8 } }
const RIGHT_SIDE_BURST_OPTIONS = { particleCount: 90, angle: 120, spread: 70, origin: { x: 1, y: 0.8 } }
const SIDE_BURST_DELAY_MILLISECONDS = 250
const NAVIGATION_DELAY_MILLISECONDS = 900

const isChecked = ref(false)
const nextPage = ref(null)
const isCelebrating = ref(false)

onMounted(() => {
  const currentPageKey = toPageKey(page.value.relativePath)
  isChecked.value = isPageChecked(currentPageKey)
  nextPage.value = findNextPageAfter(currentPageKey)
})

async function firePageCelebration() {
  const confetti = (await import('canvas-confetti')).default
  confetti(PAGE_BURST_OPTIONS)
}

async function fireModuleCelebration() {
  const confetti = (await import('canvas-confetti')).default
  confetti(CENTER_BURST_OPTIONS)
  window.setTimeout(() => {
    confetti(LEFT_SIDE_BURST_OPTIONS)
    confetti(RIGHT_SIDE_BURST_OPTIONS)
  }, SIDE_BURST_DELAY_MILLISECONDS)
}

function handleNextClick() {
  if (isCelebrating.value) {
    return
  }
  isCelebrating.value = true
  const currentPageKey = toPageKey(page.value.relativePath)
  if (!isChecked.value) {
    isChecked.value = togglePageCheck(currentPageKey)
  }
  const celebrationType = resolveCelebrationType(currentPageKey)
  playApplauseSound(celebrationType)
  if (celebrationType === 'module') {
    fireModuleCelebration()
  } else {
    firePageCelebration()
  }
  window.setTimeout(() => {
    router.go(nextButtonHref.value)
  }, NAVIGATION_DELAY_MILLISECONDS)
}

const nextButtonHref = computed(() => {
  if (nextPage.value === null) {
    return ''
  }
  const nextPageHref = `${localePrefix.value}${nextPage.value.path}`
  return nextPageHref
})

const nextButtonLabel = computed(() => {
  if (nextPage.value === null) {
    return ''
  }
  const nextPageTitle = pickSiteText(nextPage.value.enTitle, nextPage.value.hiTitle)
  if (isChecked.value) {
    const nextLabel = pickSiteText(`Next: ${nextPageTitle} →`, `Agla: ${nextPageTitle} →`)
    return nextLabel
  }
  const doneAndNextLabel = pickSiteText(
    `I have done this — Next: ${nextPageTitle} →`,
    `Maine kar liya — Agla: ${nextPageTitle} →`
  )
  return doneAndNextLabel
})
</script>

<template>
  <div v-if="nextPage !== null" class="page-next-button">
    <button type="button" class="next-button" @click="handleNextClick">
      {{ nextButtonLabel }}
    </button>
  </div>
</template>

<style scoped>
.page-next-button {
  margin: 24px 0;
}

.next-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 18px;
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 12px;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;
}

.next-button:hover {
  border-color: var(--vp-button-brand-hover-border);
  background: var(--vp-button-brand-hover-bg);
}
</style>
