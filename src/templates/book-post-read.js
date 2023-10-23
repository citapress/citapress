import React, { useState, useEffect, useRef } from 'react';
import { graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import TextConfiguration from '../components/textConfiguration/textConfiguration';

const BookPostReadTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
  intl
}) => {
  const isBrowser = typeof window !== "undefined"
  const siteTitle = site.siteMetadata?.title || `Title`;
  const image = getImage(post.frontmatter.post_image);
  const where = `${post.frontmatter.language_link}/read`;
  const postReference = useRef(null);

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

  const fontFamilies = {
    inter: 'Inter, sans-serif',
    zilla: 'Zilla Slab, serif',
    garamond: 'EB Garamond'
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const [fontSize, setFontSize] = useState(19);
  const [lineHeight, setLineHeight] = useState(26);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [fontFamily, setFontFamily] = useState('Inter');
  const [lineLength, setLineLength] = useState(90);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  }
  
  const handleTextChange = (e) => {
    setFontSize(e); 
  }

  const handleLineChange = (e) => {
    setLineHeight(e); 
  }

  const handleSpacing = (e) => {
    setLetterSpacing(e); 
  }

  const handleFontFamily = (e) => {
    setFontFamily(fontFamilies[e]); 
  }

  const handleLineLength = (e) => {
    setLineLength(e); 
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout location={location} title={siteTitle} where={where}>
      { isBrowser &&
        <div className="progress-bar" style={{width: `${scrollPosition / (postReference?.current?.scrollHeight - window.innerHeight) * 100}%`}}></div>
      }
      <TextConfiguration onChangeSize={handleTextChange} onChangeLine={handleLineChange} onChangeSpacing={handleSpacing} onChangeFontFamily={handleFontFamily} onChangeLineLength={handleLineLength} />
      <article
        className="blog-post"
        itemScope
        ref={postReference}
        itemType="http://schema.org/Article"
      >
        <header className="post-header">
          <div className="portrait">
            <GatsbyImage image={image} alt={post.frontmatter.title} />
          </div>
          <div className="info read-info">
            <h1 className="bluu" itemProp="headline">{post.frontmatter.title}</h1>
            <h2 className="bluu" itemProp="headline">{post.frontmatter.author}</h2>
            <ul className="tags">
              {
              post.frontmatter.genre.map(g => {
                return (
                  <li key={g}>
                    <Link to={`/genre/${g}`}>{intl.formatMessage({id: g})}</Link>
                  </li>
                  )
                })
              }
              {
              post.frontmatter.theme.map(t => {
                return (
                  <li key={t}>
                    <Link to={`/theme/${t}`}>{intl.formatMessage({id: t})}</Link>
                  </li>
                  )
                })
              }
              {
              post.frontmatter.time_period.map(t => {
                return (
                  <li key={t}>
                    <Link to={`/time-period/${t}`}>{intl.formatMessage({id: t})}</Link>
                  </li>
                  )
                })
              }
              </ul>
          
            <div className="reference">
                <ul>
                  <li>ISBN: {post.frontmatter.isbn}</li>
                  <li>{intl.formatMessage({id: 'First published'})}: {intl.formatDate(post.frontmatter.release, publish_format)}</li>
                  <li>{intl.formatMessage({id: 'Publication date'})}: {intl.formatDate(post.frontmatter.publication, release_format)}</li>
                </ul>
              </div>{/* /reference */}
              <br />
              <div className="actions">
                { post.frontmatter.download_ebook &&
                  <a href={`/downloads/${post.frontmatter.download_ebook}`} target="_blank" rel="noreferrer" className={"btn btn-secondary"}>{intl.formatMessage({id: 'Download Ebook'})}</a>
                }
                { post.frontmatter.download &&
                  <a href={`/downloads/${post.frontmatter.download}`} target="_blank" rel="noreferrer" className={"btn btn-secondary"}>{intl.formatMessage({id: post.frontmatter.download_name ? post.frontmatter.download_name : 'Download Guide'})}</a>
                }
              </div>
            </div>
        </header>
        <div className="title-info">
          <h1 className="bluu" itemProp="headline">{post.frontmatter.title}</h1>
          <h2 className="bluu" itemProp="headline">{post.frontmatter.author}</h2>
        </div>{/* /info */}
        {/* <div
          className="table-content"
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
          itemProp="contentTable"
        /> */}
        { post.headings &&
        <ul className='table-of-contents' id="toc">
          {post.headings.map(h => {
            return <li key={h.id} className={`depth-${h.depth}`}><a href={`#${h.id}`}>{h.value}</a></li>
          })}
        </ul>
        }
        {post.html && 
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            className={`blog-post-content ${post.frontmatter.lang}`}
            style={{fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, letterSpacing: `${letterSpacing}px`, fontFamily: `${fontFamily}`, maxWidth: `${lineLength}ch`}}
            itemProp="articleBody"
          />
        }
        <hr />
      </article>
      <div className="back-to-top">
        <a className="btn btn-secondary" href='#toc'>&uarr; <span>{intl.formatMessage({id: 'Back to Top'})}</span></a>
      </div>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
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

export default injectIntl(BookPostReadTemplate)

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      headings {
        id
        depth
        value
      }
      html
      tableOfContents
      timeToRead
      frontmatter {
        title
        author
        isbn
        release
        publishformat
        releaseformat
        download
        download_name
        download_ebook
        genre
        theme
        time_period
        publication
        language_link
        date(formatString: "MMMM DD, YYYY")
        description
        post_image {
          childImageSharp {
            gatsbyImageData(width: 380)
          }
        }
        lang
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
