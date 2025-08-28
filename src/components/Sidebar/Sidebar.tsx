"use client"
import styles from "./Sidebar.module.css"

export default function Sidebar({
  active,
  onSelect,
  userName,
  onLogout,
}: {
  active: "turnos" | "eventos"
  onSelect: (v: "turnos" | "eventos") => void
  userName?: string
  onLogout?: () => void
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userCard}>
        <div className={styles.avatar}>{userName?.[0] ?? 'U'}</div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{userName || 'Usuario'}</div>
          <div className={styles.userRole}>Miembro</div>
        </div>
      </div>

      <div className={styles.title}>Menú</div>
      <nav className={styles.nav}>
        <button
          className={`${styles.item} ${active === "turnos" ? styles.active : ""}`}
          onClick={() => onSelect("turnos")}
        >
          Turnos
        </button>
        <button
          className={`${styles.item} ${active === "eventos" ? styles.active : ""}`}
          onClick={() => onSelect("eventos")}
        >
          Torneos & Eventos
        </button>
      </nav>
      <div className={styles.footerArea}>
        <button className={styles.logoutBtn} onClick={onLogout}>Cerrar sesión</button>
      </div>
    </aside>
  )
}
