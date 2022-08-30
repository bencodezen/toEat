import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Restaurant, StatusResponse } from '../types'

export const useRestaurantStore = defineStore({
  id: 'RestaurantStore',
  state: () => ({
    list: useStorage('toeat-restaurant-list', [ {
      id: '9f995ce4-d2fc-4d00-af1d-6cb1647c6bd3',
      name: 'El Burrito Mercado',
      address: '175 Cesar Chavez St, St Paul, MN 55107',
      website: 'https://elburritomercado.com/',
      status: {
        level: 'Want to Try',
        priority: 0,
      },
    },
    {
      id: 'ae62a3da-791b-4f44-99a1-4be1b0ec30b8',
      name: 'El Cubano',
      address: '870 Dodd Rd, St Paul, MN 55118',
      website: 'http://elcubanorestaurante.com/',
      status: {
        level: 'Want to Try',
        priority: 0,
      },
    },
    {
      id: '9b361dae-2d44-4499-9940-97e188d41a32',
      name: "Brunson's Pub",
      address: '956 Payne Ave, St Paul, MN 55130',
      website: '',
      status: {
        level: 'Want to Try',
        priority: 0,
      },
    },] as Restaurant[])
  }),
  getters: {
    numberOfRestaurants: (state): number => state.list.length,
    getRestaurantById: (state) => {
      return (id: string | string[]): Restaurant | undefined => {
        if (typeof id === 'string') {
          return state.list.find((restaurant: Restaurant) => restaurant.id === id)
        }
      }
    }
  },
  actions: {
    addRestaurant(restaurant: Restaurant): void {
      this.list.push(restaurant);
    },
    deleteRestaurant(restaurant: Restaurant): void {
      this.list.splice(this.list.indexOf(restaurant), 1);
    },
    updateRestaurant(updatedRestaurant: Restaurant): StatusResponse {
      const index = this.list.findIndex(restaurant => restaurant.id === updatedRestaurant.id);
      const updatedItem = this.list.splice(index, 1, updatedRestaurant);

      if (updatedItem.length > 0) {
        return {
          status: 'success',
          message: 'Restaurant updated successfully.'
        }
      } else {
        return {
          status: 'error',
          message: 'Restaurant unable to be updated.'
        }
      }
    }
  }
})
