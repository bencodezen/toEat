<script setup lang="ts">
import { ref } from 'vue'
import type { Restaurant } from '@/types'
import SideMenu from '../components/SideMenu.vue'
import { useRestaurantStore } from '@/stores/RestaurantStore'

const restaurantStore = useRestaurantStore()

const newRestaurant = ref<Restaurant>({
  name: '',
  address: '',
  website: '',
  status: {
    level: 'Want to Try',
    priority: 0,
  },
})
</script>

<template>
  <main class="section">
    <div class="columns">
      <SideMenu />
      <div class="column">
        <nav class="breadcrumb">
          <ul>
            <li><router-link to="/restaurants">Restaurants</router-link></li>
            <li class="is-active"><a href="#">New Restaurant</a></li>
          </ul>
        </nav>
        <form @submit.prevent>
          <div class="field">
            <div class="field">
              <label for="name" class="label">Name</label>
              <div class="control">
                <input
                  type="text"
                  class="input is-large"
                  placeholder="Sugarcane Lane"
                  required
                  v-model="newRestaurant.name"
                />
              </div>
            </div>
            <div class="field">
              <label for="address" class="label">Address</label>
              <div class="control">
                <input type="text" class="input" placeholder="1234 Sugarcane Lane" v-model="newRestaurant.address" />
              </div>
            </div>
            <div class="field mb-5">
              <label for="website" class="label">Website</label>
              <div class="control">
                <input type="text" class="input" placeholder="www.sugarcane-lane.com" v-model="newRestaurant.website" />
              </div>
            </div>
            <div class="field">
              <div class="buttons">
                <button class="button is-success" @click="restaurantStore.addRestaurant(newRestaurant)">Create</button>
                <button class="button is-light">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style></style>
