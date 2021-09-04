import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import PageLink from './page_link'
import {
  navDrawer,
  linkContainer,
  topButtons,
  closeBtn,
  githubHeadWrapper,
  githubHead,
  spacer,
  linkedinHeadWrapper,
  linkedinHead,
  hamburgerContainer,
  hamburgerMenu
} from "../styles/nav-drawer.module.css"

class NavDrawer extends React.Component {
  state = {drawerOpen: false};

  toggleDrawer = () => {
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  render() {
    return (
      this.state.drawerOpen ? 
      <div className={navDrawer}>
        <div className={topButtons}>
          <a href='#' onClick={this.toggleDrawer}>
            <svg className={closeBtn} viewBox="0 0 371.23 371.23">
              <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 
              164.402,185.615 0,350.018 21.213,371.23 185.615,206.828 350.018,371.23 
              371.23,350.018 206.828,185.615 " fill="#ffffff"/>
            </svg>
          </a>
          <a className={githubHeadWrapper} href='https://github.com/nd-0r' target='_blank' rel='noreferrer'>
            <StaticImage className={`${githubHead} zoom`} src="../images/GitHub-Mark-Light-120px-plus.png" alt="GitHub"/>
          </a>
          <a className={linkedinHeadWrapper} href='https://www.linkedin.com/in/andrew-orals-06aa451b7/' target='_blank' rel='noreferrer'>
            <StaticImage className={`${linkedinHead} zoom`} src="../images/LI-In-Bug-Light.png" alt="Linkedin"/>
          </a>
          <span className={spacer}/>
        </div>
        {this.props.pages.slice(0).reverse().map(page => (
          <div className={linkContainer}>
            <PageLink link={page.link} text={page.text} pageTitle={this.props.pageTitle}/>
            <br/>
          </div>
        ))}
      </div>
      :
      <a href='#' onClick={this.toggleDrawer}>
        <div className={hamburgerContainer}>
          <svg className={hamburgerMenu} viewBox="0 0 48 48">
            <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#ffffff"/>
            <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#ffffff"/>
            <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#ffffff"/>
          </svg>
        </div>
      </a>
    )
  }
}

export default NavDrawer