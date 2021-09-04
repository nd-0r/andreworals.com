import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import PostCard from '../components/blog_post_card'
import ProjectCard  from '../components/project_card'
import useWindowWidth from '../components/use_window_width'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  var width = useWindowWidth();

  return (
    <Layout pageTitle="Blog">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            width > 800 ?
            <PostCard title={post.frontmatter.title} 
                      key={post.id} 
                      image={post.frontmatter.thumbnail} 
                      link={post.frontmatter.path} 
                      description={post.excerpt}/> :
            <ProjectCard title={post.frontmatter.title} 
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