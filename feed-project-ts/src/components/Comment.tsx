import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from '../components/Comment.module.css';
import { useState } from 'react';

interface CommentProps{
  content: string,
  onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }
  function handleLikeComment() {
    // const addLike = likeCount + 1;
    setLikeCount((state)=>{
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar 
      alt='djsadhasu'
      hasBorder={false}
      src='https://avatars.githubusercontent.com/u/167998547?v=4' />
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
            <button
              onClick={handleDeleteComment}
              className={styles.trashBtn}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            <p>
              Aplaudir &#8226; <span>{likeCount}</span>
            </p>
          </button>
        </footer>
      </div>
    </div>
  );
}
