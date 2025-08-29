<script setup lang="ts">
import PortfolioHero from '@/components/PortfolioHero.vue'
import PortfolioAbout from '@/components/PortfolioAbout.vue'
import PortfolioProjects from '@/components/PortfolioProjects.vue'
import PortfolioContact from '@/components/PortfolioContact.vue'
</script>

<template>
  <div class="landing">
    <PortfolioHero />
    <main>
      <PortfolioAbout />
      <PortfolioProjects />
      <PortfolioContact />
    </main>
  </div>
</template>

<style scoped>
.landing main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
