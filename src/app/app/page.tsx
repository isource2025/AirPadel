"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Turnos from '../../components/Turnos/Turnos'
import Events from '../../components/Eventos/Events'
import spaStyles from '../spa.module.css'
import WhatsAppButton from '../../components/Shared/WhatsAppButton'

export default function AppPage() {
  const router = useRouter()
  const [userName, setUserName] = useState<string>('')
  const [activeView, setActiveView] = useState<'turnos' | 'eventos'>('turnos')

  useEffect(() => {
    try {
      const name = localStorage.getItem('pp_user_name') || ''
      setUserName(name)
      if (!name) router.replace('/home')
    } catch {
      router.replace('/home')
    }
  }, [router])

  const handleLogout = () => {
    try { localStorage.removeItem('pp_user_name') } catch {}
    setUserName('')
    router.replace('/home')
  }

  return (
    <>
      <Navbar />
      <main className={spaStyles.spaMain}>
        <Sidebar
          active={activeView}
          onSelect={(v: 'turnos' | 'eventos') => setActiveView(v)}
          userName={userName}
          onLogout={handleLogout}
        />
        <section className={spaStyles.content}>
          <div className={spaStyles.spaHeader}>
            <div>
              <h2 className={spaStyles.spaTitle}>
                {activeView === 'turnos' ? 'Turnos' : 'Torneos & Eventos'}
              </h2>
              <p className={spaStyles.spaSubtitle}>Bienvenido, {userName}</p>
            </div>
          </div>
          {activeView === 'turnos' ? <Turnos /> : <Events />}
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
