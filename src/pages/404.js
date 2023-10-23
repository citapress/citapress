import * as React from "react"
import { graphql } from "gatsby"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1><FormattedMessage id="Page Not Found" /></h1>
      <p><FormattedMessage id="Oops, we couldn't find this page!" /></p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default injectIntl(NotFoundPage)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
