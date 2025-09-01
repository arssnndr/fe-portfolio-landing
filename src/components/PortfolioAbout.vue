<script setup lang="ts">
import { personal } from '@/config/personal'
import { UserIcon, MonitorIcon, ToolsIcon, SunIcon, DatabaseIcon } from '@/assets/icons'
import '../styles/components/PortfolioAbout.css'

const { bio } = personal
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <div class="title-decoration"></div>
      </div>

      <div class="about-content">
        <div class="about-text">
          <div class="bio-card">
            <div class="card-header">
              <div class="profile-icon">
                <UserIcon />
              </div>
              <h3>My Story</h3>
            </div>
            <p class="bio-text">{{ bio }}</p>
          </div>
        </div>

        <div class="skills-showcase">
          <div class="skills-card">
            <h3>Technical Skills</h3>
            <div class="skills-grid">
              <div class="skill-item frontend">
                <div class="skill-icon">
                  <MonitorIcon />
                </div>
                <div class="skill-info">
                  <h4>Frontend</h4>
                  <p>Vue.js, Angular, TypeScript</p>
                </div>
              </div>

              <div class="skill-item tools">
                <div class="skill-icon">
                  <ToolsIcon />
                </div>
                <div class="skill-info">
                  <h4>Tools</h4>
                  <p>Vite, Node.js, Git</p>
                </div>
              </div>

              <div class="skill-item design">
                <div class="skill-icon">
                  <SunIcon />
                </div>
                <div class="skill-info">
                  <h4>Design</h4>
                  <p>Responsive UI, UX</p>
                </div>
              </div>

              <div class="skill-item backend">
                <div class="skill-icon">
                  <DatabaseIcon />
                </div>
                <div class="skill-info">
                  <h4>Backend</h4>
                  <p>Express.js, REST API</p>
                </div>
              </div>
            </div>
          </div>

          <div class="stats-card">
            <h3>Experience</h3>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">3+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">10+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5+</div>
                <div class="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
