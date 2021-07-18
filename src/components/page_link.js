import * as React from "react"
import { Link } from "gatsby"
import {
  linkContainer,
  pageLinkLink,
  dot
} from "../styles/page-link.module.css"
import {
  linkStyle
} from "../styles/content.module.css"

const PageLink = ({link, text, pageTitle}) => {
  return (
    <div className={linkContainer}>
      <Link className={`${linkStyle} ${pageLinkLink}`} to={link}>{text}</Link>
      {pageTitle === text ? <div className={dot}></div> : null}
    </div>
  )
}

export default PageLink
