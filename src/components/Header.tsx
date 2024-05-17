import styles from './Header.module.css' 

import foguetinho from '../assets/foguetinho.svg'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={foguetinho} alt="ícone de foguete" />
        <strong className={styles.to}>to</strong><strong className={styles.do}>do</strong>
    </header>
  )
}