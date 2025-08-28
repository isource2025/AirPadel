import styles from './About.module.css'

export default function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.title}>Sobre Air Padel</h2>
            <p className={styles.description}>
              Somos la cadena de clubes de pádel más moderna de Buenos Aires. 
              Con más de 10 años de experiencia, ofrecemos las mejores instalaciones 
              y servicios para que disfrutes al máximo de tu deporte favorito.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🏆</div>
                <div className={styles.featureText}>
                  <h4>Canchas Premium</h4>
                  <p>Césped sintético de última generación</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <div className={styles.featureText}>
                  <h4>Iluminación LED</h4>
                  <p>Perfecta visibilidad en horarios nocturnos</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎯</div>
                <div className={styles.featureText}>
                  <h4>Clases Profesionales</h4>
                  <p>Instructores certificados y experimentados</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="https://i.pinimg.com/736x/51/77/8d/51778d6fd29aa757fd4e07d338813738.jpg" 
                alt="Instalaciones Air Padel" 
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
