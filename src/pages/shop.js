import * as React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"

const AboutIndex = ({ location }) => {
  
  return (
    <Layout location={location} title={'shop'}>
      <h1 className="bluu"><FormattedMessage id="Buy fun things, support free books!" /></h1>
      <iframe title="store" frameBorder="0" src="https://cita-press.square.site/" width={'100%'} height={'100%'}></iframe>
    </Layout>
  )
}

export default injectIntl(AboutIndex)
