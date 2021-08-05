import * as React from 'react'
import { Link } from 'gatsby'
import "../styles/global.css"
import {
  postCardContainer,
  postCard,
  background,
  postImage,
  postCardText,
  postTitle,
  postDescription
} from '../styles/post-card.module.css'

const PostCard = ({title, key, image, link, description}) => {
  return (
    <div className={`${postCardContainer} zoom`} key={key}>
      <Link to={link}>
        <div className={postCard}>
          <div className={background}>
            <img className={postImage} src={image} alt={image}/>
            <div className={postCardText}>
              <h2 className={postTitle}>{title}</h2>
              <p className={postDescription}>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard