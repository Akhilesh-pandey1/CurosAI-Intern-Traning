<script setup>
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { toPageKey, useProgress } from '../composables/useProgress'
import { useSiteText } from '../composables/useSiteText'

const { page } = useData()
const { isPageChecked, togglePageCheck, findNextPageAfter } = useProgress()
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

const nextStopIntro = computed(() => pickSiteText('Page done — next stop:', 'Page ho gaya — agla stop:'))
const moduleCompleteText = computed(() =>
  pickSiteText('Module complete — amazing work! 🎉', 'Module poora ho gaya — kamaal ka kaam! 🎉')
)
const nextPageHref = computed(() =>
  nextPage.value === null ? '' : `${localePrefix.value}${nextPage.value.path}.html`
)
const nextPageTitle = computed(() =>
  nextPage.value === null ? '' : pickSiteText(nextPage.value.enTitle, nextPage.value.hiTitle)
)
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
    <a v-if="isChecked && nextPage !== null" class="next-stop-card" :href="nextPageHref">
      <span class="next-stop-intro">{{ nextStopIntro }}</span>
      <span class="next-stop-title">{{ nextPageTitle }} <span aria-hidden="true">→</span></span>
    </a>
    <div v-else-if="isChecked" class="next-stop-card is-module-complete">
      <span class="next-stop-title">{{ moduleCompleteText }}</span>
    </div>
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

.next-stop-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 10px;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.next-stop-card:hover {
  background: var(--vp-c-bg-soft, var(--vp-c-bg-alt));
}

.next-stop-card.is-module-complete {
  border-color: var(--vp-c-green-1);
}

.next-stop-intro {
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.next-stop-title {
  color: var(--vp-c-brand-1);
  font-size: 17px;
  font-weight: 700;
}

.is-module-complete .next-stop-title {
  color: var(--vp-c-green-1);
}
</style>
