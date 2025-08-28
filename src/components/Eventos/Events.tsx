"use client"
import { useMemo, useState } from "react"
import styles from "./Events.module.css"

export default function Events() {
  const [filter, setFilter] = useState<"todos" | "torneos" | "eventos">("todos")

  const items = useMemo(
    () => [
      {
        id: "t1",
        kind: "torneos" as const,
        title: "Próximo Torneo Air Padel",
        desc:
          "Competí en un entorno profesional, con canchas premium e iluminación LED. Categorías por nivel, premios y mucho espíritu deportivo.",
        tags: ["Categorías A/B/C", "Doble", "Inscripción próximamente"],
        img: "/FotoTorneo.jpeg",
        vertical: true,
      },
      {
        id: "e1",
        kind: "eventos" as const,
        title: "Clínica con Profesor Invitado",
        desc: "Entrenamiento intensivo y tips técnicos. Cupos limitados.",
        tags: ["Clínica", "Nivel intermedio", "Próximamente"],
        img: "/Vertical.jpeg",
        vertical: true,
      },
    ],
    []
  )

  const visible = items.filter((i) => (filter === "todos" ? true : i.kind === filter))

  return (
    <div className={styles.wrapper}>
      {/* Nota: el título y saludo se muestran en el header de la SPA. Evitamos duplicar aquí. */}

      <div className={styles.filters}>
        <button
          className={`${styles.chip} ${filter === "todos" ? styles.active : ""}`}
          onClick={() => setFilter("todos")}
        >
          Todos
        </button>
        <button
          className={`${styles.chip} ${filter === "torneos" ? styles.active : ""}`}
          onClick={() => setFilter("torneos")}
        >
          Torneos
        </button>
        <button
          className={`${styles.chip} ${filter === "eventos" ? styles.active : ""}`}
          onClick={() => setFilter("eventos")}
        >
          Eventos
        </button>
      </div>

      <div className={styles.grid}>        
        {visible.map((item) => (
          <article key={item.id} className={styles.tournamentCard}>
            <div className={styles.imgWrap}>
              <img
                src={item.img}
                alt={item.title}
                className={styles.tournamentImg}
              />
            </div>
            <div className={styles.tournamentInfo}>
              <h3 className={styles.tournamentTitle}>{item.title}</h3>
              <p className={styles.tournamentDesc}>{item.desc}</p>
              <div className={styles.tags}>
                {item.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <div className={styles.actions}>
                <a
                  className={`${styles.btn} ${styles.secondary}`}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`Más información sobre ${item.title}`}
                >
                  Más info
                </a>
                <a
                  className={`${styles.btn} ${styles.primary}`}
                  href={`https://wa.me/5491122600030?text=${encodeURIComponent(`Hola! Quiero inscribirme en: ${item.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Inscribirme a ${item.title} por WhatsApp`}
                >
                  Inscribirme
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
