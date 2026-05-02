import React, { useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Admin Dashboard Pro',
    desc: 'A fully-featured analytics and control panel with real-time data visualizations, user management, and role-based access control.',
    tags: ['React', 'Firebase', 'CSS'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&w=800',
    category: 'Dashboard',
  },
  {
    title: 'Portfolio Studio',
    desc: 'A customizable portfolio builder with drag-and-drop sections, live preview, and one-click deployment.',
    tags: ['Next.js', 'JavaScript', 'Firebase'],
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&w=800',
    category: 'Web App',
  },
  {
    title: 'E-Commerce Dashboard',
    desc: 'Clean storefront management panel for tracking orders, inventory, and revenue analytics in real time.',
    tags: ['React', 'Firebase', 'CSS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&w=800',
    category: 'Dashboard',
  },
  {
    title: 'Dev Landing Page',
    desc: 'A high-performance marketing landing page with animations, dark mode, and optimized Core Web Vitals.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&w=800',
    category: 'Website',
  },
  {
    title: 'Task Manager App',
    desc: 'Productivity app with kanban boards, due dates, drag-and-drop tasks, and Firebase real-time sync.',
    tags: ['React', 'Firebase', 'JavaScript'],
    image: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&w=800',
    category: 'Web App',
  },
  {
    title: 'Blog CMS',
    desc: 'Headless blog platform with a rich text editor, image uploads, draft/publish workflow, and SEO tools.',
    tags: ['Next.js', 'Firebase', 'CSS'],
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&w=800',
    category: 'Website',
  },
]

const filters = ['All', 'Dashboard', 'Web App', 'Website']

export default function Projects() {
  const [active, setActive] = useState('All')

  const visible = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.sub}>A selection of work that demonstrates my range and craft.</p>
        </div>

        <div className={styles.filters}>
          {filters.map(f => (
            <button
              key={f}
              className={`${styles.filter} ${active === f ? styles.filterActive : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visible.map(p => (
            <div key={p.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={p.image} alt={p.title} className={styles.img} loading="lazy" />
                <div className={styles.overlay}>
                  <span className={styles.category}>{p.category}</span>
                </div>
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
