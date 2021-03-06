import * as React from 'react'
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import PostCard from '../components/blog_post_card'

const Transcriptions = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout pageTitle="Transcriptions">
      {posts.length !== 0 ? 
       posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <PostCard title={post.frontmatter.title} 
                      key={post.id} 
                      image={post.frontmatter.thumbnail} 
                      link={post.frontmatter.path} 
                      description={post.excerpt}/>
          )
      }) : <p style={{fontWeight: 'bold'}}>Coming Soon!</p>}
      <div style={{textAlign: 'center', fontWeight: 'bold'}}>
        Explore my <Link to="/blog">weblog</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query getTranscriptionPostsIndex {
    allMarkdownRemark(
     sort: {order: DESC, fields: frontmatter___date}
     filter: {frontmatter: {draft: {eq: false}, blog: {eq: false}}}
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

export default Transcriptions