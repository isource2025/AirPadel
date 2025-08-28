'use client'
import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      icon: '🏓',
      title: 'Alquiler de Canchas',
      description: 'Canchas de pádel premium con césped sintético de última generación y excelente iluminación.',
      price: 'Desde $2.500/hora',
      features: ['Césped sintético premium', 'Iluminación LED', 'Vestuarios incluidos']
    },
    {
      icon: '🎯',
      title: 'Clases Particulares',
      description: 'Clases personalizadas con instructores profesionales certificados para todos los niveles.',
      price: 'Desde $3.000/clase',
      features: ['Instructor certificado', 'Equipamiento incluido', 'Seguimiento personalizado']
    },
    {
      icon: '👥',
      title: 'Clases Grupales',
      description: 'Aprende pádel en grupo con un ambiente divertido y competitivo. Máximo 4 personas.',
      price: 'Desde $1.500/persona',
      features: ['Grupos reducidos', 'Ambiente social', 'Progreso grupal']
    },
    {
      icon: '🏆',
      title: 'Torneos',
      description: 'Participa en nuestros torneos mensuales y compite con jugadores de tu nivel.',
      price: 'Desde $1.000/inscripción',
      features: ['Diferentes categorías', 'Premios incluidos', 'Ambiente competitivo']
    }
  ]

  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestros Servicios</h2>
          <p className={styles.subtitle}>
            Ofrecemos una amplia gama de servicios para que disfrutes al máximo tu experiencia de pádel
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceFeatures}>
                {service.features.map((feature, idx) => (
                  <div key={idx} className={styles.feature}>
                    <span className={styles.featureIcon}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className={styles.servicePrice}>{service.price}</div>
              <button className={styles.serviceBtn}>
                Reservar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
