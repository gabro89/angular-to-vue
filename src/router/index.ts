import { LOGIN_PATH, STATUS_PATH } from '@/constants/routes'
import { createRouter, createWebHistory } from 'vue-router'

import PageNotFoundView from '@/views/PageNotFoundView.vue'
import { isAuthenticatedGuard } from '@/guards/IsAuthenticatedGuard'
import { isNotAuthenticatedGuard } from '@/guards/IsNotAuthenticatedGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: LOGIN_PATH,
      name: 'login',
      component: () => import('@/modules/login/Login.vue'),
      beforeEnter: isNotAuthenticatedGuard
    },
    {
      path: STATUS_PATH,
      name: 'status',
      component: () => import('@/modules/service-status/ServiceStatus.vue'),
      beforeEnter: isAuthenticatedGuard
    },
    {
      path: '/:pathMaths(.*)*',
      name: 'page-not-found',
      component: PageNotFoundView
    }
  ]
})

export default router
