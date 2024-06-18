import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from '../components/Post.module.css';

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const contentDisplay =  content.map((line) => {
    if (line.type === 'paragraph') {
      return <p>{line.content}</p>;
    } else if(line.type === 'link'){
      return <p><a href="#"></a>{line.content}</p>
    }
  })

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          className={styles.timeInfo}
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
       {contentDisplay}
      </div>

      <form className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Nossa, adorei amigo, parabéns!' />
        <div>
          <button type='submit'>Publicar</button>
        </div>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
