import React from 'react'
import { supabase } from '../lib/supabase'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from './Portfolio.module.css'

export default function Portfolio({ user, onLogout }) {
  const handleLogout = async () => {
    await supabase.auth.signOut()
    onLogout()
  }

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
