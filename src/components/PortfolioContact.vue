<script setup lang="ts">
import { personal } from '@/config/personal'

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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="contact-info">
              <h3>Email</h3>
              <a :href="`mailto:${email}`" class="contact-link">{{ email }}</a>
            </div>
          </div>

          <div class="contact-card phone-card">
            <div class="contact-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47145 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.472 14.382C17.367 14.382 16.78 14.382 16.38 14.382C15.98 14.382 15.58 14.282 15.28 14.082C14.98 13.882 14.78 13.582 14.68 13.282C14.58 12.982 14.58 12.682 14.68 12.382C14.78 12.082 14.98 11.882 15.28 11.782C15.58 11.682 15.88 11.682 16.18 11.782C16.48 11.882 16.78 12.082 16.98 12.382C17.08 12.682 17.08 12.982 16.98 13.282C16.88 13.582 16.68 13.882 16.38 14.082C16.28 14.182 16.08 14.282 15.88 14.332C15.68 14.382 15.472 14.382 15.272 14.382H15.272Z"
                  fill="currentColor"
                />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 13.89 2.525 15.66 3.44 17.17L2 22L6.83 20.56C8.34 21.475 10.11 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.33 20 8.72 19.53 7.34 18.67L7 18.47L4.55 19.15L5.23 16.7L5.03 16.36C4.17 14.98 3.7 13.37 3.7 11.7C3.7 7.32 7.32 3.7 11.7 3.7C16.08 3.7 19.7 7.32 19.7 11.7C19.7 16.08 16.08 19.7 11.7 19.7L12 20Z"
                  fill="currentColor"
                />
              </svg>
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                  fill="currentColor"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              v-if="socials.linkedin"
              :href="socials.linkedin"
              target="_blank"
              rel="noopener"
              class="social-link linkedin"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                  fill="currentColor"
                />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              v-if="socials.whatsapp"
              :href="socials.whatsapp"
              target="_blank"
              rel="noopener"
              class="social-link whatsapp"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.012 2C6.486 2 2.013 6.474 2.013 12C2.013 13.89 2.54 15.66 3.459 17.169L2.013 22L6.844 20.554C8.353 21.473 10.124 22 12.013 22C17.539 22 21.012 17.526 21.012 12C21.012 6.474 17.538 2 12.012 2ZM12.012 20.2C10.343 20.2 8.73 19.732 7.349 18.867L7.012 18.667L4.565 19.345L5.243 16.898L5.043 16.561C4.178 15.18 3.71 13.567 3.71 11.898C3.71 7.418 7.318 3.8 11.798 3.8C16.278 3.8 19.898 7.418 19.898 11.898C19.898 16.378 16.279 20.2 12.012 20.2Z"
                  fill="currentColor"
                />
                <path
                  d="M17.472 14.382C17.367 14.382 16.78 14.382 16.38 14.382C15.98 14.382 15.58 14.282 15.28 14.082C14.98 13.882 14.78 13.582 14.68 13.282C14.58 12.982 14.58 12.682 14.68 12.382C14.78 12.082 14.98 11.882 15.28 11.782C15.58 11.682 15.88 11.682 16.18 11.782C16.48 11.882 16.78 12.082 16.98 12.382C17.08 12.682 17.08 12.982 16.98 13.282C16.88 13.582 16.68 13.882 16.38 14.082C16.28 14.182 16.08 14.282 15.88 14.332C15.68 14.382 15.472 14.382 15.272 14.382H15.272Z"
                  fill="currentColor"
                />
              </svg>
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

<style scoped>
.contact-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-methods {
  display: grid;
  gap: 1.5rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  animation: fadeInLeft 0.8s ease-out;
}

.contact-card:nth-child(2) {
  animation-delay: 0.2s;
}

.contact-card:nth-child(3) {
  animation-delay: 0.4s;
}

.contact-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.email-card:hover .contact-icon {
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  transform: scale(1.1);
}

.phone-card:hover .contact-icon {
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
  transform: scale(1.1);
}

.whatsapp-card:hover .contact-icon {
  background: linear-gradient(135deg, #25d366, #128c7e);
  transform: scale(1.1);
}

.contact-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.contact-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.contact-link:hover {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.5);
}

.social-section {
  animation: fadeInRight 0.8s ease-out;
}

.social-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.social-link:hover {
  transform: translateX(5px);
  background: rgba(255, 255, 255, 0.2);
}

.social-link.github:hover {
  background: linear-gradient(135deg, #333, #24292e);
}

.social-link.linkedin:hover {
  background: linear-gradient(135deg, #0077b5, #005885);
}

.social-link.whatsapp:hover {
  background: linear-gradient(135deg, #25d366, #128c7e);
}

.cta-section {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.cta-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
  opacity: 0;
}

.cta-card:hover::before {
  animation: shimmer 1.5s ease-in-out;
}

.cta-card h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-card p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border: 2px solid transparent;
}

.cta-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
  z-index: -1;
}

.cta-btn:hover::before {
  left: 100%;
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes shimmer {
  0% {
    opacity: 0;
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-card {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .contact-info h3 {
    margin-bottom: 0.25rem;
  }

  .social-links {
    gap: 0.75rem;
  }

  .social-link {
    padding: 0.875rem 1.25rem;
    justify-content: center;
  }

  .cta-card {
    padding: 2rem 1.5rem;
  }

  .cta-card h3 {
    font-size: 1.75rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .contact-card {
    padding: 1.25rem;
  }

  .contact-icon {
    width: 50px;
    height: 50px;
  }

  .cta-card {
    padding: 1.5rem 1rem;
  }
}
</style>
