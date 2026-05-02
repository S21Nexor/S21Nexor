import React from 'react'
import styles from './Skills.module.css'

const skills = [
  { name: 'HTML', level: 95, color: '#f97316' },
  { name: 'CSS', level: 90, color: '#3b82f6' },
  { name: 'JavaScript', level: 85, color: '#eab308' },
  { name: 'React', level: 80, color: '#06b6d4' },
  { name: 'Next.js', level: 72, color: '#e8eaf0' },
  { name: 'Firebase', level: 68, color: '#f59e0b' },
  { name: 'GitHub', level: 88, color: '#8b90a0' },
]

const categories = [
  {
    title: 'Frontend',
    icon: '◈',
    items: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React 18', 'Next.js', 'Responsive Design'],
  },
  {
    title: 'Tools & Platforms',
    icon: '◉',
    items: ['Git & GitHub', 'Firebase', 'Vite', 'VS Code', 'Figma'],
  },
  {
    title: 'Specialties',
    icon: '◆',
    items: ['Dashboard UIs', 'Control Panels', 'Clean Architecture', 'Performance Tuning'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>What I know</span>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.sub}>A focused toolkit for building fast, modern web experiences.</p>
        </div>

        <div className={styles.grid}>
          {categories.map(cat => (
            <div key={cat.title} className={styles.card}>
              <div className={styles.cardIcon}>{cat.icon}</div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <ul className={styles.cardList}>
                {cat.items.map(item => (
                  <li key={item} className={styles.cardItem}>
                    <span className={styles.dot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bars}>
          <h3 className={styles.barsTitle}>Proficiency</h3>
          {skills.map((s, i) => (
            <div key={s.name} className={styles.bar} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={styles.barMeta}>
                <span className={styles.barName}>{s.name}</span>
                <span className={styles.barPct}>{s.level}%</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ '--w': `${s.level}%`, '--c': s.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
