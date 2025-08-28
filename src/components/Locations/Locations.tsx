'use client'
import styles from './Locations.module.css'

export default function Locations() {
  const locations = [
    {
      name: 'Air Padel Palermo',
      address: 'Av. Santa Fe 3421, Palermo, Buenos Aires',
      phone: '+54 11 4567-8901',
      hours: 'Lun - Dom: 6:00 - 24:00',
      courts: 8,
      mapUrl: 'https://maps.google.com/?q=Palermo,Buenos+Aires'
    },
    {
      name: 'Air Padel Belgrano',
      address: 'Av. Cabildo 2156, Belgrano, Buenos Aires',
      phone: '+54 11 4567-8902',
      hours: 'Lun - Dom: 6:00 - 24:00',
      courts: 6,
      mapUrl: 'https://maps.google.com/?q=Belgrano,Buenos+Aires'
    }
  ]

  const handleRedirect = (mapUrl: string) => {
    window.open(mapUrl, '_blank')
  }

  return (
    <section id="ubicaciones" className={styles.locations}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestras Ubicaciones</h2>
          <p className={styles.subtitle}>
            Encuentra la sede más cercana a ti y reserva tu cancha
          </p>
        </div>

        <div className={styles.locationsGrid}>
          {locations.map((location, index) => (
            <div key={index} className={styles.locationCard}>
              <div className={styles.locationHeader}>
                <h3 className={styles.locationName}>{location.name}</h3>
                <div className={styles.courtsInfo}>
                  <span className={styles.courtsIcon}>🏓</span>
                  <span>{location.courts} canchas</span>
                </div>
              </div>

              <div className={styles.locationInfo}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div className={styles.infoText}>
                    <strong>Dirección</strong>
                    <p>{location.address}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div className={styles.infoText}>
                    <strong>Teléfono</strong>
                    <p>{location.phone}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕒</div>
                  <div className={styles.infoText}>
                    <strong>Horarios</strong>
                    <p>{location.hours}</p>
                  </div>
                </div>
              </div>

              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapIcon}>🗺️</div>
                  <p>Mapa de {location.name}</p>
                </div>
              </div>

              <div className={styles.locationActions}>
                <button 
                  className={styles.mapBtn}
                  onClick={() => handleRedirect(location.mapUrl)}
                >
                  Ver en Google Maps
                </button>
                <button className={styles.reserveBtn}>
                  Reservar Cancha
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
