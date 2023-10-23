import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location, intl }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          nothing here yet
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
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
                { post.frontmatter.description &&
                  <section className="d-none">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                }
              </article>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default injectIntl(BlogIndex)


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
query blogListQuery($language: String!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: {frontmatter: { date: DESC } }
    filter: {frontmatter: {lang: {eq: $language} templateKey: { nin: ["news-page"] }}}
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
