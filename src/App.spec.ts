import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import App from './App.vue'
import { APP_TITLE } from './constants/title'

describe('App', () => {
  it('should display the app title', () => {
    const appWrapper = shallowMount(App)

    expect(appWrapper.find('h1').text()).toContain(APP_TITLE)
  })
})
