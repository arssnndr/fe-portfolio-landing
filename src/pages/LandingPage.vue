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
.landing {
  background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
  min-height: 100vh;
  position: relative;
}

.landing::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.04) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.landing main {
  position: relative;
  z-index: 1;
}
</style>
