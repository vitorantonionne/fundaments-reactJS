import styles from '../css/Post.module.css'

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

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          </p>
          <p> 👉 <a href="">jane.design/doctorcare</a></p>
          <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
        </div>
      </header>
    </article>
  )
}