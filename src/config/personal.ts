interface Project {
  id: number
  title: string
  desc: string
  link?: string
}

export interface PersonalConfig {
  name: string
  role: string
  tagline: string
  bio: string
  email: string
  projects: Project[]
  socials: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export const personal: PersonalConfig = {
  name: 'Aris Sunandar',
  role: 'Frontend Developer',
  tagline: 'Building modern web applications with cutting-edge technologies',
  bio: `Passionate frontend developer specializing in modern web technologies including Angular, Vue.js, and TypeScript. I focus on creating responsive, accessible, and high-performance web applications with excellent user experiences. Currently working on various projects ranging from employee management systems to portfolio websites.`,
  email: 'arissunandar399@gmail.com',
  projects: [
    {
      id: 1,
      title: 'Employee Management System',
      desc: 'Comprehensive employee management application with authentication, CRUD operations, search and filtering capabilities, and responsive UI. Features form validation and secure workflow for HR management.',
      link: 'https://www.port-aris.my.id/employee-management/login',
    },
    {
      id: 2,
      title: 'Portfolio Landing Page',
      desc: 'Modern portfolio website built with Vue 3, TypeScript, and Vite. Features microfrontend architecture, responsive design, and optimized performance.',
      link: 'https://www.port-aris.my.id',
    },
  ],
  socials: {
    github: 'https://github.com/arssnndr',
    linkedin: 'https://www.linkedin.com/in/arssnndr/',
  },
}
