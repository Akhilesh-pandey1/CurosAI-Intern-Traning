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
  if (isChecked.value) {
    nextPage.value = findNextPageAfter(currentPageKey)
  }
})

function handleCheckOffToggle() {
  const currentPageKey = toPageKey(page.value.relativePath)
  isChecked.value = togglePageCheck(currentPageKey)
  nextPage.value = isChecked.value ? findNextPageAfter(currentPageKey) : null
}

function handleNextClick() {
  const currentPageKey = toPageKey(page.value.relativePath)
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
    const nextPageLabel = pickSiteText(`Next: ${nextPageTitle} →`, `Agla: ${nextPageTitle} →`)
    return nextPageLabel
  }
  const moduleEndLabel = pickSiteText('Complete the module 🎉', 'Module complete karo 🎉')
  return moduleEndLabel
})
</script>

<template>
  <div class="page-check-off">
    <button
      type="button"
      class="check-off-button"
      :class="{ 'is-checked': isChecked }"
      @click="handleCheckOffToggle"
    >
      <span class="check-off-box">{{ isChecked ? '✅' : '⬜' }}</span>
      <span class="check-off-label">{{
        isChecked
          ? pickSiteText('Done — nice work!', 'Ho gaya — badhiya!')
          : pickSiteText('I did this — mark the page done', 'Maine kar liya — page done karo')
      }}</span>
    </button>
    <a
      v-if="isChecked"
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
.check-off-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 16px;
  cursor: pointer;
  transition:
    border-color 0.2s,
    background-color 0.2s;
}

.check-off-button:hover {
  border-color: var(--vp-c-brand-1);
}

.check-off-button.is-checked {
  border-color: var(--vp-c-green-1);
  background: var(--vp-c-green-soft, transparent);
}

.check-off-box {
  font-size: 22px;
  line-height: 1;
}

.check-off-label {
  font-weight: 600;
}

.next-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
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
