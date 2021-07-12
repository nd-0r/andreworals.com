import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import {
  aboutContainer,
  bioTextContainer,
  bioImage
} from "../styles/about.module.css"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Index">
      <div className={aboutContainer}>
        <div className={bioTextContainer}>
          <p>bio bio bio</p>
        </div>
        <StaticImage className={bioImage} src="../images/icon.png" alt="andrew orals"></StaticImage>
      </div>
    </Layout>
  )
}

export default IndexPage
