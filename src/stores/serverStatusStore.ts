import { defineStore } from 'pinia'
import { API_URL } from '../constants/api'
import type { ServiceStatusState } from '@/interfaces/ServiceStatusState.interface'
import { mapServiceStatusToServiceItems } from '@/mappers/ServiceStatusToServiceItems.mapper'

export const serverStatusStore = defineStore({
  id: 'status',
  state: (): ServiceStatusState => ({
    state: 'empty'
  }),
  actions: {
    async fetchStatuses() {
      this.$patch({
        state: 'loading'
      })
      try {
        const response = await fetch(API_URL)
        const responseBody = await response.json()

        this.$patch({
          state: 'fetched',
          services: mapServiceStatusToServiceItems(responseBody.services)
        })
      } catch (error) {
        this.$patch({
          state: 'error'
        })
      }
    }
  }
})
