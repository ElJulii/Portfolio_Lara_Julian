import { useState } from 'react'
import Styles from './Information.module.css'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { useLanguage } from '../../i18n/LanguageContext.tsx'

const languageFlags = ['/imgFlags/img-flag-ecu.png', '/imgFlags/img-flag-uk.png', '/imgFlags/img-flag-ru.png']

const contactImages = ['/imgContacts/img-mail.png', '/imgContacts/img2-git.png', '/imgContacts/img-telegram.png']
const contactHrefs = [
  'mailto:juli2003juli@gmail.com',
  'https://github.com/ElJulii',
  'https://web.telegram.org/k/#@ElJulii28',
]

export default function Information() {
  const { t } = useLanguage()
  const [showCopyToast, setShowCopyToast] = useState(false)
  const experienceReveal = useRevealOnScroll<HTMLElement>()
  const languagesReveal = useRevealOnScroll<HTMLElement>()
  const educationReveal = useRevealOnScroll<HTMLElement>()
  const contactReveal = useRevealOnScroll<HTMLElement>()
  const downloadReveal = useRevealOnScroll<HTMLElement>()

  const handleCopyEmail = async () => {
    const email = contactHrefs[0].replace('mailto:', '')
    await navigator.clipboard.writeText(email)
    setShowCopyToast(true)
    setTimeout(() => setShowCopyToast(false), 5000)
  }

  const contactNames = [t.contact.email, t.contact.github, t.contact.telegram]

  return (
    <div className={Styles.information}>
      <section
        ref={experienceReveal.ref}
        className={`${Styles.experience} ${experienceReveal.isVisible ? Styles.isVisible : ''}`}
        id="experience"
      >
        <h2>{t.experience.title}</h2>
        <div className={Styles.experienceList}>
          {t.experience.items.map((item) => (
            <article className={Styles.experienceCard} key={item.role}>
              <h3 className={Styles.experienceRole}>{item.role}</h3>
              <p className={Styles.experiencePlace}>{item.place} · {item.date}</p>
              <p className={Styles.experienceText}>{item.description}</p>
            </article>
          ))}
        </div>

      </section>

      <section
        ref={languagesReveal.ref}
        className={`${Styles.languages} ${languagesReveal.isVisible ? Styles.isVisible : ''}`}
      >
        <h2>{t.languages.title}</h2>
        <ul className={Styles.languageList}>
          {t.languages.items.map((lang, index) => (
            <li className={Styles.languageItem} key={lang.name}>
              <img className={Styles.flag} src={languageFlags[index]} alt={`${lang.name} flag`} />
              <span className={Styles.languageName}>{lang.name}</span>
              <span className={Styles.languageLevel}>{lang.level}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        ref={educationReveal.ref}
        className={`${Styles.education} ${educationReveal.isVisible ? Styles.isVisible : ''}`}
      >
        <h2>{t.education.title}</h2>
        <article className={Styles.educationCard}>
          <h3 className={Styles.educationTitle}>{t.education.degree}</h3>
          <p className={Styles.educationPlace}>{t.education.school} · {t.education.place}</p>
          <p className={Styles.educationDate}>{t.education.date}</p>
        </article>
        <ul className={Styles.certificationList}>
          {t.education.certifications.map((cert) => (
            <li className={Styles.certificationItem} key={cert.name}>
              <span className={Styles.certificationName}>{cert.name}</span>
              <span className={Styles.certificationMeta}>{cert.place} · {cert.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        ref={contactReveal.ref}
        className={`${Styles.contact} ${contactReveal.isVisible ? Styles.isVisible : ''}`}
        id="contact"
      >
        <h2>{t.contact.title}</h2>
        <ul className={Styles.contactList}>
          <li>
              <span
                className={Styles.contactLink}
                onClick={handleCopyEmail}
                role="button"
                tabIndex={0}
              >
                <img className={Styles.contactImage} src={contactImages[0]} alt={contactNames[0]} />
                <span>{contactNames[0]}</span>
              </span>
          </li>
          <li>
            <a
              className={Styles.contactLink}
              href={contactHrefs[1]}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={Styles.contactImage} src={contactImages[1]} alt={contactNames[1]} />
              <span>{contactNames[1]}</span>
            </a>
          </li>
          <li>
            <a
              className={Styles.contactLink}
              href={contactHrefs[2]}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={Styles.contactImage} src={contactImages[2]} alt={contactNames[2]} />
              <span>{contactNames[2]}</span>
            </a>
          </li>
        </ul>
        <a
          className={Styles.linkedinLink}
          href="https://www.linkedin.com/in/julian-lara-5920193a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.contact.connectLinkedin}
        </a>
      </section>

      <section
        ref={downloadReveal.ref}
        className={`${Styles.download} ${downloadReveal.isVisible ? Styles.isVisible : ''}`}
        id="resume"
      >
        <h2>{t.resume.title}</h2>
        <a className={Styles.downloadButton} href="/cv/Curriculum_en.pdf" download>
          {t.resume.downloadEn}
        </a>
        <a className={Styles.downloadButton} href="/cv/Curriculum_es.pdf" download>
          {t.resume.downloadEs}
        </a>
      </section>

      {showCopyToast && (
        <div className={Styles.copyToast}>{t.contact.copyToast}</div>
      )}
    </div>
  )
}
