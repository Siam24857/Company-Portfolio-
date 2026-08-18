'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/HowItWorks'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import About from '@/components/About'

const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && <CustomCursor />}
      <main>
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <WhyChooseUs />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
