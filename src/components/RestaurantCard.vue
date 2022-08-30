<script setup lang="ts">
import type { PropType } from 'vue'
import type { Restaurant } from '@/types'
import { useRestaurantStore } from '@/stores/RestaurantStore'

defineProps({
  restaurant: {
    type: Object as PropType<Restaurant>,
    required: true,
  },
})

const restaurantStore = useRestaurantStore()
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          <a href="#"> {{ restaurant.name }}</a>
        </p>
        <p class="subtitle mb-2">
          <span class="tag is-info">Want to Try</span>
        </p>
        <div class="content mb-2">
          {{ restaurant.address }}
        </div>
        <div>
          <router-link :to="`/restaurants/edit/${restaurant.id}`">Edit</router-link>.
          <button @click="restaurantStore.deleteRestaurant(restaurant)">Delete</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
