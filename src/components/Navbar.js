import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import linkedin from '../img/linkedin.svg'
import logo from '../img/richlogo.png'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Rich's logo" style={{ width: '28px' }} />
              </figure>
            </Link>
          </div>
          <div className="navbar-start">
            {data.allWordpressPage.edges.map(edge => (
              <Link
                className="navbar-item"
                to={edge.node.slug}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
            ))}
          </div>
          <div className="navbar-end">

            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/richandrewsfl"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <span className="icon">
                <img src={linkedin} alt="LinkedIn" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
