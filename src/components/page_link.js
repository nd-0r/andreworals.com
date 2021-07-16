import * as React from "react"
import { Link } from "gatsby"
import {
  linkContainer,
  pageLinkLink,
  dot
} from "../styles/page-link.module.css"

const PageLink = ({link, text}) => {
  return (
    <div className={linkContainer}>
      <Link className={pageLinkLink} to={link}>{text}</Link>
      <div className={dot}></div>
    </div>
  )
}

export default PageLink
