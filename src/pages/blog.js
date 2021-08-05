import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import PostCard from '../components/blog_post_card'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout pageTitle="Blog">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <PostCard title={post.frontmatter.title} 
                      key={post.id} 
                      image={post.frontmatter.thumbnail} 
                      link={post.frontmatter.path} 
                      description={post.excerpt}/>
          )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query getBlogPostsIndex {
    allMarkdownRemark(
     sort: {order: DESC, fields: frontmatter___date}
     filter: {frontmatter: {draft: {eq: false}, blog: {eq: true}}}
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            thumbnail
          }
          excerpt(pruneLength: 100)
          id
        }
      }
    }
  }
`

export default Blog