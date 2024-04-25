import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from '../css/Comment.module.css'


export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="" alt="" />

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

          <p>opasdkopsdakopdaskopdaskop</p>
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