import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import PageLink from "./page_link"
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  banner,
  siteTitleStyle,
  headerContainer,
  headerLeft,
  headerRight,
  contentContainer,
  footer,
  githubHead,
  linkedinHead
} from "../styles/layout.module.css"

const pages = [
  {
    id: 2,
    link: "/transcriptions",
    text: "Transcriptions"
  },
  {
    id: 1,
    link: "/projects",
    text: "Projects"
  },
  {
    id: 0,
    link: "/",
    text: "Home"
  }
]

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          myName
        }
      }
    }
  `)

  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={banner}>
        <div className={headerContainer}>
          <div className={headerLeft}>
            <a className={siteTitleStyle} href='/'>{data.site.siteMetadata.myName}</a>
            <StaticImage className={githubHead} src="../images/icon.png" alt="GitHub">
            </StaticImage>
            <StaticImage className={linkedinHead} src="../images/icon.png" alt="Linkedin">
            </StaticImage>
          </div>
          <div className={headerRight}>
            <nav>
              {pages.map(page => (
                <PageLink link={page.link} text={page.text} pageTitle={pageTitle}>
                </PageLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className={contentContainer}>
        {children}
      </div>
      <div className={footer}>
        <p>
          {data.site.siteMetadata.title}
          <br></br>
          <span style={{fontSize: 12}}>
            © {new Date().getFullYear()} {data.site.siteMetadata.myName}, all rights reserved.
          </span>
        </p>
      </div>
    </main>
  )
}

export default Layout
