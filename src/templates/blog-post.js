import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { 
  navHeader,
  backButton,
  postTitle,
  postTitleSmall,
  postTitleBigAgain,
  blogPost, 
  blogPostContent 
} from "../styles/blog.module.css"
class BlogPost extends React.Component {
  state = {scroll_amount: 0,
           scrolled: false};

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || 
                      document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight -
                  document.documentElement.clientHeight;

    const scrolled = winScroll / height

    if (scrolled > 0.078) {
      this.setState({scrolled: true});
    }

    this.setState({scroll_amount: scrolled});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  render() {
    const post = this.props.pageContext.post
    return (
      <Layout pageTitle={post.frontmatter.title}>
        <div className={navHeader}>
          <div className={backButton}>
            <Link to='/blog'>Back to the Blog</Link>
          </div>
          {
            this.state.scroll_amount > 0.078 ? 
              <h1 className={postTitleSmall}>{post.frontmatter.title}</h1> : null
          }
          {
            this.state.scrolled && this.state.scroll_amount <= 0.078 ? <h1 className={`${postTitle} ${postTitleBigAgain}`}>{post.frontmatter.title}</h1> : null
          }
          {
            !this.state.scrolled && this.state.scroll_amount <= 0.078 ? <h1 className={postTitle}>{post.frontmatter.title}</h1> : null
          }
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