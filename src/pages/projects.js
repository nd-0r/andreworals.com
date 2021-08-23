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
    title: "Musical Emergence",
    description: `A midi processing plugin that I created to learn
                  more about the JUCE plugin framework and the sweep
                  and prune algorithm. Use it to create mesmerizing 
                  soundscapes and have some fun with particle physics!`,
    image: "synchrony.png",
    link: "https://github.com/nd-0r/MusicalEmergence",
    draft: false
  },
  {
    title: "This",
    description: `At the risk of being too meta, This is my website 
                  built with ReactJS and styled with CSS using the 
                  static site generator Gatsby, hosted on Netlify.`,
    image: "penrose.png",
    link: "https://github.com/nd-0r/andreworals.com",
    draft: false
  },
  {
    title: "Towers of Hanoi",
    description: `A small game I wrote in pure JS, HTML5, and CSS to illustrate
                  the iconic Towers of Hanoi puzzle. Let me know if 
                  you can move all the disks to the final peg in less
                  than 2^n moves :)`,
    image: "toh.png",
    link: "https://github.com/nd-0r/TowersOfHanoi",
    draft: false
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