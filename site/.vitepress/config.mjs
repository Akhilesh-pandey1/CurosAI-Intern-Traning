import { defineConfig } from 'vitepress'
import { MODULES } from './theme/moduleCatalog.js'

const SITE_TITLE = 'Intern Training'
const SITE_DESCRIPTION =
  'One ordered path from intern to independent builder — HTML/CSS, JavaScript, React, Python, and AI-first working habits.'

const ENGLISH_PAGE_LABELS = {
  '/html-css/01-start-here': 'Start Here',
  '/html-css/02-html-essentials': 'HTML Essentials'
}

const HINGLISH_PAGE_LABELS = {
  '/html-css/01-start-here': 'Yahan Se Shuru Karein',
  '/html-css/02-html-essentials': 'HTML Ki Basics'
}

function buildSidebar(localePrefix, pageLabels) {
  const sidebarEntries = MODULES.map((trainingModule, moduleIndex) => {
    const moduleLabel = `${moduleIndex + 1}. ${trainingModule.title}`
    if (trainingModule.pages.length === 0) {
      return { text: moduleLabel }
    }
    const pageLinks = trainingModule.pages.map((pagePath) => ({
      text: pageLabels[pagePath],
      link: `${localePrefix}${pagePath}`
    }))
    return { text: moduleLabel, collapsed: moduleIndex > 0, items: pageLinks }
  })
  return sidebarEntries
}

export default defineConfig({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  rewrites: {
    'en/:rest*': ':rest*'
  },
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {
        siteTitle: SITE_TITLE,
        sidebar: buildSidebar('', ENGLISH_PAGE_LABELS),
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        returnToTopLabel: 'Back to top',
        outline: {
          label: 'On this page'
        },
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode'
      }
    },
    hi: {
      label: 'Hinglish',
      lang: 'hi',
      link: '/hi/',
      themeConfig: {
        siteTitle: SITE_TITLE,
        sidebar: buildSidebar('/hi', HINGLISH_PAGE_LABELS),
        docFooter: {
          prev: 'Pichla page',
          next: 'Agla page'
        },
        returnToTopLabel: 'Upar wapas jao',
        outline: {
          label: 'Is page par'
        },
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Light mode on karo',
        darkModeSwitchTitle: 'Dark mode on karo'
      }
    }
  }
})
