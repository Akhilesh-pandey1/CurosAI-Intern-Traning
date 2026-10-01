import { defineConfig } from 'vitepress'

const SITE_TITLE = 'Intern Training'
const SITE_DESCRIPTION =
  'One ordered path from intern to independent builder — HTML/CSS, JavaScript, React, Python, and AI-first working habits.'

const ENGLISH_FIRST_MODULE_LINKS = [
  { text: 'Start Here', link: '/html-css/01-start-here' },
  { text: 'HTML Essentials', link: '/html-css/02-html-essentials' }
]

const HINGLISH_FIRST_MODULE_LINKS = [
  { text: 'Start Here', link: '/hi/html-css/01-start-here' },
  { text: 'HTML Essentials', link: '/hi/html-css/02-html-essentials' }
]

const PENDING_MODULE_LABELS = [
  '2. JavaScript',
  '3. React',
  '4. Python/Flask',
  '5. Database',
  '6. CLI (Terminal)',
  '7. Git',
  '8. Agent Coding',
  '9. API Design',
  '10. Frontend UI Design',
  '11. Clean Code & Testing',
  '12. School CRM Capstone'
]

function buildSidebar(firstModuleLinks) {
  const htmlCssModule = {
    text: '1. HTML/CSS',
    collapsed: false,
    items: firstModuleLinks
  }
  const pendingModules = PENDING_MODULE_LABELS.map((label) => ({ text: label }))
  return [htmlCssModule, ...pendingModules]
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
        sidebar: buildSidebar(ENGLISH_FIRST_MODULE_LINKS),
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
        sidebar: buildSidebar(HINGLISH_FIRST_MODULE_LINKS),
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
