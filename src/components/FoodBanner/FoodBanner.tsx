"use client"
import { useEffect, useMemo, useState } from "react"
import styles from "./FoodBanner.module.css"

type FoodBannerProps = {
  title?: string
  description?: string
  kicker?: string
  ctaPrimaryText?: string
  ctaPrimaryHref?: string
  ctaSecondaryText?: string
  ctaSecondaryHref?: string
  images?: string[]
  autoPlayMs?: number
}

export default function FoodBanner({
  title = "Energizá tu partido",
  description = "Descubrí nuestra carta con sandwiches, wraps, frutas y bebidas. Todo fresco y listo para después de tu partido.",
  kicker = "Nuevo · Food & Drinks",
  ctaPrimaryText = "Ver carta",
  ctaPrimaryHref = "#menu",
  ctaSecondaryText = "Reservar mesa",
  ctaSecondaryHref = "#reservas",
  images,
  autoPlayMs = 3500,
}: FoodBannerProps) {
  const slides = useMemo(
    () =>
      images ?? [
        // URLs directas para no requerir configurar next/image domains
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      ],
    [images]
  )

  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length)
    }, autoPlayMs)
    return () => clearInterval(id)
  }, [slides.length, autoPlayMs])

  return (
    <section className={styles.banner} aria-label="Food & Drinks">
      <div className={styles.content}>
        <span className={styles.kicker}>{kicker}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.actions}>
          <a href={ctaPrimaryHref} className={styles.cta}>{ctaPrimaryText}</a>
          <a href={ctaSecondaryHref} className={`${styles.cta} ${styles.secondary}`}>{ctaSecondaryText}</a>
        </div>
      </div>
      <div className={styles.carousel}>
        {slides.map((src, i) => (
          <div key={i} className={`${styles.slide} ${i === idx ? styles.active : ""}`}>
            <img src={src} alt="Gastronomía en Air Padel" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        <button className={`${styles.navBtn} ${styles.navLeft}`} aria-label="Anterior" onClick={() => setIdx((idx - 1 + slides.length) % slides.length)}>‹</button>
        <button className={`${styles.navBtn} ${styles.navRight}`} aria-label="Siguiente" onClick={() => setIdx((idx + 1) % slides.length)}>›</button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <span key={i} className={`${styles.dot} ${i === idx ? styles.active : ""}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
