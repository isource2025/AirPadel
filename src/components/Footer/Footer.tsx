import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <span>Air Padel</span>
            </div>
            <p className={styles.description}>
              La cadena de clubes de pádel más moderna de Buenos Aires. 
              Más de 10 años ofreciendo las mejores instalaciones.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>📘</a>
              <a href="#" className={styles.socialLink}>📷</a>
              <a href="#" className={styles.socialLink}>🐦</a>
              <a href="#" className={styles.socialLink}>📺</a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Enlaces Rápidos</h4>
            <ul className={styles.linkList}>
              <li><a href="#inicio" className={styles.footerLink}>Inicio</a></li>
              <li><a href="#nosotros" className={styles.footerLink}>Nosotros</a></li>
              <li><a href="#servicios" className={styles.footerLink}>Servicios</a></li>
              <li><a href="#ubicaciones" className={styles.footerLink}>Ubicaciones</a></li>
              <li><a href="#contacto" className={styles.footerLink}>Contacto</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Servicios</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Alquiler de Canchas</a></li>
              <li><a href="#" className={styles.footerLink}>Clases Particulares</a></li>
              <li><a href="#" className={styles.footerLink}>Clases Grupales</a></li>
              <li><a href="#" className={styles.footerLink}>Torneos</a></li>
              <li><a href="#" className={styles.footerLink}>Eventos Corporativos</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contacto</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>+54 11 1234-5678</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>info@airpadel.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Av. Corrientes 1234, CABA</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🕒</span>
                <span>Lun - Dom: 6:00 - 24:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; 2024 Air Padel. Todos los derechos reservados.</p>
          </div>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Política de Privacidad</a>
            <a href="#" className={styles.legalLink}>Términos y Condiciones</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
