import type { restaurantStatusList } from "./constants"

export type RecommendStatus = typeof restaurantStatusList[number]

type Diet =
  | 'vegetarian'
  | 'vegan'
  | 'gluten-free'
  | 'pescatarian'
  | 'lactose-free'
  | 'other'

export interface Dish {
  name?: string
  diet?: Diet
  status?: RecommendStatus
}

export interface Restaurant {
  name?: string
  status?: RecommendStatus
  dishes?: Dish[]
}
