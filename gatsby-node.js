const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        limit: 2000
        filter: {frontmatter: {draft: {eq: false}}}
      ) {
        edges {
          node {
            frontmatter {
              path
              date
              title
              thumbnail
              draft
              blog
            }
            html
          }
        }
      }
    }
  `)
  
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        post: node
      }
    })
  })
}
