import * as React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"

const StudioIndex = ({ location, intl }) => {
  
  return (
    <Layout location={location} title={'studio'}>
      <div className="internal-body">
        <div className="left-column">
          <h2><span>hi@cita.studio</span><span>hi@cita.studio</span><span>hi@cita.studio</span></h2>
        </div>
        <h1 className="studio-header wremena">We are a boutique <b>design and editorial studio.</b></h1>
        <div className="dinamic-content">
          <div className="flex-item">
            <div className="img-container">
              <img src="/img/gif/reading.gif" alt="studio" />
            </div>
          </div>
          <div className="flex-item text-flex-content">
            <div className="studio-text inter">
              <p>We work with illustrators, designers, writers, and editors from around the world, assembling talented teams tailored to each project. Our projects directly support the work of open access feminist publisher <b>Cita Press.</b></p>
            </div>
            <div className="right-column">
              <img src="/img/pencil.png" className="studiopencil" width="304px" height="290px" alt="studio" />
              <div className="services">
                <h4>Services</h4>
                <ul>
                  <li>Branding</li>
                  <li>Editorial Design</li>
                  <li>Illustration</li>
                  <li>Infographics</li>
                  <li>Packaging</li>
                  <li>Translation</li>
                  <li>Ghostwriting</li>
                  <li>Copyediting</li>
                  <li>Print coordination</li>
                  <li>Project management</li>
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

export default injectIntl(StudioIndex)