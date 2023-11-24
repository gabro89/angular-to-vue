import { STATUS_PATH } from '@/constants/routes'
import { LS_TOKEN_KEY, LS_TOKEN_VALUE } from '@/constants/storage'
import type { Router } from 'vue-router'

export default class AuthenticationService {
  static readonly SERVICE_NAME = 'AuthenticationService'

  constructor(private readonly router: Router) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem(LS_TOKEN_KEY)
    return token !== null
  }

  login(): void {
    localStorage.setItem(LS_TOKEN_KEY, LS_TOKEN_VALUE)
    this.router.push(STATUS_PATH)
  }
}
