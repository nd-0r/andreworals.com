import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { 
  navHeader,
  backButton,
  postTitle,
  blogPost, 
  blogPostContent 
} from "../styles/blog.module.css"


const BlogPost = ({data}) => {
  const {markdownRemark: post} = data
  
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <div className={navHeader}>
        <div className={backButton}>
          <Link to='/blog'>Back to the Blog</Link>
        </div>
        <h1 className={postTitle}>{post.frontmatter.title}</h1>
      </div>
      <div className={blogPost}>
        <div
          className={blogPostContent}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default BlogPost