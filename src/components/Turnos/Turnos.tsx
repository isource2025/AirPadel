"use client"
import React, { useMemo, useRef, useState } from 'react'
import styles from "./Turnos.module.css"
import CustomSelect from "../Shared/CustomSelect"

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
  const [modalEndIdx, setModalEndIdx] = useState<number | null>(null)
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
    // Hourly slots: 08:00 to 00:00 (end-only). Last entry is end boundary.
    const out: string[] = []
    const startHour = 8
    const endHour = 24
    for (let h = startHour; h < endHour; h++) {
      const hh = String(h).padStart(2, '0')
      out.push(`${hh}:00`)
    }
    out.push('00:00')
    return out
  }, [])

  return (
    <div className={`${styles.wrapper} ${branch === 'Jose Leon Suarez' ? styles.themeBlue : styles.themeGreen}`}>
      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label className={styles.controlLabel}>Sucursal</label>
          <CustomSelect
            value={branch}
            onChange={(v) => setBranch(v)}
            options={["Jose Leon Suarez", "Ballester"]}
            ariaLabel="Sucursal"
          />
        </div>
        <div className={styles.controlGroup}>
          <label className={styles.controlLabel}>Cancha</label>
          <CustomSelect
            value={court}
            onChange={(v) => setCourt(v)}
            options={["Cancha 1", "Cancha 2", "Cancha 3"]}
            ariaLabel="Cancha"
          />
        </div>
        <div className={styles.navControls}>
          <button className={styles.navBtnInline} aria-label="Anterior" onClick={() => scrollByDays(-1)}>
            ‹ <span>Anterior</span>
          </button>
          <button className={styles.navBtnInline} aria-label="Siguiente" onClick={() => scrollByDays(1)}>
            <span>Siguiente</span> ›
          </button>
        </div>
      </div>
      <div className={styles.carousel}>
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
                  className={`${styles.slot} ${selection && selection.dayIdx === dayIdx && i === selection.startIdx ? styles.selected : ''}`}
                  title={`Reservar ${formatDM(d)} ${t}`}
                  onClick={() => {
                    if (i >= slots.length - 1) {
                      setNotice('Elegí una hora de inicio válida (no al final del día).')
                      return
                    }
                    setSelection({ dayIdx, startIdx: i })
                    setModalEndIdx(null) // reset end until modal
                    setNotice(`Inicio seleccionado: ${formatDM(d)} ${t} · ${branch} · ${court}`)
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
          <div
            className={`${styles.modal} ${branch === 'Jose Leon Suarez' ? styles.themeBlue : styles.themeGreen}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.modalTitle}>Confirmar reserva</h3>
            <div className={styles.modalBody}>
              <p><strong>Sucursal:</strong> {branch}</p>
              <p><strong>Cancha:</strong> {court}</p>
              <p>
                <strong>Inicio:</strong> {formatDM(days[selection.dayIdx])}{' '}
                {slots[selection.startIdx]}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginTop: '.25rem' }}>
                <label style={{ fontWeight: 600 }}>Hasta:</label>
                <CustomSelect
                  value={modalEndIdx != null ? slots[modalEndIdx] : ''}
                  onChange={(val) => {
                    const idx = slots.findIndex(s => s === val)
                    setModalEndIdx(idx >= 0 ? idx : null)
                  }}
                  options={(() => {
                    const start = selection.startIdx
                    // End options: strictly after start
                    return slots.slice(start + 1).map(v => ({ label: v, value: v }))
                  })()}
                  ariaLabel="Hora de fin"
                  placeholder="Seleccionar fin"
                />
              </div>
            </div>
            <div className={styles.modalActions}>
              <button className={styles.secondaryBtn} onClick={() => setOpenModal(false)}>Cancelar</button>
              <button
                className={styles.primaryBtn}
                onClick={() => {
                  const d = days[selection.dayIdx]
                  const start = slots[selection.startIdx]
                  // If no end picked yet, default to +1 hour
                  const fallbackEndIdx = Math.min(selection.startIdx + 1, slots.length - 1)
                  const endIdx = modalEndIdx != null && modalEndIdx > selection.startIdx ? modalEndIdx : fallbackEndIdx
                  const end = slots[endIdx]
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
