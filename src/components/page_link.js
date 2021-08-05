import * as React from "react"
import { Link } from "gatsby"
import {
  linkContainer,
  pageLinkLinkInactive,
  pageLinkLinkActive,
  dot
} from "../styles/page-link.module.css"

const PageLink = ({link, text, pageTitle}) => {
  return (
    <div className={linkContainer}>
      <Link className={(pageTitle === text ? pageLinkLinkActive : pageLinkLinkInactive)} to={link}>{text}</Link>
      {pageTitle === text ? <div className={dot}></div> : null}
    </div>
  )
}

export default PageLink
