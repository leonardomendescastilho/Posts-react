import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from '../components/Post.module.css';
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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

  const contentDisplay = content.map((line) => {
    if (line.type === 'paragraph') {
      return <p key={line.content}>{line.content}</p>;
    } else if (line.type === 'link') {
      return (
        <p key={line.content}>
          <a href='#'></a>
          {line.content}
        </p>
      );
    }
  });

  const [comments, setComments] = useState([]);
  const [newTextComment, setNewTextComment] = useState('');

  function handleCreateNewComment(event) {
    event.preventDefault();
    if (newTextComment === '') {
      return;
    } else {
      setComments([...comments, newTextComment]);
      setNewTextComment('');
    }
  }

  function handleNewCommentText(event) {
    event.target.setCustomValidity('');
    const currentTextComment = event.target.value;
    setNewTextComment(currentTextComment);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comments) => {
      return comments !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  const isNewTextCommentEmpty = newTextComment.length == 0
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

      <div className={styles.content}>{contentDisplay}</div>

      <form
        onSubmit={handleCreateNewComment}
        className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newTextComment}
          onChange={handleNewCommentText}
          onInvalid={handleNewCommentInvalid}
          placeholder='Escreva um comentário'
          required
        />
        <div>
          <button
            type='submit'
            disabled={isNewTextCommentEmpty}>
            Publicar
          </button>
        </div>
      </form>
      <div className={styles.commentList}>
        {comments.map((userComment) => {
          return (
            <Comment
              onDeleteComment={deleteComment}
              key={userComment}
              content={userComment}
            />
          );
        })}
      </div>
    </article>
  );
}
