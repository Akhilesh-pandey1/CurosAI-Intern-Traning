<script setup>
import { computed, ref } from 'vue'
import { useSiteText } from '../composables/useSiteText'

const props = defineProps({
  questions: {
    type: Array,
    required: true
  }
})

const { pickSiteText } = useSiteText()

const visibleAnswerIndexes = ref([])

const blockTitle = computed(() => pickSiteText('Test Yourself', 'Apna Test Lo'))
const showAnswerLabel = computed(() => pickSiteText('Show answer', 'Answer dikhao'))
const hideAnswerLabel = computed(() => pickSiteText('Hide answer', 'Answer chhupao'))

function isAnswerVisible(questionIndex) {
  return visibleAnswerIndexes.value.includes(questionIndex)
}

function handleAnswerToggle(questionIndex) {
  visibleAnswerIndexes.value = isAnswerVisible(questionIndex)
    ? visibleAnswerIndexes.value.filter((visibleIndex) => visibleIndex !== questionIndex)
    : [...visibleAnswerIndexes.value, questionIndex]
}
</script>

<template>
  <div class="quiz-block">
    <h2 class="quiz-block-title">🧠 {{ blockTitle }}</h2>
    <div v-for="(quizQuestion, questionIndex) in props.questions" :key="questionIndex" class="quiz-card">
      <p class="quiz-question">{{ questionIndex + 1 }}. {{ quizQuestion.question }}</p>
      <button type="button" class="quiz-answer-button" @click="handleAnswerToggle(questionIndex)">
        {{ isAnswerVisible(questionIndex) ? hideAnswerLabel : showAnswerLabel }}
      </button>
      <p v-if="isAnswerVisible(questionIndex)" class="quiz-answer">{{ quizQuestion.answer }}</p>
    </div>
  </div>
</template>

<style scoped>
.quiz-block-title {
  margin-top: 32px;
}

.quiz-card {
  padding: 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  margin-bottom: 12px;
}

.quiz-question {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.quiz-answer-button {
  padding: 6px 14px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.quiz-answer {
  margin-top: 12px;
  padding: 12px;
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-alt);
  border-radius: 4px;
  color: var(--vp-c-text-1);
}
</style>
