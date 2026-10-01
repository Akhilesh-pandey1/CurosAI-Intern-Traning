import { onMounted, ref } from 'vue'
import { MODULES } from '../moduleCatalog.js'

const STORAGE_KEY = 'intern-training-progress'
export const MODULE_COMPLETED_EVENT = 'intern-training-module-completed'
const ENGLISH_FOLDER_PREFIX = 'en/'
const HINGLISH_FOLDER_PREFIX = 'hi/'
const LOCALE_PREFIX_LENGTH = 3
const MARKDOWN_EXTENSION = '.md'

const PAGE_ORDER = MODULES.flatMap((trainingModule) => trainingModule.pages)

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
  const pageKey = hasMarkdownExtension
    ? pathWithoutLocale.slice(0, -MARKDOWN_EXTENSION.length)
    : pathWithoutLocale
  return pageKey
}

function isPageChecked(pageKey) {
  const pageIsChecked = checkedPages.value.includes(pageKey)
  return pageIsChecked
}

function celebrateModuleOnce(owningModule) {
  const alreadyCelebrated = celebratedModules.value.includes(owningModule.title)
  if (alreadyCelebrated) {
    return
  }
  celebratedModules.value = [...celebratedModules.value, owningModule.title]
  saveStoredProgress()
  window.dispatchEvent(new CustomEvent(MODULE_COMPLETED_EVENT, { detail: { moduleTitle: owningModule.title } }))
}

function togglePageCheck(pageKey) {
  const wasChecked = isPageChecked(pageKey)
  checkedPages.value = wasChecked
    ? checkedPages.value.filter((page) => page !== pageKey)
    : [...checkedPages.value, pageKey]
  saveStoredProgress()
  const owningModule = MODULES.find((trainingModule) => trainingModule.pages.includes(pageKey))
  const moduleNowComplete =
    owningModule !== undefined &&
    owningModule.pages.every((page) => checkedPages.value.includes(page))
  if (moduleNowComplete) {
    celebrateModuleOnce(owningModule)
  }
  const isNowChecked = !wasChecked
  return isNowChecked
}

function countCheckedPages(trainingModule) {
  const checkedPageCount = trainingModule.pages.filter((page) => checkedPages.value.includes(page)).length
  return checkedPageCount
}

function findNextUnfinishedPagePath() {
  const nextUnfinishedPage = PAGE_ORDER.find((page) => !checkedPages.value.includes(page))
  const nextUnfinishedPagePath = nextUnfinishedPage === undefined ? '/' : nextUnfinishedPage
  return nextUnfinishedPagePath
}

export function useProgress() {
  if (typeof window !== 'undefined') {
    onMounted(loadProgressOnce)
  }
  const progressHelpers = {
    isPageChecked,
    togglePageCheck,
    countCheckedPages,
    findNextUnfinishedPagePath
  }
  return progressHelpers
}
