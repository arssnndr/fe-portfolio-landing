# 🚀 Portfolio Landing Page

A modern, responsive portfolio website built with Vue 3, TypeScript, and Vite. Features a clean design, centralized configuration, and automated deployment with Vercel microfrontends architecture.

## ✨ Features

- **Modern Tech Stack**: Vue 3 with Composition API, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with clean, professional styling
- **Centralized Configuration**: Easy-to-update personal information in one place
- **Microfrontends Architecture**: Seamless integration with other applications
- **Automated Code Quality**: Pre-commit hooks with Prettier and ESLint
- **Comprehensive Testing**: Unit tests with Vitest and E2E tests with Cypress
- **Type Safety**: Full TypeScript support with strict type checking

## 🏗️ Architecture

### Components Structure

```
src/
├── components/
│   ├── PortfolioHero.vue      # Hero section with intro
│   ├── PortfolioAbout.vue     # About section
│   ├── PortfolioProjects.vue  # Projects showcase
│   └── PortfolioContact.vue   # Contact information
├── pages/
│   ├── LandingPage.vue        # Main portfolio page
│   └── NotFound.vue           # 404 error page
├── config/
│   └── personal.ts            # Centralized personal data
└── router/
    └── index.ts               # Vue Router configuration
```

### Key Dependencies

- **Vue 3.5.18** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite 7.0.6** - Fast build tool and dev server
- **Vue Router 4** - Official router for Vue.js
- **Pinia** - State management library
- **Vercel Microfrontends** - Multi-app deployment

## 🛠️ Development Tools

- **ESLint** - Code linting with Vue and TypeScript support
- **Prettier** - Code formatting
- **Husky** - Git hooks management
- **lint-staged** - Run scripts on staged files
- **Vitest** - Unit testing framework
- **Cypress** - End-to-end testing

## 📋 Prerequisites

- Node.js `^20.19.0 || >=22.12.0`
- npm or yarn package manager

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fe-portfolio-landing

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot-reload
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

### Configuration

Update your personal information in `src/config/personal.ts`:

```typescript
export const personal: PersonalConfig = {
  name: 'Your Name',
  role: 'Your Role',
  tagline: 'Your tagline',
  bio: 'Your bio description...',
  email: 'your.email@example.com',
  projects: [
    {
      id: 1,
      title: 'Project Title',
      desc: 'Project description',
      link: 'https://project-url.com',
    },
  ],
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
}
```

## 📦 Available Scripts

### Core Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality

```bash
npm run format       # Format code with Prettier
npm run lint         # Lint and fix code with ESLint
npm run type-check   # Type checking with vue-tsc
```

### Testing

```bash
npm run test:unit           # Run unit tests with Vitest
npm run test:e2e           # Run E2E tests (production build)
npm run test:e2e:dev       # Run E2E tests (development server)
```

## 🔧 Development Workflow

### Automatic Code Formatting

This project includes automatic code formatting on commit using Husky and lint-staged:

- **Pre-commit Hook**: Automatically formats staged files with Prettier and fixes ESLint issues
- **Supported Files**: `.js`, `.ts`, `.vue`, `.css`, `.scss`, `.html`, `.md`
- **Backup**: Original state is backed up to git stash before formatting

### Git Workflow

```bash
git add .
git commit -m "your message"  # Automatic formatting runs here
git push
```

## 🌐 Deployment

### Vercel Microfrontends

This project is configured for Vercel deployment with microfrontends architecture:

- **Main App**: Portfolio landing page (default)
- **Integration**: Seamless integration with other applications
- **Configuration**: `microfrontends.json` for routing setup

### Build & Deploy

```bash
npm run build        # Build for production
# Deploy to your preferred platform
```

## 🧪 Testing Strategy

### Unit Tests

- **Framework**: Vitest with Vue Test Utils
- **Coverage**: Component rendering and functionality
- **Location**: `src/__tests__/`

### E2E Tests

- **Framework**: Cypress
- **Coverage**: User workflows and navigation
- **Location**: `cypress/e2e/`

## 🎨 Styling

- **Approach**: Vanilla CSS with CSS custom properties
- **Methodology**: Component-scoped styles with global utilities
- **Responsive**: Mobile-first responsive design
- **Theme**: CSS variables for consistent theming

## 📁 Project Structure

```
fe-portfolio-landing/
├── .husky/                 # Git hooks
├── cypress/               # E2E tests
├── dist/                  # Production build
├── public/               # Static assets
├── src/
│   ├── __tests__/        # Unit tests
│   ├── components/       # Vue components
│   ├── config/          # Configuration files
│   ├── pages/           # Page components
│   ├── router/          # Router configuration
│   ├── stores/          # Pinia stores
│   ├── styles/          # Global styles
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry
├── microfrontends.json   # Microfrontends config
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── vitest.config.ts     # Vitest configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes (formatting happens automatically on commit)
4. Run tests: `npm run test:unit`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👤 Author

**Aris Sunandar**

- GitHub: [@arssnndr](https://github.com/arssnndr)
- LinkedIn: [Aris Sunandar](https://www.linkedin.com/in/arssnndr/)
- Email: arissunandar399@gmail.com

---

Built with ❤️ using Vue 3, TypeScript, and modern web technologies.
