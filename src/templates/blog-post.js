import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { blogPost, blogPostContent } from "../styles/blog.module.css"


const BlogPost = ({data}) => {
  const {markdownRemark: post} = data
  
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <div className={blogPost}>
        <h1>{post.frontmatter.title}</h1>
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