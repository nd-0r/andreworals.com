import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import "../styles/global.css"
import {
  projectCardContainer,
  projectCard,
  projectImage,
  projectCardText,
  projectTitle,
  projectDescription
} from '../styles/project-card.module.css'

const ProjectCard = ({title, image, link, description, external}) => {
  return (
    <div className={`${projectCardContainer} zoom`}>
      <div className={projectCard}>
        {
          external ? 
          <a href={link} target={"_blank"} rel={"noreferrer"}>
            <GatsbyImage className={projectImage} image={image} alt={title}/>
          </a>
          :
          <Link to={link}>
            <GatsbyImage className={projectImage} image={image} alt={title}/>
          </Link>
        }
        <div className={projectCardText}>
          {
            external ? 
            <a className={projectTitle} href={link} target={"_blank"} rel={"noreferrer"}>{title}</a>
            :
            <Link className={projectTitle} to={link}>{title}</Link>
          }
          <p className={projectDescription}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard