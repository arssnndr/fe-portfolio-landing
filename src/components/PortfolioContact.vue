<script setup lang="ts">
import { personal } from '@/config/personal'
import { MailIcon, PhoneIcon, WhatsAppIcon, GitHubIcon, LinkedInIcon } from '@/assets/icons'
import '../styles/components/PortfolioContact.css'

const { email, phone, socials } = personal

// Function to format phone number for WhatsApp
const formatWhatsAppNumber = (phoneNumber: string) => {
  // Remove any non-digit characters and add country code if needed
  const cleaned = phoneNumber.replace(/\D/g, '')
  return cleaned.startsWith('62') ? cleaned : `62${cleaned.substring(1)}`
}

const whatsappUrl = `https://wa.me/${formatWhatsAppNumber(phone)}`
</script>

<template>
  <section id="contact" class="portfolio-contact">
    <div class="portfolio-contact__container">
      <div class="portfolio-contact__header">
        <h2 class="portfolio-contact__title">Let's Get In Touch</h2>
        <p class="portfolio-contact__subtitle">
          Ready to collaborate? I'd love to hear about your project and discuss how we can work
          together.
        </p>
      </div>

      <div class="portfolio-contact__grid">
        <!-- Contact Methods -->
        <div class="portfolio-contact__methods">
          <div class="portfolio-contact__card portfolio-contact__card--email">
            <div class="portfolio-contact__icon">
              <MailIcon />
            </div>
            <div class="portfolio-contact__info">
              <h3 class="portfolio-contact__method-title">Email</h3>
              <a :href="`mailto:${email}`" class="portfolio-contact__link">{{ email }}</a>
            </div>
          </div>

          <div class="portfolio-contact__card portfolio-contact__card--phone">
            <div class="portfolio-contact__icon">
              <PhoneIcon />
            </div>
            <div class="portfolio-contact__info">
              <h3 class="portfolio-contact__method-title">Phone</h3>
              <a :href="`tel:+62${phone.substring(1)}`" class="portfolio-contact__link"
                >+62 {{ phone.substring(1) }}</a
              >
            </div>
          </div>

          <div class="portfolio-contact__card portfolio-contact__card--whatsapp">
            <div class="portfolio-contact__icon">
              <WhatsAppIcon />
            </div>
            <div class="portfolio-contact__info">
              <h3 class="portfolio-contact__method-title">WhatsApp</h3>
              <a :href="whatsappUrl" target="_blank" rel="noopener" class="portfolio-contact__link">
                +62 {{ phone.substring(1) }}
              </a>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="portfolio-contact__social-section">
          <h3 class="portfolio-contact__social-title">Connect With Me</h3>
          <div class="portfolio-contact__social-links">
            <a
              v-if="socials.github"
              :href="socials.github"
              target="_blank"
              rel="noopener"
              class="portfolio-contact__social-link portfolio-contact__social-link--github"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>

            <a
              v-if="socials.linkedin"
              :href="socials.linkedin"
              target="_blank"
              rel="noopener"
              class="portfolio-contact__social-link portfolio-contact__social-link--linkedin"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>

            <a
              v-if="socials.whatsapp"
              :href="socials.whatsapp"
              target="_blank"
              rel="noopener"
              class="portfolio-contact__social-link portfolio-contact__social-link--whatsapp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="portfolio-contact__cta-section">
        <div class="portfolio-contact__cta-card">
          <h3 class="portfolio-contact__cta-title">Ready to Start Your Project?</h3>
          <p class="portfolio-contact__cta-description">
            Let's discuss your ideas and turn them into reality!
          </p>
          <div class="portfolio-contact__cta-buttons">
            <a
              :href="`mailto:${email}`"
              class="portfolio-contact__cta-btn portfolio-contact__cta-btn--primary"
              >Send Email</a
            >
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener"
              class="portfolio-contact__cta-btn portfolio-contact__cta-btn--secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
