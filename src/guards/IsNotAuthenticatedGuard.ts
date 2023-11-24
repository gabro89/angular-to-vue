import { inject } from 'vue'

import AuthenticationService from '@/services/AuthenticationService'
import { STATUS_PATH } from '@/constants/routes'

export const isNotAuthenticatedGuard = () => {
  const authenticationService = inject<AuthenticationService>(AuthenticationService.SERVICE_NAME)

  authenticationService?.isAuthenticated()
    ? {
        path: STATUS_PATH
      }
    : true
}
