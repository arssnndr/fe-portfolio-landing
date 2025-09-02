<script setup lang="ts">
import { useRouter } from 'vue-router'
import '@/styles/pages/NotFound.css'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <section class="not-found">
    <div class="not-found__container">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__description">
        Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you
        entered the wrong URL.
      </p>
      <button class="not-found__btn" @click="goHome">Go to Home</button>
    </div>
  </section>
</template>
