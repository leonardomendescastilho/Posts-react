import styles from '../components/Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.authorAvatar}
            src='https://avatars.githubusercontent.com/u/40183495?v=4'
          />
          <div className={styles.authorInfo}>
            <strong>Nathan</strong>
            <span>Dev Back-End</span>
          </div>
        </div>
        <time
          className={styles.timeInfo}
          title='11 de julho às 18:22'
          dateTime='2024-06-14 18:22:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
        </p>
        <p>
          projeto que fiz no NLW Return, evento da Rocketseat. O nome doprojeto
          é DoctorCare 🚀
        </p>
        <a href='#'>
          <p>👉 jane.design/doctorcare</p>
        </a>
        <p>
          <a href='#'>#novoprojeto </a>
          <a href='#'>#nlw </a>
          <a href='#'>#rocketseat </a>
        </p>
      </div>
    </article>
  );
}
