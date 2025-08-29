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
  tagline: 'I build accessible and performant web apps.',
  bio: `I'm a frontend developer focusing on building fast, accessible, and delightful experiences on the web. I enjoy working with Angular, Vue, TypeScript, and modern frontend tooling.`,
  email: 'arissunandar399@gmail.com',
  projects: [
    {
      id: 1,
      title: 'Employee Management',
      desc: 'Aplikasi manajemen karyawan dengan autentikasi, CRUD data, pencarian dan filter, serta antarmuka responsif. Menyediakan validasi form untuk alur kerja HR yang aman.',
      link: 'https://www.port-aris.my.id/employee-management'
    },
    {
      id: 2,
      title: 'Project Beta',
      desc: 'A larger app built with Vue + Pinia — menggunakan state management terpusat, routing dinamis, dan komponen yang dapat digunakan kembali untuk skala aplikasi.',
      link: '#'
    }
  ],
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername'
  }
}
