import { defineConfig } from 'vitepress'
import { MODULES } from './theme/moduleCatalog.js'

const SITE_TITLE = 'Curosai Intern Training'
const SITE_DESCRIPTION =
  'One ordered path from intern to independent builder — HTML/CSS, JavaScript, React, Python, and AI-first working habits.'
const COMPANY_URL = 'https://curosai.com'

const companyNavLinks = COMPANY_URL === '' ? [] : [{ text: 'Curosai', link: COMPANY_URL }]

function buildSidebar(localePrefix, pickPageTitle) {
  const sidebarEntries = MODULES.map((trainingModule, moduleIndex) => {
    const moduleLabel = `${moduleIndex + 1}. ${trainingModule.title}`
    if (trainingModule.pages.length === 0) {
      return { text: moduleLabel }
    }
    const pageLinks = trainingModule.pages.map((page) => ({
      text: pickPageTitle(page),
      link: `${localePrefix}${page.path}`
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
        nav: companyNavLinks,
        sidebar: buildSidebar('', (page) => page.enTitle),
        docFooter: {
          prev: false,
          next: false
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
        nav: companyNavLinks,
        sidebar: buildSidebar('/hi', (page) => page.hiTitle),
        docFooter: {
          prev: false,
          next: false
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
