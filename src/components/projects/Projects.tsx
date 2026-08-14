import Styles from './Projects.module.css'

const projects = [
  {
    name: 'BioAlert',
    description:
      'Full stack platform for reporting animal abuse cases, with AI-based spam detection to filter false reports before operator review.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'YOLOv8 AI'],
    image: '/imgProjects/BioAlertWeb.png',
    repo: 'https://github.com/ElJulii/BioAlert-main',
    demo: null,
  },
  {
    name: 'The World War II',
    description:
      'Educational platform presenting World War II from the perspective of multiple countries, focused on responsive UI and reusable components.',
    stack: ['Next.js'],
    image: '/imgProjects/ww2Web.png',
    repo: 'https://github.com/ElJulii/WW2_legacy',
    demo: 'https://ww-2-legacy.vercel.app/',
  },
  {
    name: 'Latin Day',
    description:
      "Official registration platform for Kazan Federal University's Latin America Day cultural event, built collaboratively with a university dev team.",
    stack: ['React'],
    image: '/imgProjects/latinDay.png',
    repo: 'https://github.com/DataJoshua/latinoamerica-ru',
    demo: 'https://latinos-kfu.netlify.app/',
  },
  {
    name: 'Apartments Marketplace',
    description:
      'Responsive real estate website for apartment listings in Quito, Ecuador, with image galleries and inquiry forms.',
    stack: ['React'],
    image: '/imgProjects/apartmentsWeb.png',
    repo: 'https://github.com/ElJulii/Apartments_Laras',
    demo: 'https://eljulii.github.io/Apartments_Laras/build/',
  },
  {
    name: '500/700 Company Website',
    description:
      'Modern commercial website showcasing artistic models and multiple product categories with user-friendly navigation.',
    stack: ['React'],
    image: '/imgProjects/500-700Web.png',
    repo: 'https://github.com/ElJulii/fivetoseven_interview',
    demo: 'https://eljulii.github.io/fivetoseven_interview/',
  },
]

export default function Projects() {
  return (
    <section className={Styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={Styles.grid}>
        {projects.map((project) => (
          <article className={Styles.card} key={project.name}>
            <div className={Styles.imageWrapper}>
              <img className={Styles.image} src={project.image} alt={`${project.name} preview`} />
            </div>
            <div className={Styles.content}>
              <h3 className={Styles.title}>{project.name}</h3>
              <p className={Styles.description}>{project.description}</p>
              <ul className={Styles.tagList}>
                {project.stack.map((tech) => (
                  <li className={Styles.tag} key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={Styles.actions}>
                <a
                  className={Styles.actionButton}
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
                {project.demo && (
                  <a
                    className={`${Styles.actionButton} ${Styles.actionButtonPrimary}`}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
