import * as React from 'react'
import {
  projectCardContainer,
  projectCard,
  projectImage,
  projectCardText,
  projectTitle,
  projectDescription
} from '../styles/project-card.module.css'

const ProjectCard = ({title, image, link, description}) => {
  return (
    <div className={projectCardContainer}>
      <div className={projectCard}>
        <a href={link} target={"_blank"} rel={"noreferrer"}>
          <img className={projectImage} src={image} alt={title}/>
        </a>
        <div className={projectCardText}>
          <a className={projectTitle} href={link} target={"_blank"} rel={"noreferrer"}>{title}</a>
          <p className={projectDescription}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard