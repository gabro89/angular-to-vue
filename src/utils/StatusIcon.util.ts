import type { HealthStatus } from '@/types/HealthStatus.type'

export const statusIcon = (healthStatus: HealthStatus): string =>
  healthStatus === 'UP' ? '✅' : '❌'
