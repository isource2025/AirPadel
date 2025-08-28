"use client"
import React, { useMemo, useRef, useState } from 'react'
import styles from "./Turnos.module.css"

function formatDay(d: Date) {
  return d.toLocaleDateString(undefined, { weekday: 'short' })
}
function formatDM(d: Date) {
  return d.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit' })
}
function isSameDate(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export default function Turnos() {
  const [branch, setBranch] = useState<string>("Jose Leon Suarez")
  const [court, setCourt] = useState<string>("Cancha 1")
  const [selection, setSelection] = useState<{ dayIdx: number; startIdx: number } | null>(null)
  const [notice, setNotice] = useState<string>("")
  const [openModal, setOpenModal] = useState<boolean>(false)
  const daysColsRef = useRef<HTMLDivElement | null>(null)

  const scrollByDays = (delta: number) => {
    const el = daysColsRef.current
    if (!el) return
    const col = el.querySelector(`.${styles.dayCol}`) as HTMLElement | null
    const colWidth = col?.offsetWidth ?? 140
    el.scrollBy({ left: colWidth * 3 * delta, behavior: 'smooth' })
  }
  const days = useMemo(() => {
    const list: Date[] = []
    const start = new Date()
    for (let i = 0; i < 14; i++) {
      const d = new Date(start)
      d.setDate(start.getDate() + i)
      list.push(d)
    }
    return list
  }, [])

  const slots = useMemo(() => {
    // 8:00 to 12:00 inclusive, steps of 30 minutes
    const out: string[] = []
    for (let h = 8; h <= 11; h++) {
      out.push(`${h}:00`)
      out.push(`${h}:30`)
    }
    out.push('12:00')
    return out
  }, [])

  return (
    <div className={`${styles.wrapper} ${branch === 'Jose Leon Suarez' ? styles.themeBlue : styles.themeGreen}`}>
      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label className={styles.controlLabel}>Sucursal</label>
          <select
            className={styles.select}
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option>Jose Leon Suarez</option>
            <option>Ballester</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label className={styles.controlLabel}>Cancha</label>
          <select
            className={styles.select}
            value={court}
            onChange={(e) => setCourt(e.target.value)}
          >
            <option>Cancha 1</option>
            <option>Cancha 2</option>
            <option>Cancha 3</option>
          </select>
        </div>
      </div>
      <div className={styles.carousel}>
        <button className={`${styles.navBtn} ${styles.navLeft}`} aria-label="Anterior" onClick={() => scrollByDays(-1)}>‹</button>
        <button className={`${styles.navBtn} ${styles.navRight}`} aria-label="Siguiente" onClick={() => scrollByDays(1)}>›</button>
        <div className={styles.daysCols} ref={daysColsRef}>
          {days.map((d, dayIdx) => (
            <div key={dayIdx} className={styles.dayCol}>
              <div className={`${styles.dayHeaderCell} ${isSameDate(d, new Date()) ? styles.today : ''}`}>
                <div className={styles.dayName}>{formatDay(d)}</div>
                <div className={styles.dayBadge}>{formatDM(d)}</div>
              </div>
              {slots.map((t, i) => (
                <button
                  key={i}
                  className={`${styles.slot} ${selection && selection.dayIdx === dayIdx && (i === selection.startIdx || i === selection.startIdx + 1) ? styles.selected : ''}`}
                  title={`Reservar ${formatDM(d)} ${t}`}
                  onClick={() => {
                    if (i >= slots.length - 1) {
                      setNotice('La reserva mínima es de 1 hora. Elegí un horario que tenga el siguiente bloque disponible.')
                      return
                    }
                    setSelection({ dayIdx, startIdx: i })
                    const start = t
                    const end = slots[i + 1]
                    setNotice(`Reserva seleccionada: ${formatDM(d)} ${start} - ${end} · ${branch} · ${court}`)
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      {notice && <div className={styles.notice}>{notice}</div>}
      <div className={styles.actionsBar}>
        <button
          className={styles.confirmBtn}
          disabled={!selection}
          onClick={() => setOpenModal(true)}
        >
          Confirmar reserva
        </button>
      </div>
      {openModal && selection && (
        <div className={styles.modalOverlay} onClick={() => setOpenModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Confirmar reserva</h3>
            <div className={styles.modalBody}>
              <p><strong>Sucursal:</strong> {branch}</p>
              <p><strong>Cancha:</strong> {court}</p>
              <p>
                <strong>Horario:</strong> {formatDM(days[selection.dayIdx])}{' '}
                {slots[selection.startIdx]} - {slots[selection.startIdx + 1]}
              </p>
            </div>
            <div className={styles.modalActions}>
              <button className={styles.secondaryBtn} onClick={() => setOpenModal(false)}>Cancelar</button>
              <button
                className={styles.primaryBtn}
                onClick={() => {
                  const d = days[selection.dayIdx]
                  const start = slots[selection.startIdx]
                  const end = slots[selection.startIdx + 1]
                  setNotice(`Reserva confirmada: ${formatDM(d)} ${start} - ${end} · ${branch} · ${court}`)
                  setOpenModal(false)
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.help}>Desliza horizontalmente para ver más días</div>
    </div>
  )
}
