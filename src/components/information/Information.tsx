import { useState } from 'react'
import Styles from './Information.module.css'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

const experience = [
  {
    role: 'Frontend Developer — Collaboration',
    place: 'Latin America Day, Kazan Federal University',
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

  }
]

const languages = [
  { name: 'Spanish', level: 'Native', flag: '/imgFlags/img-flag-ecu.png' },
  { name: 'English', level: 'B2', flag: '/imgFlags/img-flag-uk.png' },
  { name: 'Russian', level: 'B2', flag: '/imgFlags/img-flag-ru.png' },
]

const education = {
  degree: 'Software Engineering',
  school: 'Kazan Federal University',
  place: 'Kazan, Russia',
  date: 'Graduated in 2026',
}

const certifications = [
  { name: 'UI/UX Design Certification', place: 'Kazan Federal University', date: '2026' },
  { name: 'English Certification B2', place: 'University of Cambridge', date: '2021' },
]

const contacts = [
  { name: 'Email', image: '/imgContacts/img-mail.png', href: 'mailto:juli2003juli@gmail.com' },
  { name: 'GitHub', image: '/imgContacts/img2-git.png', href: 'https://github.com/ElJulii' },
  { name: 'Telegram', image: '/imgContacts/img-telegram.png', href: 'https://web.telegram.org/k/#@ElJulii28' },
]

export default function Information() {
  const [showCopyToast, setShowCopyToast] = useState(false)
  const experienceReveal = useRevealOnScroll<HTMLElement>()
  const languagesReveal = useRevealOnScroll<HTMLElement>()
  const educationReveal = useRevealOnScroll<HTMLElement>()
  const contactReveal = useRevealOnScroll<HTMLElement>()
  const downloadReveal = useRevealOnScroll<HTMLElement>()

  const handleCopyEmail = async () => {
    const email = contacts[0].href.replace('mailto:', '')
    await navigator.clipboard.writeText(email)
    setShowCopyToast(true)
    setTimeout(() => setShowCopyToast(false), 5000)
  }

  return (
    <div className={Styles.information}>
      <section
        ref={experienceReveal.ref}
        className={`${Styles.experience} ${experienceReveal.isVisible ? Styles.isVisible : ''}`}
        id="experience"
      >
        <h2>Experience</h2>
        <div className={Styles.experienceList}>
          {experience.map((item) => (
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
        <h2>Languages</h2>
        <ul className={Styles.languageList}>
          {languages.map((lang) => (
            <li className={Styles.languageItem} key={lang.name}>
              <img className={Styles.flag} src={lang.flag} alt={`${lang.name} flag`} />
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
        <h2>Education &amp; Certifications</h2>
        <article className={Styles.educationCard}>
          <h3 className={Styles.educationTitle}>{education.degree}</h3>
          <p className={Styles.educationPlace}>{education.school} · {education.place}</p>
          <p className={Styles.educationDate}>{education.date}</p>
        </article>
        <ul className={Styles.certificationList}>
          {certifications.map((cert) => (
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
        <h2>Contact</h2>
        <ul className={Styles.contactList}>
          <li>
              <span
                className={Styles.contactLink}
                onClick={handleCopyEmail}
                role="button"
                tabIndex={0}
              >
                <img className={Styles.contactImage} src={contacts[0].image} alt={contacts[0].name} />
                <span>{contacts[0].name}</span>
              </span>
          </li>
          <li>
            <a
              className={Styles.contactLink}
              href={contacts[1].href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={Styles.contactImage} src={contacts[1].image} alt={contacts[1].name} />
              <span>{contacts[1].name}</span>
            </a>
          </li>
          <li>
            <a
              className={Styles.contactLink}
              href={contacts[2].href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={Styles.contactImage} src={contacts[2].image} alt={contacts[2].name} />
              <span>{contacts[2].name}</span>
            </a>
          </li>
        </ul>
        <a
          className={Styles.linkedinLink}
          href="https://www.linkedin.com/in/julian-lara-5920193a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </section>

      <section
        ref={downloadReveal.ref}
        className={`${Styles.download} ${downloadReveal.isVisible ? Styles.isVisible : ''}`}
        id="resume"
      >
        <h2>Resume</h2>
        <a className={Styles.downloadButton} href="/cv/Curriculum_en.pdf" download>
          Download CV (PDF) - English Version
        </a>
        <a className={Styles.downloadButton} href="/cv/Curriculum_es.pdf" download>
          Download CV (PDF) - Spanish Version
        </a>
      </section>

      {showCopyToast && (
        <div className={Styles.copyToast}>Se ha copiado el correo correctamente!</div>
      )}
    </div>
  )
}
