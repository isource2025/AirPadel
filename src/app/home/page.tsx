"use client"
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import FoodBanner from '../../components/FoodBanner/FoodBanner'
import Locations from '../../components/Locations/Locations'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import WhatsAppButton from '../../components/Shared/WhatsAppButton'

export default function HomePage() {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <Hero
        onLoginSuccess={(name: string) => {
          try {
            localStorage.setItem('pp_user_name', name)
          } catch {}
          router.replace('/app')
        }}
      />
      <About />
      <Services />
      <div style={{ padding: '0 1rem', margin: '1rem 0' }}>
        <FoodBanner />
      </div>
      <Locations />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
