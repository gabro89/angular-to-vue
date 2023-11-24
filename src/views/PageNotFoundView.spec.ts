import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import PageNotFoundPage from './PageNotFoundView.vue'

describe('PageNotFoundPage View', () => {
  it(`should display a '404' error code`, () => {
    const pageNotFoundPageWrapper = mount(PageNotFoundPage)

    expect(pageNotFoundPageWrapper.find('h2').text()).toContain('404')
  })
})
