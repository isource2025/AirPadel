'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.title}>Contactanos</h2>
            <p className={styles.description}>
              ¿Tienes alguna pregunta o quieres reservar una cancha? 
              Estamos aquí para ayudarte.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactText}>
                  <h4>Teléfono</h4>
                  <p>+54 11 1234-5678</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div className={styles.contactText}>
                  <h4>Email</h4>
                  <p>info@airpadel.com</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕒</div>
                <div className={styles.contactText}>
                  <h4>Horarios</h4>
                  <p>Lun - Dom: 6:00 - 24:00</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactText}>
                  <h4>Oficina Central</h4>
                  <p>Av. Corrientes 1234, CABA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Nombre" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <input 
                type="text" 
                name="subject"
                placeholder="Asunto" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
              <textarea 
                name="message"
                placeholder="Mensaje" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className={styles.submitBtn}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
