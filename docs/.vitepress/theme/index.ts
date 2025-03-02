// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import 'uno.css'
import 'shikiji-twoslash/style-rich.css'
import 'floating-vue/dist/style.css'
import './style.css'
import './custom.css'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {})
  },
  enhanceApp({ app }: any) {
    app.use(createPinia())
    app.use(FloatingVue)
  },
}
