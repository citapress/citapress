import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"

const NewsTemplate = ({
  data,
  location,
  intl
}) => {
  const news = data.allMarkdownRemark.nodes[0]
  // get the genre from last location segment

  return (
    <Layout location={location} title={intl.formatMessage({id: "news"})}>
      <h1 className="bluu">{intl.formatMessage({id: "news"})}</h1>
      {intl.locale === 'en' ? (
      <p>
        To stay up to date on all our releases and news, please <a href="https://citapress.substack.com" className="blue">sign up to our newsletter here!</a>
      </p>
      ) : (
      <p>
        Para estar al día de todas nuestras novedades, por favor <a href="https://citapress.substack.com" className="blue">¡suscríbete a nuestro newsletter aquí!</a>
      </p>
        )
      }
      <hr />
      <section
        dangerouslySetInnerHTML={{ __html: news.html }}
        className={`news-content ${news.frontmatter.lang}`}
        itemProp="articleBody"
      />
      <hr />
      { intl.locale === 'en' ? (
        <p>Don’t want to miss a thing? Follow us: <a href="http://instagram.com/cita.press">Instagram</a>, <a href="http://twitter.com/citapress">Twitter</a>, <a href="http://fb.com/citapress">Facebook</a>, <a href="https://github.com/jjcastro/cita-press">GitHub</a>, etc.</p>
        ) : (
          <p>¿No quieres perderte nada? Síguenos: <a href="http://instagram.com/cita.press">Instagram</a>, <a href="http://twitter.com/citapress">Twitter</a>, <a href="http://fb.com/citapress">Facebook</a>, <a href="https://github.com/jjcastro/cita-press">GitHub</a>, etc.</p>
        )
      }
    </Layout>
  )
}

export default injectIntl(NewsTemplate)

export const pageQuery = graphql`
  query blogListQuery($language: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: { date: DESC } }
      limit: 1
      filter: {frontmatter: {
        lang: {eq: $language}
        templateKey: { eq: "news-page" }
      }}
      ) {
      nodes {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          title
          lang
        }
      }
    }
  }
`
