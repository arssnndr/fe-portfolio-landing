import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { inject } from '@vercel/analytics'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// global styles for the portfolio
import './styles/main.css'

// Initialize Vercel Analytics
inject()

app.mount('#app')
