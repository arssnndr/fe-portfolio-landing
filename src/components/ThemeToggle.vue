<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref<'light' | 'dark'>('dark')

const setTheme = (t: 'light' | 'dark') => {
  theme.value = t
  document.documentElement.setAttribute('data-theme', t)
  try {
    localStorage.setItem('theme', t)
  } catch {
    // ignore storage errors
  }
}

const toggleTheme = () => {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  let initial: 'light' | 'dark' = 'dark'
  try {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (saved === 'light' || saved === 'dark') initial = saved
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      initial = 'dark'
    else initial = 'light'
  } catch {
    // fallback to dark if storage unavailable
    initial = 'dark'
  }
  setTheme(initial)
})
</script>

<template>
  <button
    class="theme-toggle"
    :aria-pressed="theme === 'light'"
    :title="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggleTheme"
  >
    <span class="theme-toggle__icon" aria-hidden="true">{{ theme === 'dark' ? '☀️' : '🌙' }}</span>
    <span class="theme-toggle__label">{{ theme === 'dark' ? 'Light' : 'Dark' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-backdrop);
  color: var(--text-primary);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition:
    background var(--transition-normal),
    transform var(--transition-fast);
}

.theme-toggle:hover {
  transform: translateY(-1px);
}

.theme-toggle__icon {
  font-size: 1rem;
  line-height: 1;
}

.theme-toggle__label {
  font-size: var(--font-size-sm);
}
</style>
