import { useState } from 'react'
import Styles from './Footer.module.css'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  { name: 'GitHub', image: '/imgContacts/img2-git.png', href: 'https://github.com/ElJulii' },
  { name: 'Telegram', image: '/imgContacts/img-telegram.png', href: 'https://web.telegram.org/k/#@ElJulii28' },
]

const email = 'juli2003juli@gmail.com'

export default function Footer() {
  const [showCopyToast, setShowCopyToast] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setShowCopyToast(true)
    setTimeout(() => setShowCopyToast(false), 5000)
  }

  return (
    <footer className={Styles.footer}>
      <div className={Styles.content}>
        <div className={Styles.brand}>
          <span className={Styles.brandName}>Julian Lara</span>
          <p className={Styles.brandTagline}>Software Engineer</p>
          <p className={Styles.brandText}>
            Building clean, reliable web experiences with React, TypeScript and modern tooling.
          </p>
        </div>

        <nav className={Styles.column}>
          <h3 className={Styles.columnTitle}>Quick Links</h3>
          <ul className={Styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={Styles.column}>
          <h3 className={Styles.columnTitle}>Connect</h3>
          <ul className={Styles.socialList}>
            <li>
              <span
                className={Styles.socialLink}
                onClick={handleCopyEmail}
                role="button"
                tabIndex={0}
              >
                <img className={Styles.socialIcon} src="/imgContacts/img-mail.png" alt="Email" />
                <span>Email</span>
              </span>
            </li>
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  className={Styles.socialLink}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={Styles.socialIcon} src={social.image} alt={social.name} />
                  <span>{social.name}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                className={Styles.socialLink}
                href="https://www.linkedin.com/in/julian-lara-5920193a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
          <a className={Styles.resumeLink} href="/cv/Curri_pro_es.pdf" download>
            Download CV
          </a>
        </div>
      </div>

      <div className={Styles.bottomBar}>
        <p className={Styles.copyright}>
          &copy; {new Date().getFullYear()} Julian Lara. All rights reserved.
        </p>
        <a className={Styles.backToTop} href="#home">
          Back to top ↑
        </a>
      </div>

      {showCopyToast && (
        <div className={Styles.copyToast}>Se ha copiado el correo correctamente!</div>
      )}
    </footer>
  )
}
