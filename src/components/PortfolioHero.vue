<script setup lang="ts">
import { personal } from '@/config/personal'
import '../styles/components/PortfolioHero.css'
import { ArrowUpRight, MessageCircle, UserIcon, ZapIcon, CodeIcon, ClockIcon } from '@/assets/icons'

const { name, role, tagline } = personal
</script>

<template>
  <header class="portfolio-hero">
    <div class="portfolio-hero__container">
      <div class="portfolio-hero__content">
        <div class="portfolio-hero__text">
          <h1 class="portfolio-hero__title">{{ name }}</h1>
          <p class="portfolio-hero__role">{{ role }}</p>
          <p class="portfolio-hero__tagline">{{ tagline }}</p>
          <div class="portfolio-hero__cta">
            <a href="#about" class="portfolio-hero__cta-btn portfolio-hero__cta-btn--secondary">
              <UserIcon />
              About Me
            </a>
            <a href="#projects" class="portfolio-hero__cta-btn portfolio-hero__cta-btn--primary">
              <ArrowUpRight />
              View Projects
            </a>
            <a href="#contact" class="portfolio-hero__cta-btn portfolio-hero__cta-btn--secondary">
              <MessageCircle />
              Let's Talk
            </a>
          </div>
        </div>
        <div class="portfolio-hero__visual">
          <div class="portfolio-hero__floating-card">
            <div class="portfolio-hero__card-content">
              <div class="portfolio-hero__profile-avatar">
                <div class="portfolio-hero__avatar-inner">
                  <UserIcon />
                </div>
              </div>
              <div class="portfolio-hero__tech-badges">
                <span class="portfolio-hero__tech-badge">Vue.js</span>
                <span class="portfolio-hero__tech-badge">TypeScript</span>
                <span class="portfolio-hero__tech-badge">Angular</span>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="portfolio-hero__floating-element portfolio-hero__floating-element--1">
            <ZapIcon />
          </div>

          <div class="portfolio-hero__floating-element portfolio-hero__floating-element--2">
            <CodeIcon />
          </div>

          <div class="portfolio-hero__floating-element portfolio-hero__floating-element--3">
            <ClockIcon />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
