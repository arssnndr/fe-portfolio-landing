<script setup lang="ts">
import { personal } from '@/config/personal'

const { projects } = personal
</script>
<template>
  <section id="projects" class="section">
    <h2>Projects</h2>
    <div class="grid">
      <article v-for="p in projects" :key="p.id" class="card">
        <h3>{{ p.title }}</h3>
        <p>{{ p.desc }}</p>
        <a
          class="link"
          :href="p.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`View ${p.title} (opens in a new tab)`"
          >View</a
        >
      </article>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  padding: 1rem;
  border-radius: 0.5rem;
  background: #f8fafc;
}

.link {
  color: #075985;
  text-decoration: none;
  font-weight: 600;
}
</style>
