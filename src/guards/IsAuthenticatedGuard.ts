import { inject } from 'vue'

import AuthenticationService from '@/services/AuthenticationService'
import { LOGIN_PATH } from '@/constants/routes'

export const isAuthenticatedGuard = () => {
  const authenticationService = inject<AuthenticationService>(AuthenticationService.SERVICE_NAME)

  authenticationService?.isAuthenticated()
    ? true
    : {
        path: LOGIN_PATH
      }
}
