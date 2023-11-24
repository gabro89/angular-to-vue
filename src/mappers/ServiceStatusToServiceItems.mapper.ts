import type { ServiceItem } from '@/interfaces/ServiceItem.interface'
import type { ServiceStatus } from '@/types/ServiceStatus.type'

export const mapServiceStatusToServiceItems = (services: any): readonly ServiceItem[] =>
  Object.entries<ServiceStatus>(services).map(
    ([name, service]: [string, ServiceStatus]): ServiceItem => ({
      name,
      status: service.healthStatus
    })
  )
