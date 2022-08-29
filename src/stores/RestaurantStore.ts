import { defineStore } from 'pinia'
import type { Restaurant } from '../types'

interface RestaurantStoreState {
  list: Restaurant[],
}

export const useRestaurantStore = defineStore({
  id: 'RestaurantStore',
  state: (): RestaurantStoreState => ({
    list: [  {
      name: 'El Burrito Mercado',
      address: '175 Cesar Chavez St, St Paul, MN 55107',
      website: 'https://elburritomercado.com/',
      status: {
        level: 'Want to Try',
        priority: 0,
      },
    },
    {
      name: 'El Cubano',
      address: '870 Dodd Rd, St Paul, MN 55118',
      website: 'http://elcubanorestaurante.com/',
      status: {
        level: 'Want to Try',
        priority: 0,
      },
    },
    {
      name: "Brunson's Pub",
      address: '956 Payne Ave, St Paul, MN 55130',
      website: '',
      status: {
        level: 'Want to Try',
        priority: 0,
      },
    },]
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
