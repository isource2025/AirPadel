'use client'
import { useState } from 'react'
import styles from './Hero.module.css'
import LoginModal from '../LoginModal/LoginModal'

interface HeroProps {
  onLoginSuccess?: (userName: string) => void
}

export default function Hero({ onLoginSuccess }: HeroProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Vive la <span className={styles.highlight}>Pasión</span> del Pádel
          </h1>
          <p className={styles.heroSubtitle}>
            Descubre las mejores canchas de pádel en Buenos Aires. 
            Reserva tu cancha y disfruta del deporte que más te gusta.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn} onClick={openLoginModal}>
              Reservar Cancha
            </button>
            <button className={styles.secondaryBtn}>
              Ver Ubicaciones
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img 
            src="https://i.pinimg.com/1200x/6c/da/45/6cda45347b2fbdc389a769ce8fad5ad7.jpg" 
            alt="Cancha de pádel profesional" 
            className={styles.heroImg}
          />
        </div>
      </div>
      
      {isLoginModalOpen && (
        <LoginModal onClose={closeLoginModal} onLoginSuccess={onLoginSuccess} />
      )}
    </section>
  )
}
