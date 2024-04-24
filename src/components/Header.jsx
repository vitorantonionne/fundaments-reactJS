import styles from '../css/Header.module.css'
import igniteLogo from '../assets/logo-ignite.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo Ignite"/>
      <strong>Ignite Feed</strong>
    </header>
  ) 
}