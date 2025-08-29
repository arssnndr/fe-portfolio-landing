<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <section class="section not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you’re looking for doesn’t exist.</p>
    <button class="btn" @click="goHome">Go to Home</button>
  </section>
</template>

<style scoped>
.not-found { text-align: center; padding: 4rem 1rem }
.btn { background: #06b6d4; color: #042024; padding: .6rem 1rem; border-radius: .5rem; border: none; cursor: pointer }
</style>
