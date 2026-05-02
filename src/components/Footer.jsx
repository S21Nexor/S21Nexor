import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>S21<span>Nexor</span></a>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} S21Nexor. Built with React &amp; Vite.
        </p>
        <nav className={styles.links}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
