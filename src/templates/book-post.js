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
      month: "long"
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
  const download = post.frontmatter.download ? 
  post.frontmatter.download.startsWith('http') ?
  post.frontmatter.download :
  `/downloads/${post.frontmatter.download}` :
  null
  const download_other = post.frontmatter.third_download ? 
  post.frontmatter.third_download.startsWith('http') ?
  post.frontmatter.third_download :
  `/downloads/${post.frontmatter.third_download}` :
  null

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
              { post.frontmatter.download &&
                <a data-cy="download_button" href={download} target="_blank" rel="noreferrer" className={"btn btn-secondary"}>{intl.formatMessage({id: post.frontmatter.download_name ? post.frontmatter.download_name : 'Download Guide'})}</a>
              }
              { post.frontmatter.third_download &&
                <a data-cy="download_button" href={download_other} target="_blank" rel="noreferrer" className={"btn btn-secondary"}>{intl.formatMessage({id: post.frontmatter.third_download_name ? post.frontmatter.third_download_name : 'Download Epub'})}</a>
              }
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
        download_name
        download_ebook
        third_download
        third_download_name
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
          templateKey: { nin: ["news-page", "studio-page"] }
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
