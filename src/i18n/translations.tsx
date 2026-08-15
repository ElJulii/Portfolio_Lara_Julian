export type Language = 'en' | 'es'

interface ExperienceItem {
  role: string
  place: string
  date: string
  description: string
}

interface LanguageItem {
  name: string
  level: string
}

interface CertificationItem {
  name: string
  place: string
  date: string
}

interface ProjectItem {
  description: string
}

const en = {
  header: {
    experience: 'Experience',
    projects: 'Projects',
    cv: 'CV',
    linkedin: 'LinkedIn',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langToggle: 'ES',
    langToggleAria: 'Switch to Spanish',
  },
  intro: {
    text: (
      <>
        Hi! I'm Julian Lara — a <strong>Software Engineer</strong> from Ecuador, graduated from{' '}
        <strong>Kazan Federal University.</strong> I specialize in building responsive, scalable web
        applications with React, Next.js, TypeScript, Nest.js and Java with Spring Boot. I love
        solving complex problems and crafting clean, maintainable software — currently looking for my
        next challenge as a Frontend, Backend and Full Stack Engineer.
      </>
    ),
    skillsTitle: 'Skills and Programming languages',
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Frontend Developer — Collaboration',
        place: "Latin America Day, Kazan Federal University",
        date: 'Kazan, Russia',
        description:
          "Part of the development team that built the official registration platform for one of the university's most important international cultural events. Worked with React, Git and collaborative workflows, contributing frontend features and integrating the interface with the rest of the system.",
      },
      {
        role: 'Customer Support',
        place: 'ItContact company',
        date: 'Kazan, Russia - 1 year',
        description:
          "Searched and managed customer records in the company's database to resolve account-related issues and inquiries. Handled user account administration end-to-end, including creating, editing, blocking and deleting user accounts based on support requests.",
      },
    ] satisfies ExperienceItem[],
  },
  languages: {
    title: 'Languages',
    items: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2' },
      { name: 'Russian', level: 'B2' },
    ] satisfies LanguageItem[],
  },
  education: {
    title: 'Education & Certifications',
    degree: 'Software Engineering',
    school: 'Kazan Federal University',
    place: 'Kazan, Russia',
    date: 'Graduated in 2026',
    certifications: [
      { name: 'UI/UX Design Certification', place: 'Kazan Federal University', date: '2026' },
      { name: 'English Certification B2', place: 'University of Cambridge', date: '2021' },
    ] satisfies CertificationItem[],
  },
  contact: {
    title: 'Contact',
    email: 'Email',
    github: 'GitHub',
    telegram: 'Telegram',
    connectLinkedin: 'Connect on LinkedIn',
    copyToast: 'Email copied successfully!',
  },
  resume: {
    title: 'Resume',
    downloadEn: 'Download CV (PDF) - English Version',
    downloadEs: 'Download CV (PDF) - Spanish Version',
  },
  projects: {
    title: 'Projects',
    code: 'Code',
    liveDemo: 'Live Demo',
    items: [
      {
        description:
          'Full stack platform for reporting animal abuse cases, with AI-based spam detection to filter false reports before operator review.',
      },
      {
        description:
          'Educational platform presenting World War II from the perspective of multiple countries, focused on responsive UI and reusable components.',
      },
      {
        description:
          "Official registration platform for Kazan Federal University's Latin America Day cultural event, built collaboratively with a university dev team.",
      },
      {
        description:
          'Responsive real estate website for apartment listings in Quito, Ecuador, with image galleries and inquiry forms.',
      },
      {
        description:
          'Modern commercial website showcasing artistic models and multiple product categories with user-friendly navigation.',
      },
    ] satisfies ProjectItem[],
  },
  footer: {
    tagline: 'Software Engineer',
    text: 'Building clean, reliable web experiences with React, TypeScript and modern tooling.',
    quickLinksTitle: 'Quick Links',
    quickLinks: {
      home: 'Home',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    connectTitle: 'Connect',
    email: 'Email',
    downloadCv: 'Download CV',
    copyright: 'All rights reserved.',
    backToTop: 'Back to top ↑',
    copyToast: 'Email copied successfully!',
  },
}

