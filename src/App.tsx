import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import OurStory from './components/OurStory'
import SignatureDishes from './components/SignatureDishes'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import FindUs from './components/FindUs'
import FooterCta from './components/FooterCta'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-hsk-primary text-white overflow-x-hidden min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <OurStory />
      <SignatureDishes />
      <Testimonials />
      <Experience />
      <FindUs />
      <FooterCta />
      <Footer />
    </main>
  )
}

export default App
