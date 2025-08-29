<script setup lang="ts">
import { personal } from '@/config/personal'

const { name, role, tagline } = personal
</script>

<template>
  <header class="hero">
    <div class="hero-inner">
      <h1>{{ name }}</h1>
      <p class="lead">{{ tagline }}</p>
      <p class="role">{{ role }}</p>
      <div class="hero-cta">
        <a href="#projects" class="btn">See projects</a>
        <a href="#contact" class="btn btn-outline">Contact me</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: white;
  padding: 6rem 1rem;
  text-align: center;
}

.hero-inner h1 {
  font-size: 2.25rem;
  margin: 0 0 .5rem
}

.lead {
  opacity: .9
}

.hero-cta {
  margin-top: 1.25rem
}

.btn {
  background: #06b6d4;
  color: #042024;
  padding: .6rem 1rem;
  border-radius: .5rem;
  text-decoration: none;
  margin: 0 .25rem
}

.btn-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, .15);
  color: white
}

@media(min-width:768px) {
  .hero-inner h1 {
    font-size: 3rem
  }
}
</style>
