import type { ServiceStatusItem } from './ServiceStatusItem.interface'

export interface ServerStatusResponse {
  readonly login: ServiceStatusItem
  readonly push: ServiceStatusItem
  readonly registration: ServiceStatusItem
  readonly testService: ServiceStatusItem
  readonly transfer: ServiceStatusItem
  readonly trx: ServiceStatusItem
}
