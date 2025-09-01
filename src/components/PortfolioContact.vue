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
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Let's Get In Touch</h2>
        <p class="section-subtitle">
          Ready to collaborate? I'd love to hear about your project and discuss how we can work
          together.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Contact Methods -->
        <div class="contact-methods">
          <div class="contact-card email-card">
            <div class="contact-icon">
              <MailIcon />
            </div>
            <div class="contact-info">
              <h3>Email</h3>
              <a :href="`mailto:${email}`" class="contact-link">{{ email }}</a>
            </div>
          </div>

          <div class="contact-card phone-card">
            <div class="contact-icon">
              <PhoneIcon />
            </div>
            <div class="contact-info">
              <h3>Phone</h3>
              <a :href="`tel:+62${phone.substring(1)}`" class="contact-link"
                >+62 {{ phone.substring(1) }}</a
              >
            </div>
          </div>

          <div class="contact-card whatsapp-card">
            <div class="contact-icon">
              <WhatsAppIcon />
            </div>
            <div class="contact-info">
              <h3>WhatsApp</h3>
              <a :href="whatsappUrl" target="_blank" rel="noopener" class="contact-link">
                +62 {{ phone.substring(1) }}
              </a>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="social-section">
          <h3 class="social-title">Connect With Me</h3>
          <div class="social-links">
            <a
              v-if="socials.github"
              :href="socials.github"
              target="_blank"
              rel="noopener"
              class="social-link github"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>

            <a
              v-if="socials.linkedin"
              :href="socials.linkedin"
              target="_blank"
              rel="noopener"
              class="social-link linkedin"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>

            <a
              v-if="socials.whatsapp"
              :href="socials.whatsapp"
              target="_blank"
              rel="noopener"
              class="social-link whatsapp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <div class="cta-card">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss your ideas and turn them into reality!</p>
          <div class="cta-buttons">
            <a :href="`mailto:${email}`" class="cta-btn primary">Send Email</a>
            <a :href="whatsappUrl" target="_blank" rel="noopener" class="cta-btn secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
