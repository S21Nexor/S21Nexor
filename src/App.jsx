import React, { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Splash from './pages/Splash'
import Login from './pages/Login'
import Register from './pages/Register'
import Portfolio from './pages/Portfolio'

export default function App() {
  const [state, setState] = useState('splash')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })
  }, [])

  if (loading) return <div style={{ background: 'var(--color-bg)', height: '100vh' }} />

  if (state === 'splash') {
    return <Splash onComplete={() => setState('login')} />
  }

  if (state === 'login') {
    return <Login onSuccess={() => setState('portfolio')} />
  }

  if (state === 'register') {
    return <Register onSuccess={() => setState('portfolio')} />
  }

  if (user) {
    return <Portfolio user={user} onLogout={() => { setUser(null); setState('login') }} />
  }

  return <Login onSuccess={() => setState('portfolio')} />
}
