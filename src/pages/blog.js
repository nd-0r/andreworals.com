import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import PostCard from '../components/blog_post_card'
import ProjectCard  from '../components/project_card'
import {
  postsWide,
  postsTall,
  postsContainer
} from '../styles/blog.module.css'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout pageTitle="Blog">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className={postsContainer}>
              <div className={postsWide}>
                <PostCard title={post.frontmatter.title} 
                          key={post.id} 
                          image={post.frontmatter.thumbnail} 
                          link={post.frontmatter.path} 
                          description={post.excerpt}/>
              </div>
              <div className={postsTall}>
                <ProjectCard title={post.frontmatter.title} 
                             image={post.frontmatter.thumbnail}
                             link={post.frontmatter.path}
                             description={post.excerpt}
                             external={false}/>
              </div>
            </div>
          )
      })}
      <p style={{textAlign: 'center', fontWeight: 'bold', color: 'gray'}}>
        ...more music writing in the works
      </p>
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
