'use client'
import { useState } from 'react'
import styles from './LoginModal.module.css'

interface LoginModalProps {
  onClose: () => void
  onLoginSuccess?: (userName: string) => void
}

export default function LoginModal({ onClose, onLoginSuccess }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      // Hardcoded credentials: Usuario / Usuario
      if (formData.email === 'Usuario' && formData.password === 'Usuario') {
        setError('')
        onLoginSuccess && onLoginSuccess(formData.email)
        onClose()
        return
      } else {
        setError('Credenciales inválidas. Usa Usuario / Usuario')
        return
      }
    }
    // Sign up flow placeholder
    console.log('Form submitted:', formData)
    onClose()
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    })
    setError('')
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
          <p className={styles.modalSubtitle}>
            {isLogin 
              ? 'Accede a tu cuenta para reservar canchas' 
              : 'Únete a Air Padel y reserva tu primera cancha'
            }
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {error && (
            <div className={styles.error} role="alert">{error}</div>
          )}
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          )}
          
          <input
            type="text"
            name="email"
            placeholder={isLogin ? 'Usuario' : 'Email'}
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.input}
          />
          
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={styles.input}
            />
          )}

          <button type="submit" className={styles.submitBtn}>
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </button>
        </form>

        <div className={styles.modalFooter}>
          <p>
            {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
            <button 
              type="button" 
              className={styles.toggleBtn}
              onClick={toggleMode}
            >
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
