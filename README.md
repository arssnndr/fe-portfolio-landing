# 🚀 Portfolio Landing Page

A modern, responsive portfolio website built with Vue 3, TypeScript, and Vite. Features a clean design, dynamic content configuration, and automated deployment with Vercel microfrontends architecture.

## ✨ Features

- **Modern Tech Stack**: Vue 3 with Composition API, TypeScript, and Vite
- **Dynamic Content Management**: Centralized configuration with automatic data synchronization
- **Modular CSS Architecture**: Separated component styles with organized structure
- **Responsive Design**: Mobile-first approach with clean, professional styling
- **Smart Tech Badge System**: Auto-generated tech badges from project data
- **Dynamic Skills Grid**: Skills and experience data driven from personal config
- **Microfrontends Architecture**: Seamless integration with other applications
- **Automated Code Quality**: Pre-commit hooks with Prettier and ESLint
- **Comprehensive Testing**: Unit tests with Vitest and E2E tests with Cypress
- **Type Safety**: Full TypeScript support with strict type checking

## 🏗️ Architecture

### Dynamic Content System

This portfolio features a sophisticated dynamic content management system that automatically synchronizes data across all components:

- **Tech Badges**: Auto-generated from project technologies using computed properties
- **Skills Grid**: Dynamic rendering based on skill categories with icon mapping
- **Experience Stats**: Live data from centralized configuration
- **Project Showcase**: Automatically updated project cards with tech tags

### Components Structure

```
src/
├── components/
│   ├── PortfolioHero.vue      # Hero section with dynamic tech badges
│   ├── PortfolioAbout.vue     # About section with dynamic skills & stats
│   ├── PortfolioProjects.vue  # Projects showcase with dynamic content
│   └── PortfolioContact.vue   # Contact information with social links
├── pages/
│   ├── LandingPage.vue        # Main portfolio page layout
│   └── NotFound.vue           # 404 error page
├── assets/icons/              # SVG icon components
├── styles/
│   ├── main.css               # Main stylesheet entry point
│   ├── variables.css          # CSS custom properties
│   ├── animations.css         # Reusable animations
│   └── components/            # Component-specific styles
├── config/
│   └── personal.ts            # Centralized data configuration
└── router/
    └── index.ts               # Vue Router configuration
```

### Key Dependencies

- **Vue 3.5.18** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript with strict type checking
- **Vite 7.0.6** - Fast build tool and dev server with HMR
- **Vue Router 4.5.1** - Official router for Vue.js applications
- **Pinia 3.0.3** - State management library for Vue
- **Vercel Microfrontends 2.0.0** - Multi-app deployment architecture

## 🎯 Dynamic Content Features

### Smart Tech Badge System
- **Auto-Generation**: Tech badges in hero section automatically populate from project technologies
- **Unique Filtering**: Displays only unique technologies across all projects
- **Real-time Updates**: When projects are added/updated, badges automatically refresh

### Dynamic Skills & Experience
- **Modular Skills**: Skills grid with category-based icon mapping (frontend, tools, design, backend)
- **Live Stats**: Experience numbers dynamically pulled from configuration
- **Scalable Structure**: Easy to add new skill categories or update experience data

### Project Management
- **Centralized Data**: All project information stored in `personal.ts` configuration
- **Tech Mapping**: Automatic tech tag styling based on technology type
- **Flexible Structure**: Support for demo URLs, GitHub links, and rich descriptions

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

The portfolio uses a sophisticated configuration system in `src/config/personal.ts` with TypeScript interfaces for type safety:

```typescript
// Core interfaces for type safety
interface Project {
  id: number
  title: string
  desc: string
  demoUrl?: string
  githubUrl?: string
  tech: string[]  // Powers the dynamic tech badges
}

interface Skill {
  name: string
  description: string
  category: 'frontend' | 'tools' | 'design' | 'backend'
}

interface Experience {
  years: string
  projects: string
  technologies: string
}

// Configuration example
export const personal: PersonalConfig = {
  name: 'Your Name',
  role: 'Your Role',
  tagline: 'Your professional tagline',
  bio: 'Your detailed bio description...',
  email: 'your.email@example.com',
  phone: '1234567890',
  
  // Dynamic skills grid
  skills: [
    {
      name: 'Frontend',
      description: 'Vue.js, Angular, TypeScript',
      category: 'frontend'
    },
    // ... more skills
  ],
  
  // Dynamic experience stats
  experience: {
    years: '3+',
    projects: '10+',
    technologies: '5+'
  },
  
  // Projects drive tech badges and project showcase
  projects: [
    {
      id: 1,
      title: 'Project Title',
      desc: 'Project description',
      demoUrl: 'https://project-demo.com',
      githubUrl: 'https://github.com/user/repo',
      tech: ['Vue.js', 'TypeScript', 'Vite']  // Auto-generates tech badges
    },
  ],
  
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    whatsapp: 'https://wa.me/yourphone'
  },
  
  // Tech mapping for styling
  techMapping: {
    'Vue.js': 'vue',
    'Angular': 'angular',
    'TypeScript': 'typescript',
    // ... more mappings
  }
}
```

**Key Benefits:**
- **Single Source of Truth**: All content managed in one place
- **Type Safety**: TypeScript interfaces prevent configuration errors
- **Auto-Sync**: Changes automatically reflect across all components
- **Scalable**: Easy to add new projects, skills, or experience data

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
- **Coverage**: Component rendering, dynamic content, and functionality
- **Location**: `src/__tests__/`
- **Focus**: Testing dynamic data binding and computed properties

