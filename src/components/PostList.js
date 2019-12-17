import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Projects I Am Proud Of</h1>
          </div>
          {posts.map(({ node: post }) => (
            <div
              className="content posthp"
              style={{ border: '1px solid #eaecee', padding: '2em 4em'}}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.slug}>
                  {post.title}
                </Link>
                <span> &bull; </span>
                <small>
                  {post.date}
                </small>
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                  }}
                />
                <br></br>
                <Link className="button is-small" to={post.slug}>
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="content" style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '25px' }}>
           <p>Made with ❤️ in West Palm Beach, FL using <a href="https://www.gatsbyjs.org/">GatsbyJS</a> </p>
           </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
