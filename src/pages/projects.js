import * as React from 'react'
import Layout from '../components/layout'
import ProjectCard from '../components/project_card'
import {
  projectContainer
} from "../styles/projects.module.css"

const projects = [
  {
    title: "Granular Synthesizer",
    description: `A polyphonic synthesizer using pitch-synchronous
                  overlap add to play tones composed of short samples
                  of a source, all with ADSR enveloping.`,
    link: "https://github.com/nd-0r/GranularSynth/",
    image: "granularsynth.png",
    draft: false
  },
  {
    title: "Distributed Logging",
    description: `A distributed log-querying system written in the Go
                  programming language. Includes full end-to-end tests.`,
    image: "dlogging.png",
    link: "https://github.com/nd-0r/DistributedLogging",
    draft: false
  },
  {
    title: "Menubar Host",
    description: `Ever wanted to run some plugins without pulling up a 
                  full-on digital audio workstation? This is a small
                  application that lives in the menubar for hosting 
                  AudioUnit plugins.`,
    image: "",
    link: "https://github.com/nd-0r/MenubarHost",
    draft: true
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
    description: `This is my website 
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
  },
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
  }
]

const Projects = () => {
  return (
    <Layout pageTitle="Projects">
    <div className={projectContainer}>
      {projects.map(project => (
        project.draft ? null : <ProjectCard {...project} external={true}/>
      ))}
    </div>
    </Layout>
  )
}

export default Projects;