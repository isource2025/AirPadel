'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <span>Air Padel</span>
          </div>
          
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <a href="#inicio" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
            <a href="#nosotros" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </a>
            <a href="#servicios" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              Servicios
            </a>
            <a href="#ubicaciones" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              Ubicaciones
            </a>
            <a href="#contacto" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
          </div>

          <button 
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
