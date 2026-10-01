<script setup>
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { toPageKey, useProgress } from '../composables/useProgress'
import { useSiteText } from '../composables/useSiteText'

const { page } = useData()
const { isPageChecked, togglePageCheck } = useProgress()
const { pickSiteText } = useSiteText()

const isChecked = ref(false)

onMounted(() => {
  isChecked.value = isPageChecked(toPageKey(page.value.relativePath))
})

function handleCheckOffToggle() {
  isChecked.value = togglePageCheck(toPageKey(page.value.relativePath))
}
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
</style>
