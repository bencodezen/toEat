<script setup lang="ts">
import { useRestaurantStore } from '@/stores/RestaurantStore'

const restaurantStore = useRestaurantStore()
</script>

<template>
  <main>
    <ul>
      <li v-for="restaurant in restaurantStore.restaurantList" :key="restaurant.name">
        {{ restaurant.name }}
      </li>
    </ul>
  </main>
</template>
