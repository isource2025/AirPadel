"use client"
import styles from './WhatsAppButton.module.css'

const PHONE = '+5491122600030'
const MESSAGE = encodeURIComponent('Hola! Me gustaría hacer una consulta 😊')

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${MESSAGE}`
  return (
    <a
      href={href}
      aria-label="Chatear por WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.waButton}
    >
      <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <path fill="currentColor" d="M19.11 17.56c-.26-.13-1.54-.76-1.78-.85s-.41-.13-.58.13s-.67.85-.82 1.03s-.3.19-.56.06a6.62 6.62 0 0 1-1.95-1.21a7.32 7.32 0 0 1-1.35-1.67c-.14-.26 0-.4.1-.53s.26-.3.38-.46s.16-.26.24-.43s.04-.32-.02-.45s-.58-1.39-.8-1.91c-.21-.51-.42-.44-.58-.45h-.5a.96.96 0 0 0-.68.32a2.86 2.86 0 0 0-.9 2.12a4.97 4.97 0 0 0 1.03 2.62a11.35 11.35 0 0 0 4.33 3.96c.6.26 1.07.41 1.43.53c.6.19 1.15.16 1.58.1a2.88 2.88 0 0 0 1.89-1.34c.23-.38.23-.9.16-.99s-.23-.14-.49-.27m-3.07 5.61h-.01a8.51 8.51 0 0 1-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.47 8.47 0 1 1 7 3.86M25.45 6.55A11.96 11.96 0 0 0 16.01 3c-6.61.01-12 5.39-12 12.02a11.9 11.9 0 0 0 1.63 6l-1.73 6.32l6.46-1.69a12.02 12.02 0 0 0 5.63 1.43h.01c6.63 0 12.02-5.39 12.02-12.03a11.96 11.96 0 0 0-3.58-8.5"/>
      </svg>
    </a>
  )
}
