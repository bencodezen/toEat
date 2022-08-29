<script setup lang="ts">
import RestaurantCard from '@/components/RestaurantCard.vue'
import { useRestaurantStore } from '@/stores/RestaurantStore'

const restaurantStore = useRestaurantStore()
</script>

<template>
  <main class="section">
    <div class="columns">
      <!-- Side Menu -->
      <div class="column is-4-tablet is-3-desktop is-2-widescreen">
        <nav class="menu">
          <p class="menu-label">Menu</p>
          <ul class="menu-list">
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Dishes</a></li>
          </ul>
        </nav>
      </div>
      <div class="column">
        <h1 class="title">Restaurants</h1>
        <!-- CTA Bar -->
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5"><strong>6</strong> restaurants</p>
            </div>

            <p class="level-item">
              <a href="#" class="button is-success">New</a>
            </p>

            <div class="level-item is-hidden-tablet-only">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="Restaurant name" />
                </p>
                <p class="control">
                  <button class="button">Search</button>
                </p>
              </div>
            </div>
          </div>

          <div class="level-right">
            <div class="level-item">Order by</div>
            <div class="level-item">
              <div class="select">
                <select>
                  <option>Price</option>
                  <option>Location</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
        <!-- Display Results -->
        <div class="columns is-multiline">
          <div v-for="item in restaurantStore.list" class="column is-full" :key="`item-${item}`">
            <RestaurantCard :restaurant="item" />
          </div>
        </div>
        <!-- Pagination -->
        <nav class="pagination">
          <a class="pagination-previous" href="#">Previous</a>
          <a class="pagination-next" href="#">Next page</a>
          <ul class="pagination-list">
            <li><a href="#" class="pagination-link is-current">1</a></li>
            <li><a href="#" class="pagination-link">2</a></li>
            <li><a href="#" class="pagination-link">3</a></li>
            <li><a href="#" class="pagination-link">4</a></li>
            <li><a href="#" class="pagination-link">5</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a href="#" class="pagination-link">15</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>
