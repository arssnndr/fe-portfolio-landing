<script setup lang="ts">
import { personal } from '@/config/personal'
import { ZapIcon, ExternalLinkIcon, GitHubIcon, MessageCircle } from '@/assets/icons'
import '@/styles/components/PortfolioProjects.css'

const { projects } = personal
</script>
<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
          A showcase of my recent work and contributions to the web development community
        </p>
        <div class="title-decoration"></div>
      </div>

      <div class="projects-grid">
        <article
          v-for="(p, index) in projects"
          :key="p.id"
          class="project-card"
          :class="`card-${index + 1}`"
        >
          <div class="card-header">
            <div class="project-icon">
              <ZapIcon />
            </div>
            <div class="project-status">
              <span class="status-badge">Active</span>
            </div>
          </div>

          <div class="card-content">
            <h3 class="project-title">{{ p.title }}</h3>
            <p class="project-description">{{ p.desc }}</p>
          </div>

          <div class="card-footer">
            <div class="project-actions">
              <a
                v-if="p.demoUrl"
                :href="p.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="action-btn demo"
                :aria-label="`View ${p.title} demo (opens in a new tab)`"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
              <a
                v-if="p.githubUrl"
                :href="p.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="action-btn github"
                :aria-label="`View ${p.title} source code (opens in a new tab)`"
              >
                <GitHubIcon />
                Source Code
              </a>
            </div>

            <div class="project-tech">
              <span v-if="p.title.includes('Vue')" class="tech-tag vue">Vue.js</span>
              <span v-if="p.title.includes('Employee')" class="tech-tag angular">Angular</span>
              <span v-if="p.title.includes('API')" class="tech-tag express">Express.js</span>
              <span v-if="p.title.includes('Portfolio')" class="tech-tag vite">Vite</span>
              <span class="tech-tag typescript">TypeScript</span>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA Section -->
      <div class="projects-cta">
        <div class="cta-content">
          <h3>Interested in My Work?</h3>
          <p>Let's collaborate on your next project and bring your ideas to life!</p>
          <a href="#contact" class="cta-btn">
            <MessageCircle />
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
