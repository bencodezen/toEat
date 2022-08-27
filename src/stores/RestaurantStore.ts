import { defineStore } from 'pinia'
import type { Restaurant } from '../types'

interface RestaurantStoreState {
  restaurantList: Restaurant[],
}

export const useRestaurantStore = defineStore({
  id: 'RestaurantStore',
  state: (): RestaurantStoreState => ({
    restaurantList: []
  }),
  getters: {
    numberOfRestaurants: (state): number => state.restaurantList.length
  },
  actions: {
    addRestaurant(newRestaurant: Restaurant): void {
      this.restaurantList.push(newRestaurant);
    }
  }
})
