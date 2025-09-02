<script setup lang="ts">
import { personal } from '@/config/personal'
import { UserIcon, MonitorIcon, ToolsIcon, SunIcon, DatabaseIcon } from '@/assets/icons'
import '../styles/components/PortfolioAbout.css'

const { bio } = personal
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
              <div class="portfolio-about__skill-item portfolio-about__skill-item--frontend">
                <div class="portfolio-about__skill-icon">
                  <MonitorIcon />
                </div>
                <div class="portfolio-about__skill-info">
                  <h4 class="portfolio-about__skill-name">Frontend</h4>
                  <p class="portfolio-about__skill-description">Vue.js, Angular, TypeScript</p>
                </div>
              </div>

              <div class="portfolio-about__skill-item portfolio-about__skill-item--tools">
                <div class="portfolio-about__skill-icon">
                  <ToolsIcon />
                </div>
                <div class="portfolio-about__skill-info">
                  <h4 class="portfolio-about__skill-name">Tools</h4>
                  <p class="portfolio-about__skill-description">Vite, Node.js, Git</p>
                </div>
              </div>

              <div class="portfolio-about__skill-item portfolio-about__skill-item--design">
                <div class="portfolio-about__skill-icon">
                  <SunIcon />
                </div>
                <div class="portfolio-about__skill-info">
                  <h4 class="portfolio-about__skill-name">Design</h4>
                  <p class="portfolio-about__skill-description">Responsive UI, UX</p>
                </div>
              </div>

              <div class="portfolio-about__skill-item portfolio-about__skill-item--backend">
                <div class="portfolio-about__skill-icon">
                  <DatabaseIcon />
                </div>
                <div class="portfolio-about__skill-info">
                  <h4 class="portfolio-about__skill-name">Backend</h4>
                  <p class="portfolio-about__skill-description">Express.js, REST API</p>
                </div>
              </div>
            </div>
          </div>

          <div class="portfolio-about__stats-card">
            <h3 class="portfolio-about__stats-title">Experience</h3>
            <div class="portfolio-about__stats-grid">
              <div class="portfolio-about__stat-item">
                <div class="portfolio-about__stat-number">3+</div>
                <div class="portfolio-about__stat-label">Years Experience</div>
              </div>
              <div class="portfolio-about__stat-item">
                <div class="portfolio-about__stat-number">10+</div>
                <div class="portfolio-about__stat-label">Projects Completed</div>
              </div>
              <div class="portfolio-about__stat-item">
                <div class="portfolio-about__stat-number">5+</div>
                <div class="portfolio-about__stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
