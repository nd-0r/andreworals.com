import * as React from 'react'
import { Link } from 'gatsby'
import "../styles/global.css"
import {
  postCardContainer,
  postCard,
  postImage,
  postCardText,
  postTitle,
  postDescription
} from '../styles/post-card.module.css'

const PostCard = ({title, key, image, link, description}) => {
  return (
    <div className={postCardContainer} key={key}>
      <Link to={link}>
        <div className={`${postCard} zoom`}>
          <img className={postImage} src={image} alt={title}/>
          <div className={postCardText}>
            <h2 className={postTitle}>{title}</h2>
            <p className={postDescription}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard