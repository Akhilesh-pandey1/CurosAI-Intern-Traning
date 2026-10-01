<script setup>
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { toPageKey, useProgress } from '../composables/useProgress'
import { useSiteText } from '../composables/useSiteText'

const { page } = useData()
const { isPageChecked, togglePageCheck, findNextPageAfter, celebratePageTransition } = useProgress()
const { pickSiteText, localePrefix } = useSiteText()

const isChecked = ref(false)
const nextPage = ref(null)

onMounted(() => {
  const currentPageKey = toPageKey(page.value.relativePath)
  isChecked.value = isPageChecked(currentPageKey)
  nextPage.value = findNextPageAfter(currentPageKey)
})

function handleNextClick() {
  const currentPageKey = toPageKey(page.value.relativePath)
  if (!isChecked.value) {
    isChecked.value = togglePageCheck(currentPageKey)
  }
  celebratePageTransition(currentPageKey)
}

const nextButtonHref = computed(() => {
  if (nextPage.value !== null) {
    const nextPageHref = `${localePrefix.value}${nextPage.value.path}.html`
    return nextPageHref
  }
  const homeHref = `${localePrefix.value}/`
  return homeHref
})

const nextButtonLabel = computed(() => {
  if (nextPage.value !== null) {
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
  }
  if (isChecked.value) {
    const homeLabel = pickSiteText('Back to Home 🎉', 'Home wapas 🎉')
    return homeLabel
  }
  const doneAndHomeLabel = pickSiteText('I have done this — back to Home 🎉', 'Maine kar liya — Home wapas 🎉')
  return doneAndHomeLabel
})
</script>

<template>
  <div class="page-next-button">
    <a
      class="next-button"
      :class="{ 'is-module-end': nextPage === null }"
      :href="nextButtonHref"
      @click="handleNextClick"
    >
      {{ nextButtonLabel }}
    </a>
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
  padding: 14px 18px;
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 12px;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s;
}

.next-button:hover {
  border-color: var(--vp-button-brand-hover-border);
  background: var(--vp-button-brand-hover-bg);
}

.next-button.is-module-end {
  border-color: var(--vp-c-green-1);
  background: var(--vp-c-bg);
  color: var(--vp-c-green-1);
}

.next-button.is-module-end:hover {
  background: var(--vp-c-green-soft, transparent);
}
</style>
