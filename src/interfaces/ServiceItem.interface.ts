import type { HealthStatus } from '@/types/HealthStatus.type'

export interface ServiceItem {
  readonly name: string
  readonly status: HealthStatus
}
