import styles from '../css/Post.module.css'
import { Comment } from './Comment'

export function Post(props) {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/114239671?v=4"  />
          <div className={styles.authorInfo}>
            <strong>Vitor Antonionne</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <timer title="11 de maio" dateTime="2022-05-11">Publicado a uma hora</timer>
      </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p> 👉 {' '}<a href="">jane.design/doctorcare</a></p>
          <p>
            <a href="#">#novoprojeto</a> {' '}
            <a href="#">#nlw </a>{' '}
           <a href="#">#rocketseat </a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>

          <textarea 
            placeholder='Deixe seu comentário'
          />
          
          <footer>
            <button type="submit">Comentário</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
    </article>
  )
}