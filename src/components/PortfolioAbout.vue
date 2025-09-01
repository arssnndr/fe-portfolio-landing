<script setup lang="ts">
import { personal } from '@/config/personal'
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 3H22L20 21L12 24L4 21L2 3Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 17L8 15L12 19L16 15L18 17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="skill-info">
                  <h4>Frontend</h4>
                  <p>Vue.js, Angular, TypeScript</p>
                </div>
              </div>

              <div class="skill-item tools">
                <div class="skill-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7 6.3C16.2 6.3 17.8 7.1 18.7 8.3C19.6 9.5 20 11.2 20 13V22H14V13C14 11.9 13.1 11 12 11C10.9 11 10 11.9 10 13V22H4V13C4 11.2 4.4 9.5 5.3 8.3C6.2 7.1 7.8 6.3 9.3 6.3H14.7Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L12 2L18 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="skill-info">
                  <h4>Tools</h4>
                  <p>Vite, Node.js, Git</p>
                </div>
              </div>

              <div class="skill-item design">
                <div class="skill-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 1V3"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 21V23"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.22 4.22L5.64 5.64"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.36 18.36L19.78 19.78"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 12H3"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 12H23"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.22 19.78L5.64 18.36"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.36 5.64L19.78 4.22"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="skill-info">
                  <h4>Design</h4>
                  <p>Responsive UI, UX</p>
                </div>
              </div>

              <div class="skill-item backend">
                <div class="skill-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="2.18"
                      ry="2.18"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="7"
                      y1="2"
                      x2="7"
                      y2="22"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="17"
                      y1="2"
                      x2="17"
                      y2="22"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="2"
                      y1="7"
                      x2="7"
                      y2="7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="2"
                      y1="17"
                      x2="7"
                      y2="17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="17"
                      y1="17"
                      x2="22"
                      y2="17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="17"
                      y1="7"
                      x2="22"
                      y2="7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
