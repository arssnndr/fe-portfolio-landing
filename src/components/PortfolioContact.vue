<script setup lang="ts">
import { personal } from '@/config/personal'

const { email, socials } = personal
</script>

<template>
  <section id="contact" class="section">
    <h2>Contact</h2>
    <p>
      If you'd like to work together, send an email to <a :href="`mailto:${email}`">{{ email }}</a
      >.
    </p>
    <div v-if="socials" class="social-links">
      <a v-if="socials.github" :href="socials.github" target="_blank" rel="noopener">GitHub</a>
      <a v-if="socials.linkedin" :href="socials.linkedin" target="_blank" rel="noopener"
        >LinkedIn</a
      >
      <a v-if="socials.twitter" :href="socials.twitter" target="_blank" rel="noopener">Twitter</a>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 2rem 0;
}

a {
  color: #0ea5a4;
}

.social-links {
  margin-top: 1rem;
}

.social-links a {
  margin-right: 1rem;
}
</style>
