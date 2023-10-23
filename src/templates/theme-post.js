import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"

const ThemeBookPostTemplate = ({
  data,
  location,
  intl
}) => {
  const posts = data.allMarkdownRemark.nodes
  const theme = location.pathname.split('/').filter(Boolean).slice(-1)[0] || 'Theme';
  const siteTitle = intl.formatMessage({id: theme}) || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="bluu">{intl.formatMessage({id: theme})}</h1>
      <ul className="main-list">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = getImage(post.frontmatter.square_image);

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Link to={post.fields.slug} itemProp="url">
                    <GatsbyImage image={image} alt={title} />
                  </Link>
                </header>
                <section className="d-none">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default injectIntl(ThemeBookPostTemplate)

export const pageQuery = graphql`
  query blogListQuery($language: String!, $theme: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: { date: DESC } }
      filter: {frontmatter: {
        lang: {eq: $language},
        theme:{eq: $theme}
        templateKey: { nin: ["news-page"] }
      }}
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          genre
          time_period
          theme
          square_image {
            childImageSharp {
              gatsbyImageData(width: 380)
            }
          }
        }
      }
    }
  }
`
