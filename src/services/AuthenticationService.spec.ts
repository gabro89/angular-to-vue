import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { Router } from 'vue-router'
import AuthenticationService from './AuthenticationService'
import { LS_TOKEN_KEY, LS_TOKEN_VALUE } from '@/constants/storage'
import { STATUS_PATH } from '@/constants/routes'

const mockPush = vi.fn()
const mockRouter: Router = {
  push: mockPush
} as any

vi.mock('vue-router', () => ({
  useRouter: () => {
    return mockRouter
  }
}))

describe('AuthenticationService', () => {
  let service: AuthenticationService

  beforeEach(() => {
    service = new AuthenticationService(mockRouter)
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe(`'s isAuthenticated`, () => {
    describe('when token exists in local storage', () => {
      beforeEach(() => {
        localStorage.setItem(LS_TOKEN_KEY, '123')
      })

      it(`should return 'true'`, () => {
        expect(service.isAuthenticated()).toEqual(true)
      })
    })

    describe('when token does not exists in local storage', () => {
      it(`should return 'false'`, () => {
        expect(service.isAuthenticated()).toEqual(false)
      })
    })
  })

  describe(`'s login`, () => {
    beforeEach(() => {
      mockPush.mockClear()
      service.login()
    })

    it('should store the token in the local storage', () => {
      const token = localStorage.getItem(LS_TOKEN_KEY)
      expect(token).toBe(LS_TOKEN_VALUE)
    })

    it('should redirect to the status page', () => {
      expect(mockRouter.push).toHaveBeenCalledTimes(1)
      expect(mockRouter.push).toHaveBeenCalledWith(STATUS_PATH)
    })
  })
})
