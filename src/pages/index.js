import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import {
  aboutContainer,
  bioTextContainer,
  imageContainer,
  bioImage
} from "../styles/about.module.css"
import { Link, graphql } from "gatsby"

// markup
const IndexPage = ({data}) => {
  const image = getImage(data.file);
  return (
    <Layout pageTitle="Home">
      <div className={aboutContainer}>
        <div className={bioTextContainer}>
          <p>
            Hi there! I'm a software developer
            from the Chicagoland area majoring in Computer Science and Music 
            with a minor in Statistics at the University of Illinois Urbana/Champaign 🌽.
            <br/>
            <br/>
            I've worked as a research intern at UIUC's <Link to='https://www.ncsa.illinois.edu'>
            National Center for Supercomputing Applications
            </Link> and a software engineer intern at John Deere.
            <br/>
            <br/>
            I'm currently a lead course assistant for <Link to='http://cs341.cs.illinois.edu/syllabus.html'>
            CS 341: Systems Programming at UIUC
            </Link> and a software engineer intern at <Link to='https://hyannisportresearch.com'>
            Hyannis Port Research
            </Link>.
            <br/>
            <br/>
            When I'm not making <Link to='/projects'>things with code</Link>, 
            I'm probably listening to or making music – violin and piano being my instruments of choice.
            I also enjoy spending time outside biking or swimming in my free time.
            <br/>
            <br/>
            Thanks for stopping by!
          </p>
        </div>
        <div className={imageContainer}>
          <GatsbyImage className={bioImage} image={image} alt="andrew orals"/>
        </div>
      </div>
    </Layout>
  )
}

export const imgQuery = graphql`
  query getImage {
    file(extension: {eq: "jpg"}, name: {eq: "city"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 300, height: 400, formats: WEBP)
      }
    }
  }
`

export default IndexPage
