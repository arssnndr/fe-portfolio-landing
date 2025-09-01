<script setup lang="ts">
import { personal } from '@/config/personal'
import '../styles/components/PortfolioHero.css'
import { ArrowUpRight, MessageCircle, UserIcon, ZapIcon, CodeIcon, ClockIcon } from '@/assets/icons'

const { name, role, tagline } = personal
</script>

<template>
  <header class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">{{ name }}</h1>
          <p class="hero-role">{{ role }}</p>
          <p class="hero-tagline">{{ tagline }}</p>
          <div class="hero-cta">
            <a href="#projects" class="cta-btn primary">
              <ArrowUpRight />
              View Projects
            </a>
            <a href="#contact" class="cta-btn secondary">
              <MessageCircle />
              Let's Talk
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card">
            <div class="card-content">
              <div class="profile-avatar">
                <div class="avatar-inner">
                  <UserIcon />
                </div>
              </div>
              <div class="tech-badges">
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Angular</span>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="floating-element element-1">
            <ZapIcon />
          </div>

          <div class="floating-element element-2">
            <CodeIcon />
          </div>

          <div class="floating-element element-3">
            <ClockIcon />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
