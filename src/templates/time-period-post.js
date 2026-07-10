import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { resizedImage, responsiveSrcSet } from "../utils/image"

const SQUARE_WIDTHS = [300, 600, 900];
const SQUARE_SIZES = "(min-width: 768px) 300px, 50vw";

const TimePeriodBookPostTemplate = ({
  data,
  location,
  intl
}) => {
  const posts = data.allMarkdownRemark.nodes

  const period = location.pathname.split('/').filter(Boolean).slice(-1)[0] || 'Time Period';
  const siteTitle = intl.formatMessage({id: period}) || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="bluu">{intl.formatMessage({id: period})}</h1>
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

export const Head = ({ location }) => {
  const period = location.pathname.split('/').filter(Boolean).slice(-1)[0] || 'Time Period';
  const label = period.replace(/-/g, ' ');
  return (
    <Seo
      title={`Books from the ${label}`}
      description={`Free feminist books from the ${label}, published open-access by Cita Press.`}
      pathname={location.pathname}
    />
  )
}

export default injectIntl(TimePeriodBookPostTemplate)

export const pageQuery = graphql`
  query blogListQuery($language: String!, $period: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: { date: DESC } }
      filter: {frontmatter: {
        lang: {eq: $language},
        time_period:{eq: $period}
        templateKey: { nin: ["news-page", "studio-page"] }
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
          square_image
        }
      }
    }
  }
`
