import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from '../components/Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src='https://avatars.githubusercontent.com/u/167998547?v=4' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.heading}>
              <strong>
                Leonardo Mendes <span>&#40;você&#41;</span>
              </strong>
              <time
                title='16 de junho às 10:00h'
                dateTime='2024-06-16 10:00:00'>
                Cerca de 1h atrás
              </time>
            </div>
            <button className={styles.trashBtn}>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            <p>
              Aplaudir &#8226; <span>03</span>
            </p>
          </button>
        </footer>
      </div>
    </div>
  );
}
