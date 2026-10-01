import { onMounted, ref } from 'vue'

const STORAGE_KEY = 'intern-training-progress'
export const MODULE_COMPLETED_EVENT = 'intern-training-module-completed'
const ENGLISH_FOLDER_PREFIX = 'en/'
const HINGLISH_FOLDER_PREFIX = 'hi/'
const LOCALE_PREFIX_LENGTH = 3
const MARKDOWN_EXTENSION = '.md'

export const MODULES = [
  {
    title: 'HTML/CSS',
    pages: ['/html-css/01-start-here', '/html-css/02-html-essentials']
  },
  { title: 'JavaScript', pages: [] },
  { title: 'React', pages: [] },
  { title: 'Python/Flask', pages: [] },
  { title: 'Database', pages: [] },
  { title: 'CLI (Terminal)', pages: [] },
  { title: 'Git', pages: [] },
  { title: 'Agent Coding', pages: [] },
  { title: 'API Design', pages: [] },
  { title: 'Frontend UI Design', pages: [] },
  { title: 'Clean Code & Testing', pages: [] },
  { title: 'School CRM Capstone', pages: [] }
]

const PAGE_ORDER = MODULES.flatMap((module) => module.pages)

const checkedPages = ref([])
const celebratedModules = ref([])
let progressLoaded = false

function loadStoredProgress() {
  const rawProgress = window.localStorage.getItem(STORAGE_KEY)
  if (rawProgress === null) {
    return
  }
  try {
    const parsedProgress = JSON.parse(rawProgress)
    if (Array.isArray(parsedProgress.checkedPages)) {
      checkedPages.value = parsedProgress.checkedPages
    }
    if (Array.isArray(parsedProgress.celebratedModules)) {
      celebratedModules.value = parsedProgress.celebratedModules
    }
  } catch {
    checkedPages.value = []
    celebratedModules.value = []
  }
}

function saveStoredProgress() {
  const progress = {
    checkedPages: checkedPages.value,
    celebratedModules: celebratedModules.value
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

function loadProgressOnce() {
  if (progressLoaded) {
    return
  }
  progressLoaded = true
  loadStoredProgress()
}

export function toPageKey(relativePath) {
  const hasLocalePrefix =
    relativePath.startsWith(ENGLISH_FOLDER_PREFIX) || relativePath.startsWith(HINGLISH_FOLDER_PREFIX)
  const pathWithoutLocale = hasLocalePrefix ? relativePath.slice(LOCALE_PREFIX_LENGTH) : relativePath
  const hasMarkdownExtension = pathWithoutLocale.endsWith(MARKDOWN_EXTENSION)
  return hasMarkdownExtension
    ? pathWithoutLocale.slice(0, -MARKDOWN_EXTENSION.length)
    : pathWithoutLocale
}

function isPageChecked(pageKey) {
  return checkedPages.value.includes(pageKey)
}

function findModuleOfPage(pageKey) {
  return MODULES.find((module) => module.pages.includes(pageKey))
}

function isModuleComplete(module) {
  return module.pages.length > 0 && module.pages.every((page) => checkedPages.value.includes(page))
}

function celebrateModuleOnce(module) {
  const alreadyCelebrated = celebratedModules.value.includes(module.title)
  if (alreadyCelebrated) {
    return
  }
  celebratedModules.value = [...celebratedModules.value, module.title]
  saveStoredProgress()
  window.dispatchEvent(new CustomEvent(MODULE_COMPLETED_EVENT, { detail: { moduleTitle: module.title } }))
}

function togglePageCheck(pageKey) {
  const wasChecked = isPageChecked(pageKey)
  checkedPages.value = wasChecked
    ? checkedPages.value.filter((page) => page !== pageKey)
    : [...checkedPages.value, pageKey]
  saveStoredProgress()
  const module = findModuleOfPage(pageKey)
  if (module !== undefined && isModuleComplete(module)) {
    celebrateModuleOnce(module)
  }
  return !wasChecked
}

function countCheckedPages(module) {
  return module.pages.filter((page) => checkedPages.value.includes(page)).length
}

function findNextUnfinishedPagePath() {
  const nextUnfinishedPage = PAGE_ORDER.find((page) => !checkedPages.value.includes(page))
  return nextUnfinishedPage === undefined ? '/' : nextUnfinishedPage
}

export function useProgress() {
  if (typeof window !== 'undefined') {
    onMounted(loadProgressOnce)
  }
  return {
    MODULES,
    checkedPages,
    isPageChecked,
    togglePageCheck,
    countCheckedPages,
    findNextUnfinishedPagePath
  }
}