### E2E Tests
- **Framework**: Cypress with modern testing practices
- **Coverage**: User workflows, navigation, and dynamic content display
- **Location**: `cypress/e2e/`
- **Scenarios**: Hero interactions, project filtering, contact form validation

## 🎨 Styling Architecture

- **Approach**: Modular CSS with BEM methodology and component separation
- **Structure**: Organized CSS files for optimal maintainability
- **Methodology**: External CSS imports with CSS custom properties
- **Responsive**: Mobile-first responsive design with breakpoints
- **Theme**: CSS variables for consistent theming across components
- **Animations**: Reusable keyframes and smooth transitions
- **Performance**: Optimized CSS loading and bundle splitting

### CSS Organization

```
src/styles/
├── main.css              # Main entry point importing all styles
├── variables.css         # CSS custom properties (colors, spacing, etc.)
├── animations.css        # Reusable animations and keyframes  
├── global.css           # Global styles and resets
├── index.css            # Style imports orchestration
└── components/          # Component-specific styles (BEM methodology)
    ├── PortfolioHero.css     # Hero section with floating elements
    ├── PortfolioAbout.css    # About section with skills grid
    ├── PortfolioProjects.css # Projects with tech tag styling
    └── PortfolioContact.css  # Contact section with social links
```

**Advanced Features:**
- **Dynamic Classes**: Component-driven class binding for skills and tech tags
- **Responsive Grids**: CSS Grid layouts that adapt to content
- **Glassmorphism Effects**: Modern backdrop-filter and transparency effects
- **Smooth Animations**: Staggered fade-ins and floating elements
- **Icon Integration**: SVG component icons with consistent styling

**Benefits of this architecture:**

- **Maintainability**: Easy to find and update component-specific styles
- **Reusability**: Shared variables and animations across components  
- **Organization**: Clean separation between component logic and styling
- **Performance**: Better CSS bundle optimization and loading strategies
- **Scalability**: Simple to add new components or modify existing styles
- **Consistency**: Unified design system through CSS custom properties

## 📁 Project Structure

```
fe-portfolio-landing/
├── .husky/                    # Git hooks for code quality
├── cypress/                   # E2E test configurations and specs
│   ├── e2e/                  # End-to-end test cases
│   ├── fixtures/             # Test data fixtures
│   └── support/              # Cypress support files
├── dist/                      # Production build output
├── public/                    # Static assets (favicon, etc.)
├── src/
│   ├── __tests__/            # Unit tests (Vitest)
│   ├── assets/icons/         # SVG icon components
│   ├── components/           # Vue components
│   │   ├── PortfolioHero.vue     # Dynamic hero with tech badges
│   │   ├── PortfolioAbout.vue    # Skills and experience section
│   │   ├── PortfolioProjects.vue # Project showcase
│   │   └── PortfolioContact.vue  # Contact information
│   ├── composables/          # Reusable composition functions
│   ├── config/               # Configuration files
│   │   └── personal.ts           # Centralized data configuration
│   ├── pages/                # Page components
│   │   ├── LandingPage.vue       # Main portfolio layout
│   │   └── NotFound.vue          # 404 error page
│   ├── router/               # Vue Router configuration
│   ├── stores/               # Pinia stores (state management)
│   ├── styles/               # Modular CSS architecture
│   │   ├── main.css              # Main stylesheet entry
│   │   ├── variables.css         # CSS custom properties
│   │   ├── animations.css        # Reusable animations
│   │   ├── global.css            # Global styles and resets
│   │   ├── index.css             # Style imports orchestration
│   │   └── components/           # Component-specific styles
│   │       ├── PortfolioHero.css     # Hero section styles
│   │       ├── PortfolioAbout.css    # About section styles
│   │       ├── PortfolioProjects.css # Projects section styles
│   │       └── PortfolioContact.css  # Contact section styles
│   ├── App.vue               # Root application component
│   └── main.ts               # Application entry point
├── microfrontends.json       # Microfrontends configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
├── vitest.config.ts          # Vitest test configuration
├── cypress.config.ts         # Cypress E2E test configuration
└── eslint.config.ts          # ESLint code quality configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the established patterns:
   - Add new skills to `personal.ts` skills array
   - Update projects in the projects array (tech badges auto-update)
   - Follow BEM methodology for CSS classes
   - Ensure TypeScript type safety
4. Run tests: `npm run test:unit && npm run test:e2e`
5. Commit your changes: `git commit -m 'Add amazing feature'` (auto-formatting applies)
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines

- **Configuration**: Always update `personal.ts` for content changes
- **Styling**: Use BEM methodology and component-specific CSS files
- **TypeScript**: Maintain strict type checking and interface compliance
- **Testing**: Add tests for new dynamic features and components
- **Accessibility**: Ensure ARIA labels and semantic HTML structure

## 📝 License

This project is private and proprietary.

## 👤 Author

**Aris Sunandar**

- GitHub: [@arssnndr](https://github.com/arssnndr)
- LinkedIn: [Aris Sunandar](https://www.linkedin.com/in/arssnndr/)
- Email: arissunandar399@gmail.com

---

Built with ❤️ using Vue 3, TypeScript, and modern web technologies.

**Portfolio Features:**
- 🎨 **Dynamic Tech Badges** - Auto-generated from project data
- 📊 **Live Skills Grid** - Category-based skill organization  
- 📈 **Experience Stats** - Real-time data from configuration
- 🚀 **Modern Architecture** - Vue 3 Composition API with TypeScript
- 📱 **Responsive Design** - Mobile-first with glassmorphism effects
- ⚡ **Performance Optimized** - Vite build system with code splitting
