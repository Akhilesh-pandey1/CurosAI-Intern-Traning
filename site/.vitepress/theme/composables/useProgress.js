import { ref } from 'vue'
import { MODULES } from '../moduleCatalog.js'

const ENGLISH_FOLDER_PREFIX = 'en/'
const HINGLISH_FOLDER_PREFIX = 'hi/'
const LOCALE_PREFIX_LENGTH = 3
const MARKDOWN_EXTENSION = '.md'
const PAGE_CELEBRATION = 'page'
const MODULE_CELEBRATION = 'module'

const PAGE_ORDER = MODULES.flatMap((trainingModule) => trainingModule.pages)

const checkedPages = ref([])

export function toPageKey(relativePath) {
  const hasLocalePrefix =
    relativePath.startsWith(ENGLISH_FOLDER_PREFIX) || relativePath.startsWith(HINGLISH_FOLDER_PREFIX)
  const pathWithoutLocale = hasLocalePrefix ? relativePath.slice(LOCALE_PREFIX_LENGTH) : relativePath
  const hasMarkdownExtension = pathWithoutLocale.endsWith(MARKDOWN_EXTENSION)
  const pathWithoutExtension = hasMarkdownExtension
    ? pathWithoutLocale.slice(0, -MARKDOWN_EXTENSION.length)
    : pathWithoutLocale
  const pageKey = `/${pathWithoutExtension}`
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
  const isNowChecked = !wasChecked
  return isNowChecked
}

function resolveCelebrationType(pageKey) {
  const owningModule = MODULES.find(
    (trainingModule) =>
      trainingModule.pages.some((page) => page.path === pageKey) &&
      trainingModule.pages.every((page) => checkedPages.value.includes(page.path))
  )
  const celebrationType = owningModule === undefined ? PAGE_CELEBRATION : MODULE_CELEBRATION
  return celebrationType
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
  const progressHelpers = {
    isPageChecked,
    togglePageCheck,
    resolveCelebrationType,
    countCheckedPages,
    findNextUnfinishedPagePath,
    findNextPageAfter
  }
  return progressHelpers
}
