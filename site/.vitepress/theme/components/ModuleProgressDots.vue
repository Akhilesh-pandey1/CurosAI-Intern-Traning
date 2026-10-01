<script setup>
import { computed } from 'vue'
import { MODULES } from '../moduleCatalog.js'
import { useProgress } from '../composables/useProgress'
import { useSiteText } from '../composables/useSiteText'

const { countCheckedPages } = useProgress()
const { localePrefix } = useSiteText()

const NOT_STARTED_STATE = 'not-started'
const IN_PROGRESS_STATE = 'in-progress'
const COMPLETE_STATE = 'complete'

function resolveModuleState(totalPages, checkedPageCount) {
  if (totalPages === 0) {
    return NOT_STARTED_STATE
  }
  if (checkedPageCount === totalPages) {
    return COMPLETE_STATE
  }
  if (checkedPageCount > 0) {
    return IN_PROGRESS_STATE
  }
  return NOT_STARTED_STATE
}

const moduleStates = computed(() =>
  MODULES.map((trainingModule) => {
    const checkedPageCount = countCheckedPages(trainingModule)
    const totalPages = trainingModule.pages.length
    const hasFirstPage = totalPages > 0
    const moduleState = {
      title: trainingModule.title,
      chipTag: hasFirstPage ? 'a' : 'span',
      chipHref: hasFirstPage ? `${localePrefix.value}${trainingModule.pages[0]}.html` : undefined,
      checkedPageCount,
      totalPages,
      progressState: resolveModuleState(totalPages, checkedPageCount)
    }
    return moduleState
  })
)
</script>

<template>
  <div class="module-progress-dots">
    <component
      :is="moduleState.chipTag"
      v-for="moduleState in moduleStates"
      :key="moduleState.title"
      class="module-chip"
      :class="`is-${moduleState.progressState}`"
      :href="moduleState.chipHref"
    >
      <span class="module-dot"></span>
      <span class="module-title">{{ moduleState.title }}</span>
      <span class="module-count">{{ moduleState.checkedPageCount }}/{{ moduleState.totalPages }}</span>
    </component>
  </div>
</template>

<style scoped>
.module-progress-dots {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
}

.module-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  color: var(--vp-c-text-1);
  font-size: 14px;
  text-decoration: none;
}

a.module-chip:hover {
  border-color: var(--vp-c-brand-1);
}

.module-chip.is-in-progress {
  border-color: var(--vp-c-brand-1);
}

.module-chip.is-complete {
  border-color: var(--vp-c-green-1);
}

.module-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--vp-c-border);
}

.module-chip.is-in-progress .module-dot {
  background: var(--vp-c-brand-1);
}

.module-chip.is-complete .module-dot {
  background: var(--vp-c-green-1);
}

.module-count {
  color: var(--vp-c-text-2);
  font-size: 12px;
}
</style>
