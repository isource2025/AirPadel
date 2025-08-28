import styles from './About.module.css'

export default function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="/Vertical.jpeg" 
                alt="Instalaciones Air Padel" 
                className={styles.heroImg}
              />
            </div>
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.title}>Sobre Air Padel</h2>
            <p className={styles.description}>
              Somos la cadena de clubes de pádel más moderna de Buenos Aires.
              Con más de 10 años de experiencia, ofrecemos las mejores instalaciones
              y servicios para que disfrutes al máximo de tu deporte favorito.
            </p>
          </div>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineTrack}>
            <div className={styles.timelineItem}>
              <div className={styles.dot} />
              <div className={styles.timeTitle}>2015</div>
              <div className={styles.timeDesc}>Fundación de Air Padel</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot} />
              <div className={styles.timeTitle}>2018</div>
              <div className={styles.timeDesc}>Nuevas sedes y expansión</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot} />
              <div className={styles.timeTitle}>2022</div>
              <div className={styles.timeDesc}>Iluminación LED y canchas premium</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot} />
              <div className={styles.timeTitle}>Hoy</div>
              <div className={styles.timeDesc}>2 sedes · 3 canchas por sucursal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
