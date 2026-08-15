import { useEffect, useRef, useState } from 'react'
import Styles from './Header.module.css'

const navLinks = [
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'CV', href: '#resume' },
]

const linkedinUrl = 'https://www.linkedin.com/in/julian-lara-5920193a7/'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 10)

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`${Styles.header} ${isHidden ? Styles.hidden : ''} ${isScrolled ? Styles.scrolled : ''}`}
    >
      <nav className={Styles.nav}>
        <a className={Styles.brand} href="#home" onClick={closeMenu}>
          Julian Lara
        </a>

        <button
          type="button"
          className={`${Styles.burger} ${isMenuOpen ? Styles.burgerOpen : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          id="primary-navigation"
          className={`${Styles.navList} ${isMenuOpen ? Styles.navListOpen : ''}`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={closeMenu}>{link.name}</a>
            </li>
          ))}
          <li>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              LinkedIn
            </a>
          </li>
          <li>
            <a className={Styles.button_contact} href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div
          className={`${Styles.overlay} ${isMenuOpen ? Styles.overlayVisible : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      </nav>
    </header>
  )
}
