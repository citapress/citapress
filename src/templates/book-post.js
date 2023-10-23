import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import BooksList from "../components/bookList/bookList"

const BookPostTemplate = ({
  data: { site, markdownRemark: post, allMarkdownRemark },
  location,
  intl
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`;
  const image = getImage(post.frontmatter.post_image);
  const where = post.frontmatter.language_link;

  const checkFormat = (f) => {
    const defaultFormat = {
      year: "numeric",
      month: "long",
      day: "2-digit"
    };
    if (!f || f.toString() === "Month and year") {
      return defaultFormat;
    } else if (f.toString() === "Year") {
      return {
        year: "numeric"
      };
    }
  }
  const publish_format = checkFormat(post.frontmatter.publishformat);
  const release_format = checkFormat(post.frontmatter.releaseformat);

  return (
    <Layout location={location} title={siteTitle} where={where}>
      <article
        className={'blog-post'}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="post-header">
          <div className="portrait">
            <GatsbyImage image={image} alt={post.frontmatter.title} />
          </div>
          <div className="info">
            <h1 className="bluu" itemProp="headline">{post.frontmatter.title}</h1>
            <h2 className="bluu" itemProp="headline">{post.frontmatter.author}</h2>
            <div className="reference">
              { post.frontmatter.download_ebook &&
                <a href={`/downloads/${post.frontmatter.download_ebook}`} target="_blank" rel="noreferrer" className="btn btn-primary">Download Free eBook</a>
              }
              <ul>
                <li>ISBN: {post.frontmatter.isbn}</li>
                <li>{intl.formatMessage({id: 'First published'})}: {intl.formatDate(post.frontmatter.release, publish_format)}</li>
                <li>{intl.formatMessage({id: 'Publication date'})}: {intl.formatDate(post.frontmatter.publication, release_format)}</li>
              </ul>
            </div>{/* /reference */}
            { post.frontmatter.description &&
              <div className="description"
                dangerouslySetInnerHTML={{ __html: post.frontmatter.description }}
                itemProp="foreword"
              >
              </div>
            }
            { post.frontmatter.foreword &&
              <section
                className="foreword"
                dangerouslySetInnerHTML={{ __html: post.frontmatter.foreword }}
                itemProp="foreword"
              />
            }
            <div className="actions">
              { post.frontmatter.published === false ? (
                <Link to={`#`} itemProp="url" className={"btn btn-secondary"}>{intl.formatMessage({id: 'Coming soon'})}</Link>
                ) : (
                <Link to={`${post.fields.slug}read`} itemProp="url" className={"btn btn-secondary"}>{intl.formatMessage({id: 'Read Online'})}</Link>
                )
              }
              <a href={post.frontmatter.download} target="_blank" rel="noreferrer" className={"btn btn-secondary"}>Download Guide</a>
            </div>
          </div>{/* /info */}
        </header>
        <hr />
      </article>
      <div className="related-articles">
        <BooksList data={allMarkdownRemark.nodes} />
      </div>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default injectIntl(BookPostTemplate)

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $language: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        author
        isbn
        download
        published
        language_link
        download_ebook
        date(formatString: "MMMM DD, YYYY")
        release(formatString: "MMMM DD, YYYY")
        releaseformat
        publication(formatString: "MMMM DD, YYYY")
        publishformat
        description
        foreword
        post_image {
          childImageSharp {
            gatsbyImageData(width: 380)
          }
        }
        lang
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: { date: DESC } }
      filter: {
        id: {ne: $id},
        frontmatter: {
          lang: {eq: $language}
          templateKey: { nin: ["news-page"] }
        }
      }
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
