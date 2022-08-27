<script setup lang="ts">
import { ref } from 'vue'
import { useRestaurantStore } from '@/stores/RestaurantStore'
import type { Restaurant } from '@/types'

const restaurantStore = useRestaurantStore()

const newRestaurant = ref<Restaurant>({
  name: '',
  address: '',
  phone: '',
  website: '',
  hours: '',
  description: '',
  image: '',
  price: '',
  rating: '',
  tags: [],
  reviews: [],
  location: {
    lat: 0,
    lng: 0,
  },
})

const addRestaurant = () => {
  restaurantStore.addRestaurant(newRestaurant.value)
}
</script>

<template>
  <!-- Create a form that allows users to add a restaurant to a list. -->
  <form @submit.prevent="addRestaurant">
    <div>
      <label for="restaurant-name">Restaurant Name</label>
      <input id="restaurant-name" v-model="newRestaurant.name" type="text" />
    </div>
    <div>
      <label for="restaurant-status">Restaurant Status</label>
      <select name="restaurant-status" id="restaurant-status" v-model="newRestaurant.status">
        <option v-for="status in restaurantStatusList" :value="status" :key="status">
          {{ status }}
        </option>
      </select>
    </div>
    <button type="submit">Add Restaurant</button>
  </form>
</template>

<style></style>
