import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ConfettiBurst from './components/ConfettiBurst.vue'
import ContinueButton from './components/ContinueButton.vue'
import ModuleProgressDots from './components/ModuleProgressDots.vue'
import PageNextButton from './components/PageNextButton.vue'
import QuizBlock from './components/QuizBlock.vue'
import VideoSlot from './components/VideoSlot.vue'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(ConfettiBurst)
    }),
  enhanceApp({ app }) {
    app.component('PageNextButton', PageNextButton)
    app.component('VideoSlot', VideoSlot)
    app.component('QuizBlock', QuizBlock)
    app.component('ContinueButton', ContinueButton)
    app.component('ModuleProgressDots', ModuleProgressDots)
  }
}
