import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { resizedImage, responsiveSrcSet } from "../utils/image"

const SQUARE_WIDTHS = [300, 600, 900];
const SQUARE_SIZES = "(min-width: 768px) 300px, 50vw";

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
          const source = post.frontmatter.square_image;
          const src = resizedImage(source, { width: 600, height: 600 });
          const srcSet = responsiveSrcSet(source, SQUARE_WIDTHS, { aspectRatio: 1 });

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Link to={post.fields.slug} itemProp="url" className="gatsby-image-wrapper">
                    {src && (
                      <img
                        src={src}
                        srcSet={srcSet}
                        sizes={SQUARE_SIZES}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                      />
                    )}
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
export const Head = ({ location }) => (
  <Seo
    title="All books"
    description="Browse the full Cita Press catalog: free, open-access books by women, available to read online or download in English and Spanish."
    pathname={location.pathname}
  />
)

export const pageQuery = graphql`
query blogListQuery($language: String!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: {frontmatter: { sortingdate: ASC } }
    filter: {frontmatter: {lang: {eq: $language} templateKey: { nin: ["news-page", "studio-page"] }}}
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
        square_image
      }
    }
  }
}
`
