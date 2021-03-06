import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import PageLink from "./page_link"
import NavDrawer from "./nav_drawer"
import { useStaticQuery, graphql } from 'gatsby'
import "../styles/global.css"
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
  linkedinHead,
  navLinks,
  navDrawer
} from "../styles/layout.module.css"
import "../styles/content.css"

const pages = [
  {
    id: 2,
    link: "/blog",
    text: "Blog"
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
        <header className={headerContainer}>
          <div className={headerLeft}>
            <a className={siteTitleStyle} href='/'>{data.site.siteMetadata.myName}</a>
            <a href='https://github.com/nd-0r' target='_blank' rel='noreferrer'>
              <StaticImage className={`${githubHead} zoom`} src="../images/GitHub-Mark-Light-120px-plus.png" alt="GitHub"/>
            </a>
            <a href='https://www.linkedin.com/in/andrew-orals-06aa451b7/' target='_blank' rel='noreferrer'>
              <StaticImage className={`${linkedinHead} zoom`} src="../images/LI-In-Bug-Light.png" alt="Linkedin"/>
            </a>
          </div>
          <div className={headerRight}>
            <nav>
              <div className={navLinks}>
                {pages.map(page => (<PageLink link={page.link} text={page.text} pageTitle={pageTitle}/>))}
              </div>
              <div className={navDrawer}>
                <NavDrawer pages={pages} pageTitle={pageTitle}/>
              </div>
            </nav>
          </div>
        </header>
      </div>
      <div className={`${contentContainer} content`}>
        {children}
      </div>
      <footer className={footer}>
        <p>
          {data.site.siteMetadata.title}
          <br></br>
          <span style={{fontSize: 12}}>
            ?? {new Date().getFullYear()} {data.site.siteMetadata.myName}, all rights reserved.
          </span>
        </p>
      </footer>
    </main>
  )
}

export default Layout
