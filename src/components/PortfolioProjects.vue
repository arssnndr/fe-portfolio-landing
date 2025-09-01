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
        <div class="actions">
          <a
            v-if="p.demoUrl"
            class="link demo"
            :href="p.demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`View ${p.title} demo (opens in a new tab)`"
            >🚀 Live Demo</a
          >
          <a
            v-if="p.githubUrl"
            class="link github"
            :href="p.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`View ${p.title} source code (opens in a new tab)`"
            >📂 Source Code</a
          >
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card h3 {
  margin: 0 0 0.75rem 0;
  color: #1e293b;
  font-size: 1.25rem;
}

.card p {
  margin: 0 0 1.25rem 0;
  color: #64748b;
  line-height: 1.5;
}

.actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  border: 1px solid;
}

.link.demo {
  background: #0ea5e9;
  color: white;
  border-color: #0ea5e9;
}

.link.demo:hover {
  background: #0284c7;
  border-color: #0284c7;
}

.link.github {
  background: #374151;
  color: white;
  border-color: #374151;
}

.link.github:hover {
  background: #1f2937;
  border-color: #1f2937;
}
</style>
