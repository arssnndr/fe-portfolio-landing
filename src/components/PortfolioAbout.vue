<script setup lang="ts">
import { personal } from '@/config/personal'

const { bio } = personal
</script>

<template>
  <section id="about" class="section">
    <h2>About</h2>
    <p>{{ bio }}</p>
  </section>
</template>

<style scoped>
.section {
  padding: 2rem 0;
}

h2 {
  margin-bottom: 0.5rem;
}
</style>
