import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from '../css/Post.module.css'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt)
  const [coments, setComent] = useState([
    'Post muito bacana em !',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComent([...coments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = coments.filter(comment => {
      return comment !== commentToDelete
    })
    setComent(commentsWithoutDeletedOne)
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl}  />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

        <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p  key={line.content}>{line.content}</p>;
            } else if(line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>

          <textarea
            onChange={handleNewCommentChange}
            value = {newCommentText}
            placeholder='Deixe seu comentário'
          />
          
          <footer>
            <button type="submit">Comentário</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {coments.map(coment => {
            return (
              <Comment 
              key={coment} 
              content={coment} 
              onDeleteComment={deleteComment}
            />
          )
          })}
        </div>
    </article>
  )
}