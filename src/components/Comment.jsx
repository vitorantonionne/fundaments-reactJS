import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from '../css/Comment.module.css'
import { Avatar } from './Avatar'


export function Comment({ content }) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/114239671?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Antonionne</strong>
              <timer title="11 de maio" dateTime="2022-05-11">Cerca de 1 h atrás</timer>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}