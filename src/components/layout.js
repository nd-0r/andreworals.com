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
  footer
} from "../styles/layout.module.css"

const pages = [
  {
    id: 0,
    link: "/",
    text: "Home"
  },
  {
    id: 1,
    link: "/projects",
    text: "Projects"
  },
  {
    id: 2,
    link: "/blog",
    text: "Weblog"
  },
]

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
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
            <h1 className={siteTitleStyle}>{data.site.siteMetadata.title}</h1>
            <StaticImage className="github-head" src="" alt="GitHub"></StaticImage>
            <StaticImage className="linkedin-head" src="" alt="Linkedin"></StaticImage>
          </div>
          <div className={headerRight}>
            <nav>
              {pages.map(page => (
                <PageLink link={page.link} text={page.text}></PageLink>
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
          © {new Date().getFullYear()} Andrew Orals, all rights reserved
        </p>
      </div>
    </main>
  )
}

export default Layout
