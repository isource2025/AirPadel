"use client"
import styles from "./Events.module.css"

export default function Events() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Torneos & Eventos</h2>
      <p className={styles.subtitle}>Próximamente podrás ver y registrarte a torneos y eventos aquí.</p>
      <div className={styles.cardGrid}>
        <div className={styles.card}>Sin eventos por el momento</div>
      </div>
    </div>
  )
}
