import * as React from 'react'
import Layout from '../components/layout'
import ProjectCard from '../components/project_card'
import {
  projectContainer
} from "../styles/projects.module.css"

const projects = [
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  },
  {
    title: "Foobar",
    description: "look at my foobar!",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1680706%2Fnational-cookie-day.jpg",
    link: "https://github.com/nd-0r"
  }
]

const Projects = () => {
  return (
    <Layout pageTitle="Projects">
    <div className={projectContainer}>
      {projects.map(project => (
        <ProjectCard {...project}/>
      ))}
    </div>
    </Layout>
  )
}

export default Projects;