const es: typeof en = {
  header: {
    experience: 'Experiencia',
    projects: 'Proyectos',
    cv: 'CV',
    linkedin: 'LinkedIn',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    langToggle: 'EN',
    langToggleAria: 'Cambiar a inglés',
  },
  intro: {
    text: (
      <>
        ¡Hola! Soy Julian Lara — un <strong>Ingeniero de Software</strong> de Ecuador, graduado de la{' '}
        <strong>Universidad Federal de Kazán.</strong> Me especializo en construir aplicaciones web
        responsivas y escalables con React, Next.js, TypeScript, Nest.js y Java con Spring Boot. Me
        apasiona resolver problemas complejos y crear software limpio y mantenible — actualmente busco
        mi próximo reto como Frontend, Backend o Full Stack Engineer.
      </>
    ),
    skillsTitle: 'Habilidades y lenguajes de programación',
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        role: 'Desarrollador Frontend — Colaboración',
        place: 'Latin America Day, Universidad Federal de Kazán',
        date: 'Kazán, Rusia',
        description:
          'Formó parte del equipo de desarrollo que construyó la plataforma oficial de registro para uno de los eventos culturales internacionales más importantes de la universidad. Trabajó con React, Git y flujos de trabajo colaborativos, aportando funcionalidades de frontend e integrando la interfaz con el resto del sistema.',
      },
      {
        role: 'Atención al Cliente',
        place: 'ItContact company',
        date: 'Kazán, Rusia - 1 año',
        description:
          'Buscó y gestionó registros de clientes en la base de datos de la empresa para resolver problemas y consultas relacionadas con cuentas. Administró cuentas de usuario de principio a fin, incluyendo creación, edición, bloqueo y eliminación de cuentas según las solicitudes de soporte.',
      },
    ],
  },
  languages: {
    title: 'Idiomas',
    items: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' },
      { name: 'Ruso', level: 'B2' },
    ],
  },
  education: {
    title: 'Educación y Certificaciones',
    degree: 'Ingeniería de Software',
    school: 'Universidad Federal de Kazán',
    place: 'Kazán, Rusia',
    date: 'Graduado en 2026',
    certifications: [
      { name: 'Certificación en Diseño UI/UX', place: 'Universidad Federal de Kazán', date: '2026' },
      { name: 'Certificación de Inglés B2', place: 'Universidad de Cambridge', date: '2021' },
    ],
  },
  contact: {
    title: 'Contacto',
    email: 'Correo',
    github: 'GitHub',
    telegram: 'Telegram',
    connectLinkedin: 'Conéctate en LinkedIn',
    copyToast: '¡Se ha copiado el correo correctamente!',
  },
  resume: {
    title: 'Currículum',
    downloadEn: 'Descargar CV (PDF) - Versión en Inglés',
    downloadEs: 'Descargar CV (PDF) - Versión en Español',
  },
  projects: {
    title: 'Proyectos',
    code: 'Código',
    liveDemo: 'Demo en vivo',
    items: [
      {
        description:
          'Plataforma full stack para reportar casos de maltrato animal, con detección de spam basada en IA para filtrar reportes falsos antes de la revisión de un operador.',
      },
      {
        description:
          'Plataforma educativa que presenta la Segunda Guerra Mundial desde la perspectiva de varios países, enfocada en una UI responsiva y componentes reutilizables.',
      },
      {
        description:
          'Plataforma oficial de registro para el evento cultural Latin America Day de la Universidad Federal de Kazán, construida colaborativamente con un equipo de desarrollo universitario.',
      },
      {
        description:
          'Sitio web inmobiliario responsivo para listados de apartamentos en Quito, Ecuador, con galerías de imágenes y formularios de contacto.',
      },
      {
        description:
          'Sitio web comercial moderno que muestra modelos artísticos y múltiples categorías de productos con navegación intuitiva.',
      },
    ],
  },
  footer: {
    tagline: 'Ingeniero de Software',
    text: 'Construyendo experiencias web limpias y confiables con React, TypeScript y herramientas modernas.',
    quickLinksTitle: 'Enlaces Rápidos',
    quickLinks: {
      home: 'Inicio',
      experience: 'Experiencia',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    connectTitle: 'Conecta',
    email: 'Correo',
    downloadCv: 'Descargar CV',
    copyright: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba ↑',
    copyToast: '¡Se ha copiado el correo correctamente!',
  },
}

export const content: Record<Language, typeof en> = { en, es }
