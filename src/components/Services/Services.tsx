'use client'
import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      icon: '🏓',
      title: 'Alquiler de Canchas',
      description: 'Canchas de pádel premium con césped sintético de última generación y excelente iluminación.',
      price: 'Cancha 1:30 $44.000',
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
    },
    {
      icon: '🌤️',
      title: 'Cancha Abierta',
      description: 'Juga al aire libre en cancha abierta.',
      price: 'Cancha abierta $15.000',
      features: ['Ambiente abierto', 'Espacio ventilado', 'Ideal para días templados']
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
              <a
                className={styles.serviceBtn}
                href={`https://wa.me/5491122600030?text=${encodeURIComponent(`Hola! Quiero reservar: ${service.title} (${service.price}). ¿Me pasás más info y disponibilidad?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Reservar ${service.title} por WhatsApp`}
              >
                Reservar por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
