interface Project {
  id: number
  title: string
  desc: string
  demoUrl?: string
  githubUrl?: string
}

export interface PersonalConfig {
  name: string
  role: string
  tagline: string
  bio: string
  email: string
  phone: string
  projects: Project[]
  socials: {
    github?: string
    linkedin?: string
    twitter?: string
    whatsapp?: string
  }
}

export const personal: PersonalConfig = {
  name: 'Aris Sunandar',
  role: 'Frontend Developer',
  tagline: 'Building modern web applications with cutting-edge technologies',
  bio: `Passionate frontend developer specializing in modern web technologies including Angular, Vue.js, and TypeScript. I focus on creating responsive, accessible, and high-performance web applications with excellent user experiences. Currently working on various projects ranging from employee management systems to portfolio websites.`,
  email: 'arissunandar399@gmail.com',
  phone: '08996852370',
  projects: [
    {
      id: 1,
      title: 'Portfolio Landing Page',
      desc: 'Modern portfolio website built with Vue 3, TypeScript, and Vite. Features microfrontend architecture, responsive design, and optimized performance.',
      demoUrl: 'https://www.port-aris.my.id',
      githubUrl: 'https://github.com/arssnndr/fe-portfolio-landing',
    },
    {
      id: 2,
      title: 'Employee Management',
      desc: 'Comprehensive employee management application with authentication, CRUD operations, search and filtering capabilities, and responsive UI. Features form validation and secure workflow for HR management.',
      demoUrl: 'https://www.port-aris.my.id/employee-management/login',
      githubUrl: 'https://github.com/arssnndr/fe-employee-management',
    },
    {
      id: 3,
      title: 'Employee Management API',
      desc: 'Express.js REST API backend for employee management. Features JWT authentication, Supabase integration, comprehensive testing with Node.js test runner, rate limiting, and security middleware. Includes user registration/login and full CRUD operations for employee data.',
      githubUrl: 'https://github.com/arssnndr/be-employee-management',
    },
  ],
  socials: {
    github: 'https://github.com/arssnndr',
    linkedin: 'https://www.linkedin.com/in/arssnndr/',
    whatsapp: 'https://wa.me/6208996852370',
  },
}
