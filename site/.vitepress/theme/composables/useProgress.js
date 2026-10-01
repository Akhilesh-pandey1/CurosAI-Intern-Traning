import { onMounted, ref } from 'vue'
import { MODULES } from '../moduleCatalog.js'

const STORAGE_KEY = 'intern-training-progress'
export const PAGE_CHECKED_EVENT = 'intern-training-page-checked'
export const MODULE_COMPLETED_EVENT = 'intern-training-module-completed'
const ENGLISH_FOLDER_PREFIX = 'en/'
const HINGLISH_FOLDER_PREFIX = 'hi/'
const LOCALE_PREFIX_LENGTH = 3
const MARKDOWN_EXTENSION = '.md'

const PAGE_ORDER = MODULES.flatMap((trainingModule) => trainingModule.pages)

const checkedPages = ref([])
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
  } catch {
    checkedPages.value = []
  }
}

function saveStoredProgress() {
  const progress = { checkedPages: checkedPages.value }
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

function togglePageCheck(pageKey) {
  const wasChecked = isPageChecked(pageKey)
  checkedPages.value = wasChecked
    ? checkedPages.value.filter((page) => page !== pageKey)
    : [...checkedPages.value, pageKey]
  saveStoredProgress()
  const isNowChecked = !wasChecked
  return isNowChecked
}

function celebratePageTransition(pageKey) {
  const owningModule = MODULES.find(
    (trainingModule) =>
      trainingModule.pages.some((page) => page.path === pageKey) &&
      trainingModule.pages.every((page) => checkedPages.value.includes(page.path))
  )
  if (owningModule !== undefined) {
    window.dispatchEvent(
      new CustomEvent(MODULE_COMPLETED_EVENT, { detail: { moduleTitle: owningModule.title } })
    )
    return
  }
  window.dispatchEvent(new CustomEvent(PAGE_CHECKED_EVENT))
}

function countCheckedPages(trainingModule) {
  const checkedPageCount = trainingModule.pages.filter((page) => checkedPages.value.includes(page.path)).length
  return checkedPageCount
}

function findNextUnfinishedPagePath() {
  const nextUnfinishedPage = PAGE_ORDER.find((page) => !checkedPages.value.includes(page.path))
  const nextUnfinishedPagePath = nextUnfinishedPage === undefined ? '/' : nextUnfinishedPage.path
  return nextUnfinishedPagePath
}

function findNextPageAfter(pageKey) {
  const currentPageIndex = PAGE_ORDER.findIndex((page) => page.path === pageKey)
  const isLastBuiltPage = currentPageIndex === PAGE_ORDER.length - 1
  const hasNoNextPage = currentPageIndex === -1 || isLastBuiltPage
  const nextPage = hasNoNextPage ? null : PAGE_ORDER[currentPageIndex + 1]
  return nextPage
}

export function useProgress() {
  if (typeof window !== 'undefined') {
    onMounted(loadProgressOnce)
  }
  const progressHelpers = {
    isPageChecked,
    togglePageCheck,
    celebratePageTransition,
    countCheckedPages,
    findNextUnfinishedPagePath,
    findNextPageAfter
  }
  return progressHelpers
}
