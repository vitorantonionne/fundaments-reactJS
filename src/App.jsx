import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './css/App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <aside>
          sidebar
        </aside>
        <main>
          <Post 
            author="Vitor Antonionne"
            content="Lorem ipsum dolor sit amet consectetur adipisic"
          />
          <Post 
            author="Vitor Antonionne"
            content="Lorem ipsum dolor sit amet consectetur adipisic"
          />
        </main>
      </div>
    </div>
  )
}

