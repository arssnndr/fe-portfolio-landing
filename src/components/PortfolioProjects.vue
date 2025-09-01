<script setup lang="ts">
import { personal } from '@/config/personal'
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 3H21V9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27 6.52 3.92 7.75 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 18C4.49 20 4 16 2 16"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
