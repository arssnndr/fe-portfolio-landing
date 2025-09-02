<script setup lang="ts">
import { personal } from '@/config/personal'
import { UserIcon, MonitorIcon, ToolsIcon, SunIcon, DatabaseIcon } from '@/assets/icons'
import '../styles/components/PortfolioAbout.css'

const { bio, skills, experience } = personal

// Icon mapping for skill categories
const skillIcons = {
  frontend: MonitorIcon,
  tools: ToolsIcon,
  design: SunIcon,
  backend: DatabaseIcon,
}
</script>

<template>
  <section id="about" class="portfolio-about">
    <div class="portfolio-about__container">
      <div class="portfolio-about__header">
        <h2 class="portfolio-about__title">About Me</h2>
        <div class="portfolio-about__title-decoration"></div>
      </div>

      <div class="portfolio-about__content">
        <div class="portfolio-about__bio-section">
          <div class="portfolio-about__bio-card">
            <div class="portfolio-about__bio-header">
              <div class="portfolio-about__profile-icon">
                <UserIcon />
              </div>
              <h3 class="portfolio-about__bio-title">My Story</h3>
            </div>
            <p class="portfolio-about__bio-text">{{ bio }}</p>
          </div>
        </div>

        <div class="portfolio-about__skills-section">
          <div class="portfolio-about__skills-card">
            <h3 class="portfolio-about__skills-title">Technical Skills</h3>
            <div class="portfolio-about__skills-grid">
              <div
                v-for="skill in skills"
                :key="skill.name"
                :class="`portfolio-about__skill-item portfolio-about__skill-item--${skill.category}`"
              >
                <div class="portfolio-about__skill-icon">
                  <component :is="skillIcons[skill.category]" />
                </div>
                <div class="portfolio-about__skill-info">
                  <h4 class="portfolio-about__skill-name">{{ skill.name }}</h4>
                  <p class="portfolio-about__skill-description">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="portfolio-about__stats-card">
            <h3 class="portfolio-about__stats-title">Experience</h3>
            <div class="portfolio-about__stats-grid">
              <div class="portfolio-about__stat-item">
                <div class="portfolio-about__stat-number">{{ experience.years }}</div>
                <div class="portfolio-about__stat-label">Years Experience</div>
              </div>
              <div class="portfolio-about__stat-item">
                <div class="portfolio-about__stat-number">{{ experience.projects }}</div>
                <div class="portfolio-about__stat-label">Projects Completed</div>
              </div>
              <div class="portfolio-about__stat-item">
                <div class="portfolio-about__stat-number">{{ experience.technologies }}</div>
                <div class="portfolio-about__stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
