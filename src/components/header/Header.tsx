import Styles from './Header.module.css'


export default function Header() {
  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <ul className={Styles.navList}>
          <li><a href="">Experience</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">LinkedIN</a></li>
          <li><a href="">CV</a></li>
          <li><button className={Styles.button_contact}>Contact</button></li>
        </ul>
      </nav>
    </header>
  )
}