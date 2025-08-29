import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import App from '../App.vue'
import router from '@/router'
import { personal } from '@/config/personal'

describe('App', () => {
  it('renders home route', async () => {
    const wrapper = mount(App, { global: { plugins: [router] } })
    await router.isReady()
    expect(wrapper.text()).toContain(personal.name)
  })

  it('renders 404 page for unknown route', async () => {
    const wrapper = mount(App, { global: { plugins: [router] } })
    await router.isReady()
    await router.push('/this-route-does-not-exist')
    await nextTick()
    expect(wrapper.text()).toContain('404')
  })
})
