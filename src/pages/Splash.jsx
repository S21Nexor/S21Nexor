import React, { useEffect } from 'react'
import styles from './Splash.module.css'

export default function Splash({ onComplete }) {
  useEffect(() => {
    const logoTimer = setTimeout(() => {
      const logo = document.getElementById('logo')
      if (logo) logo.classList.add(styles.fadeOut)
    }, 2000)

    const cardTimer = setTimeout(() => {
      const cardBox = document.getElementById('cardBox')
      if (cardBox) cardBox.classList.add(styles.showCard)
    }, 2400)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, 4500)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(cardTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className={styles.container}>
      <div className={styles.logo} id="logo">
        <svg viewBox="0 0 100 100">
          <polygon points="10,10 80,10 70,25 20,25" fill="#22c55e" />
          <polygon points="10,35 60,35 50,50 10,50" fill="#22c55e" />
          <polygon points="10,60 40,60 30,75 10,75" fill="#22c55e" />
        </svg>
      </div>

      <div className={styles.cardBox} id="cardBox">
        <div className={styles.card}>
          <div className={styles.chip} />
          <div className={styles.number}>9760 **** 5055 7007</div>
          <div className={styles.wave} />
        </div>
        <div className={styles.text}>
          The Right to <span>Pay</span>
        </div>
      </div>
    </div>
  )
}
