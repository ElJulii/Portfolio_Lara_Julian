import Styles from './Introduction.module.css'
import { useLanguage } from '../../i18n/LanguageContext.tsx'

const tools = [
  { name: 'HTML5', image: '/imgTools/html_img.png', background: '#b13d1d', color: '#ffffff' },
  { name: 'CSS3', image: '/imgTools/ccs_img.png', background: '#1d3bb1', color: '#ffffff' },
  { name: 'JavaScript', image: '/imgTools/js_img.png', background: '#d4bc01', color: '#1a1a1a' },
  { name: 'TypeScript', image: '/imgTools/ts.webp', background: '#21558d', color: '#ffffff' },
  { name: 'React', image: '/imgTools/react_img.png', background: '#2c88a1', color: '#1a1a1a' },
  { name: 'Next.js', image: '/imgTools/nextjs.jpg', background: '#000000', color: '#ffffff' },
  { name: 'Node.js', image: '/imgTools/nodeJs.png', background: '#339933', color: '#ffffff' },
  { name: 'Nest.js', image: '/imgTools/nestJs.png', background: '#e0234e', color: '#ffffff' },
  { name: 'PostgreSQL', image: '/imgTools/postgreSql.webp', background: '#336791', color: '#ffffff' },
  { name: 'Python', image: '/imgTools/python.webp', background: '#2a5a82', color: '#ffffff' },
  { name: 'Java', image: '/imgTools/java.png', background: '#f89820', color: '#1a1a1a' },
  { name: 'Git', image: '/imgTools/git_img.png', background: '#9a3827', color: '#ffffff' },
  { name: 'UI/UX Design', image: '/imgTools/UI-UX_img.jpg', background: '#18274e', color: '#ffffff' },
]

export default function Introduction() {
  const { t } = useLanguage()

  return (
    <div className={Styles.head} id="home">
        <section className={Styles.introduction}>
        <img
            className={Styles.picture}
            src="/profilePicture/me.jpg"
            alt="Julian Lara"
        />
        <p className={Styles.text}>
            {t.intro.text}
        </p>
        </section>

        <section className={Styles.tools} id="skills">
        <h2>{t.intro.skillsTitle}</h2>
        <ul className={Styles.toolsList}>
            {tools.map((tool) => (
                <li
                    key={tool.name}
                    className={Styles.toolBox}
                    style={{ backgroundColor: tool.background, color: tool.color }}
                >
                    <img
                    className={Styles.toolImage}
                    src={tool.image}
                    alt={tool.name}
                    />
                    <span>{tool.name}</span>
                </li>
            ))}
        </ul>
        </section>
    </div>

  )
}