import Styles from './Projects.module.css'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { useLanguage } from '../../i18n/LanguageContext.tsx'

const projects = [
  {
    name: 'BioAlert',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'YOLOv8 AI'],
    image: '/imgProjects/BioAlertWeb.png',
    repo: 'https://github.com/ElJulii/BioAlert-main',
    demo: null,
  },
  {
    name: 'The World War II',
    stack: ['Next.js'],
    image: '/imgProjects/ww2Web.png',
    repo: 'https://github.com/ElJulii/WW2_legacy',
    demo: 'https://ww-2-legacy.vercel.app/',
  },
  {
    name: 'Latin Day',
    stack: ['React'],
    image: '/imgProjects/latinDay.png',
    repo: 'https://github.com/DataJoshua/latinoamerica-ru',
    demo: 'https://latinos-kfu.netlify.app/',
  },
  {
    name: 'Apartments Marketplace',
    stack: ['React'],
    image: '/imgProjects/apartmentsWeb.png',
    repo: 'https://github.com/ElJulii/Apartments_Laras',
    demo: 'https://eljulii.github.io/Apartments_Laras/build/',
  },
  {
    name: '500/700 Company Website',
    stack: ['React'],
    image: '/imgProjects/500-700Web.png',
    repo: 'https://github.com/ElJulii/fivetoseven_interview',
    demo: 'https://eljulii.github.io/fivetoseven_interview/',
  },
]

export default function Projects() {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      className={`${Styles.projects} ${isVisible ? Styles.isVisible : ''}`}
      id="projects"
    >
      <h2>{t.projects.title}</h2>
      <div className={Styles.grid}>
        {projects.map((project, index) => (
          <article className={Styles.card} key={project.name}>
            <div className={Styles.imageWrapper}>
              <img className={Styles.image} src={project.image} alt={`${project.name} preview`} />
            </div>
            <div className={Styles.content}>
              <h3 className={Styles.title}>{project.name}</h3>
              <p className={Styles.description}>{t.projects.items[index].description}</p>
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
                  {t.projects.code}
                </a>
                {project.demo && (
                  <a
                    className={`${Styles.actionButton} ${Styles.actionButtonPrimary}`}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.liveDemo}
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
