import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from '../components/Post.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
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

  const [comments, setComments] = useState<string[]>([]);
  const [newTextComment, setNewTextComment] = useState('');

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    if (newTextComment === '') {
      return;
    } else {
      setComments([...comments, newTextComment]);
      setNewTextComment('');
    }
  }

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    const currentTextComment = event.target.value;
    setNewTextComment(currentTextComment);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter((comments) => {
      return comments !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  const isNewTextCommentEmpty = newTextComment.length == 0;
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
