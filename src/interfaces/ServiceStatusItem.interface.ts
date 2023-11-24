import type { HealthStatus } from '@/types/HealthStatus.type'

export interface ServiceStatusItem {
  readonly updatedAt: string
  readonly healthStatus: HealthStatus
}
