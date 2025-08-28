"use client"
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Locations from '../../components/Locations/Locations'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

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
      <Locations />
      <Contact />
      <Footer />
    </>
  )
}
