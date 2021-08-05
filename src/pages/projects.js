import * as React from 'react'
import Layout from '../components/layout'
import ProjectCard from '../components/project_card'
import {
  projectContainer
} from "../styles/projects.module.css"

const projects = [
  {
    title: "Scale Explorer",
    description: `Curious about the phrygian dominant scale? How 
                  about the Japanese Hirajōshi scale? This c++ 
                  application flexibly parses scales in json, 
                  and represents them as an interactive pie 
                  graph playable with a built-in synthesizer.`,
    image: "scaleExplorer.png",
    link: "https://github.com/nd-0r/ScalePieGraph",
    draft: false
  },
  {
    title: "This",
    description: `So meta, right? This is my website built with ReactJS and 
                  styled with CSS using the static site generator Gatsby, 
                  hosted on Netlify.`,
    image: "penrose.png",
    link: "https://github.com/nd-0r/andreworals.com",
    draft: false
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r",
    draft: true
  }
]

const Projects = () => {
  return (
    <Layout pageTitle="Projects">
    <div className={projectContainer}>
      {projects.map(project => (
        !project.draft ? <ProjectCard {...project}/> : null
      ))}
    </div>
    <p style={{textAlign: 'center', fontWeight: 'bold'}}>
      ...more coming soon!
    </p>
    </Layout>
  )
}

export default Projects;