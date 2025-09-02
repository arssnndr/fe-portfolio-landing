<script setup lang="ts">
import PortfolioHero from '@/components/PortfolioHero.vue'
import PortfolioAbout from '@/components/PortfolioAbout.vue'
import PortfolioProjects from '@/components/PortfolioProjects.vue'
import PortfolioContact from '@/components/PortfolioContact.vue'
import '@/styles/pages/LandingPage.css'
</script>

<template>
  <div class="landing-page">
    <PortfolioHero />
    <main class="landing-page__main">
      <PortfolioAbout />
      <PortfolioProjects />
      <PortfolioContact />
    </main>
  </div>
</template>
