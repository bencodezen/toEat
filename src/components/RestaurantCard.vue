<script setup lang="ts">
import type { Restaurant } from '@/types'

interface Props {
  restaurant: Restaurant
}

defineProps<Props>()
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://via.placeholder.com/80x120" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          <a href="#"> {{ restaurant.name }} </a>
        </p>
        <p class="subtitle mb-2">
          <span class="tag is-info">Want to Try</span>
        </p>
        <div class="content is-small">
          {{ restaurant.address }}
          <br />
          <a href="#">Edit</a>.
          <a href="#">Delete</a>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
