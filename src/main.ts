import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { inject } from '@vercel/analytics'

import App from './App.vue'
import router from './router'

// Initialize theme as early as possible (before app mount)
;(function initTheme() {
  try {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved)
      return
    }
  } catch {
    // ignore storage errors
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
})()

const app = createApp(App)

app.use(createPinia())
app.use(router)

// global styles for the portfolio
import './styles/main.css'

// Initialize Vercel Analytics
inject()

app.mount('#app')
