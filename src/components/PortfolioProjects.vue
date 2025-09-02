<script setup lang="ts">
import { personal } from '@/config/personal'
import { ZapIcon, ExternalLinkIcon, GitHubIcon, MessageCircle } from '@/assets/icons'
import '@/styles/components/PortfolioProjects.css'

const { projects, techMapping } = personal
</script>
<template>
  <section id="projects" class="portfolio-projects">
    <div class="portfolio-projects__container">
      <div class="portfolio-projects__header">
        <h2 class="portfolio-projects__title">Featured Projects</h2>
        <p class="portfolio-projects__subtitle">
          A showcase of my recent work and contributions to the web development community
        </p>
        <div class="portfolio-projects__title-decoration"></div>
      </div>

      <div class="portfolio-projects__grid">
        <article
          v-for="(p, index) in projects"
          :key="p.id"
          class="portfolio-projects__card"
          :class="`portfolio-projects__card--${index + 1}`"
        >
          <div class="portfolio-projects__card-header">
            <div class="portfolio-projects__project-icon">
              <ZapIcon />
            </div>
            <div class="portfolio-projects__project-status">
              <span class="portfolio-projects__status-badge">Active</span>
            </div>
          </div>

          <div class="portfolio-projects__card-content">
            <h3 class="portfolio-projects__project-title">{{ p.title }}</h3>
            <p class="portfolio-projects__project-description">{{ p.desc }}</p>
          </div>

          <div class="portfolio-projects__card-footer">
            <div class="portfolio-projects__project-actions">
              <a
                v-if="p.demoUrl"
                :href="p.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="portfolio-projects__action-btn portfolio-projects__action-btn--demo"
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
                class="portfolio-projects__action-btn portfolio-projects__action-btn--github"
                :aria-label="`View ${p.title} source code (opens in a new tab)`"
              >
                <GitHubIcon />
                Source Code
              </a>
            </div>

            <div class="portfolio-projects__tech-list">
              <span
                v-for="tech in p.tech"
                :key="tech"
                :class="`portfolio-projects__tech-tag portfolio-projects__tech-tag--${techMapping[tech] || 'default'}`"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA Section -->
      <div class="portfolio-projects__cta">
        <div class="portfolio-projects__cta-content">
          <h3 class="portfolio-projects__cta-title">Interested in My Work?</h3>
          <p class="portfolio-projects__cta-description">
            Let's collaborate on your next project and bring your ideas to life!
          </p>
          <a href="#contact" class="portfolio-projects__cta-btn">
            <MessageCircle />
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
