import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import BooksList from "../components/bookList/bookList"
import { resizedImage, responsiveSrcSet } from "../utils/image"
import slugFromLink from "../utils/slugFromLink"
import stripHtml from "../utils/seoText"

const PORTRAIT_WIDTHS = [200, 397, 800];
const PORTRAIT_ASPECT = 397 / 612;
const PORTRAIT_SIZES = "(min-width: 768px) 397px, 60vw";

const BookPostTemplate = ({
  data: { site, markdownRemark: post, allMarkdownRemark },
  location,
  intl
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`;
  const coverSource = post.frontmatter.post_image;
  const coverSrc = resizedImage(coverSource, { width: 397, height: 612 });
  const coverSrcSet = responsiveSrcSet(coverSource, PORTRAIT_WIDTHS, { aspectRatio: PORTRAIT_ASPECT });
  const where = slugFromLink(post.frontmatter.language_link);

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
            <div className="gatsby-image-wrapper">
              {coverSrc && (
                <img
                  src={coverSrc}
                  srcSet={coverSrcSet}
                  sizes={PORTRAIT_SIZES}
                  alt={post.frontmatter.title}
                  loading="eager"
                  decoding="async"
                  width={397}
                  height={612}
                />
              )}
            </div>
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

export const Head = ({ data: { site, markdownRemark: post }, location }) => {
  const siteUrl = site.siteMetadata.siteUrl
  const description = stripHtml(post.frontmatter.description) || post.excerpt
  const barePath = post.fields.slug
  const lang = post.frontmatter.lang || "en"
  const otherSlug = slugFromLink(post.frontmatter.language_link)
  const otherPath = otherSlug ? `/${otherSlug}/` : null
  const alternates = otherPath
    ? lang === "es"
      ? { en: otherPath, es: barePath }
      : { en: barePath, es: otherPath }
    : null

  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: post.frontmatter.title,
    author: { "@type": "Person", name: post.frontmatter.author },
    inLanguage: lang,
    isbn: post.frontmatter.isbn || undefined,
    image: post.frontmatter.post_image
      ? siteUrl + post.frontmatter.post_image
      : undefined,
    url: siteUrl + barePath,
    bookFormat: "https://schema.org/EBook",
    isAccessibleForFree: true,
    datePublished: post.frontmatter.publicationISO || undefined,
    publisher: {
      "@type": "Organization",
      name: "Cita Press",
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: siteUrl + barePath,
    },
  }

  return (
    <Seo
      title={post.frontmatter.title}
      description={description}
      pathname={location.pathname}
      canonicalPath={barePath}
      image={post.frontmatter.post_image}
      lang={lang}
      alternates={alternates}
      ogType="book"
    >
      <script type="application/ld+json">{JSON.stringify(bookJsonLd)}</script>
    </Seo>
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
        siteUrl
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
        publicationISO: publication(formatString: "YYYY-MM-DD")
        publishformat
        description
        foreword
        post_image
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
          square_image
        }
      }
    }
  }
`
