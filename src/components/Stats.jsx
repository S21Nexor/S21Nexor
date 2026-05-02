import React, { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const stats = [
  { value: 30, suffix: '+', label: 'Projects Completed', color: 'var(--color-primary)' },
  { value: 2, suffix: '+', label: 'Years of Experience', color: 'var(--color-accent)' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', color: 'var(--color-success)' },
  { value: 5, suffix: '+', label: 'Technologies Mastered', color: 'var(--color-warning)' },
]

function useCountUp(target, started) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [target, started])
  return count
}

function StatCard({ value, suffix, label, color, started }) {
  const count = useCountUp(value, started)
  return (
    <div className={styles.card}>
      <div className={styles.value} style={{ color }}>
        {count}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stats" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>By the numbers</span>
          <h2 className={styles.title}>My Stats</h2>
        </div>
        <div className={styles.grid}>
          {stats.map(s => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
