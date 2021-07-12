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
      <p className={dot}>⋅</p>
    </div>
  )
}

export default PageLink
