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
            Hi there! Welcome to my corner of the internet. I'm a software developer
            from the Chicagoland area majoring in Computer Science and Music 
            at the University of Illinois Urbana/Champaign 🌽.
            <br/>
            <br/>
            When I'm not making <Link to='/projects'>things with code</Link>, 
            I like to play violin, which I've played for about 14 years, or jazz piano. 
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
