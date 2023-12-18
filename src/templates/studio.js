import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const StudioTemplate = ({
  data,
  location,
  intl
}) => {
  const studio = data?.allMarkdownRemark?.nodes[0] || {};
  
  let elements = []; // Use let, not const, because we will modify it

  for (let i = 0; i < 3; i++) {
    elements.push(<span key={i}>{studio.frontmatter.email}</span>);
  }

  return (
    <Layout location={location} title={'Studio'}>
      <div className="internal-body">
        <div className="left-column">
          <h2>
            {elements}
          </h2>
        </div>
        <h1 className="studio-header wremena"
            dangerouslySetInnerHTML={{
              __html: studio.frontmatter.header,
            }}
            itemProp="header"></h1>
        <div className="dinamic-content">
          <div className="flex-item">
            <div className="img-container">
              <img src="/img/gif/reading.gif" alt="studio" />
            </div>
          </div>
          <div className="flex-item text-flex-content">
            <div className="studio-text inter"
             dangerouslySetInnerHTML={{
                __html: studio.html,
              }}>
            </div>
            <div className="right-column">
              <img src="/img/pencil.png" className="studiopencil" width="304px" height="290px" alt="studio" />
              <div className="services">
                <h4>Services</h4>
                <ul>
                  {
                    studio.frontmatter.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            {/* end right-column */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(StudioTemplate)

export const Head = () => <Seo title="Studio" />

export const pageQuery = graphql`
  query studioListQuery($language: String!) {
    allMarkdownRemark(
      sort: {frontmatter: { date: DESC } }
      limit: 1
      filter: {frontmatter: {
        lang: {eq: $language}
        templateKey: { eq: "studio-page" }
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
          header
          email
          services
          lang
        }
      }
    }
  }
`
