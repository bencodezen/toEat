<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <RouterView />

  <footer class="footer">
    <div class="content has-text-centered">
      <p>Built with Vue and Bulma by <a href="https://www.bencodezen.io">Ben Hong</a>. <br />Source Code</p>
    </div>
  </footer>
</template>

<style></style>
