import type { BaseState } from './BaseState.interface'
import type { ServiceItem } from './ServiceItem.interface'

export interface ServiceStatusEmptyState extends BaseState {
  readonly state: 'empty'
}

export interface ServiceStatusLoadingState extends BaseState {
  readonly state: 'loading'
}

export interface ServiceStatusFetchedState extends BaseState {
  readonly state: 'fetched'
  readonly services: readonly ServiceItem[]
}

export interface ServiceStatusErrorState extends BaseState {
  readonly state: 'error'
}

export type ServiceStatusState =
  | ServiceStatusEmptyState
  | ServiceStatusLoadingState
  | ServiceStatusFetchedState
  | ServiceStatusErrorState
