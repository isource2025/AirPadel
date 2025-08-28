'use client'
import styles from './Locations.module.css'

export default function Locations() {
  const locations = [
    {
      name: 'Sede Ballester',
      address: 'Colón 3162, B1653 Villa Ballester, Provincia de Buenos Aires',
      phone: '—',
      hours: 'Lun - Dom: 6:00 - 24:00',
      courts: 3,
      mapUrl:
        'https://www.google.com.ar/maps/place/Air+Padel+Club/@-34.5506497,-58.5623385,19z/data=!4m15!1m8!3m7!1s0x95bcb9f8eba23729:0x4a4bc0bdf6d2f945!2sCol%C3%B3n+3162,+B1653+Villa+Ballester,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.550832!4d-58.5618369!16s%2Fg%2F11t1dz1sfr!3m5!1s0x95bcb900452e04cb:0x10e221440ba6c879!8m2!3d-34.5507576!4d-58.5618476!16s%2Fg%2F11w9wc5zhf?hl=es&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: 'Sede José León Suárez',
      address: 'Aristóbulo del Valle 7300, B1655 Villa José León Suárez, Provincia de Buenos Aires',
      phone: '—',
      hours: 'Lun - Dom: 6:00 - 24:00',
      courts: 3,
      mapUrl:
        'https://www.google.com.ar/maps/place/Arist%C3%B3bulo+del+Valle+7300,+B1655+Villa+Jos%C3%A9+Le%C3%B3n+Su%C3%A1rez,+Provincia+de+Buenos+Aires/@-34.5405265,-58.5837993,19z/data=!3m1!4b1!4m6!3m5!1s0x95bcba3bfe2c3de5:0x9662babd426d9998!8m2!3d-34.5405276!4d-58.5831556!16s%2Fg%2F11pwjddn98?hl=es&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
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
            3 canchas por sucursal · Sede Ballester - Sede José León Suárez
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
