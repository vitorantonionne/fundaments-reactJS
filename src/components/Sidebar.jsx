import { PencilLine } from'@phosphor-icons/react'

import styles from '../css/Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <div className={styles.profile}>
        <Avatar hasBorder src="https://avatars.githubusercontent.com/u/114239671?v=4" />
        
        <strong>Vitor Antonionne</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}