<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vitepress'
import { useProgress } from '../composables/useProgress'
import { useSiteText } from '../composables/useSiteText'

const router = useRouter()
const { findNextUnfinishedPagePath } = useProgress()
const { pickSiteText, localePrefix } = useSiteText()

const targetPagePath = ref('')
const hasUnfinishedPages = ref(false)

onMounted(() => {
  const nextPagePath = findNextUnfinishedPagePath()
  hasUnfinishedPages.value = nextPagePath !== '/'
  targetPagePath.value =
    nextPagePath === '/' ? `${localePrefix.value}/` : `${localePrefix.value}${nextPagePath}`
})

const buttonLabel = computed(() => pickSiteText('Continue learning', 'Aage padho'))

function handleContinueClick() {
  router.go(targetPagePath.value)
}
</script>

<template>
  <button v-if="hasUnfinishedPages" type="button" class="continue-button" @click="handleContinueClick">
    {{ buttonLabel }} <span aria-hidden="true">→</span>
  </button>
</template>

<style scoped>
.continue-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 12px;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.continue-button:hover {
  border-color: var(--vp-button-brand-hover-border);
  background: var(--vp-button-brand-hover-bg);
}
</style>
