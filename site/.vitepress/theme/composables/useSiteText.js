import { computed } from 'vue'
import { useData } from 'vitepress'

export function useSiteText() {
  const { lang, localeIndex } = useData()

  const isHinglish = computed(() => lang.value.startsWith('hi'))
  const localePrefix = computed(() => (localeIndex.value === 'root' ? '' : `/${localeIndex.value}`))

  const pickSiteText = (englishText, hinglishText) => (isHinglish.value ? hinglishText : englishText)

  return { pickSiteText, localePrefix }
}
