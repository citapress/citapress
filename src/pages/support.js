import * as React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const ZEFFY_URL = "https://www.zeffy.com/en-US/ticketing/cita-presss-memberships"

const SupportIndex = ({ location, intl }) => {
  const siteTitle = `Support`

  return (
    <Layout location={location} title={siteTitle}>
      {intl.locale === 'en' ? (
        <div className="english-version">
          <div className="support-hero">
            <img src="/img/new-illustration.png" alt="A hand-drawn illustration of two waving books" />
            <div className="support-copy">
              <h1 className="bluu support-header">like our work? become a cita book friend!</h1>
              <hr />
              <p className="support-tagline bluu">Grants fund projects. Friends keep the lights on.</p>
              <hr />
              <p>
                Cita Book Friends are people who believe feminist publishing should be open, global, and sustainable. They want to preserve and build on the past foundation created by feminist forebears. By joining, you're ensuring that authors, designers, and translators can keep creating, and that readers everywhere can access their work freely.
              </p>
              <a className="btn btn-blue btn-big bluu" href={ZEFFY_URL} target="_blank" rel="noreferrer">subscribe here</a>
            </div>
          </div>

          <table className="pricing-table">
            <thead>
              <tr>
                <th className="bluu">tier</th>
                <th className="bluu">annual gift</th>
                <th className="bluu">benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Friend</td>
                <td data-label="Annual gift">$50</td>
                <td>Name on "Book Friends wall" (website and Cita Press Bulletin) + digital "membership" cards designed by Cita (reissued annually) + one-time physical membership card.</td>
              </tr>
              <tr>
                <td>Advocate</td>
                <td data-label="Annual gift">$150</td>
                <td>Friend benefits + custom print zine featuring excerpts from Cita publications, designed and printed by Cita.</td>
              </tr>
              <tr>
                <td>Sustainer</td>
                <td data-label="Annual gift">$500</td>
                <td>Advocate benefits + early access to new titles, early access to quarterly "mini books."</td>
              </tr>
              <tr>
                <td>Champion</td>
                <td data-label="Annual gift">$1,000+</td>
                <td>Sustainer benefits + acknowledgment in print/digital publications.</td>
              </tr>
            </tbody>
          </table>

          <p className="support-footnote">*Zines ship quarterly. Subscribe and make sure your address field is filled out to receive your zine!</p>
        </div>
      ) : (
        <div className="spanish-version">
          <div className="support-hero">
            <img src="/img/new-illustration.png" alt="Una ilustración dibujada a mano de dos libros saludando" />
            <div className="support-copy">
              <h1 className="bluu support-header">¿te gusta nuestro trabajo? ¡hazte cita book friend!</h1>
              <hr />
              <p className="support-tagline bluu">Las becas financian proyectos. Los amigos mantienen las luces encendidas.</p>
              <hr />
              <p>
                Cita Book Friends son personas que creen que la edición feminista debe ser abierta, global y sostenible. Quieren preservar y construir sobre la base creada por nuestras precursoras feministas. Al unirte, aseguras que autoras, diseñadoras y traductoras puedan seguir creando, y que lectoras de todo el mundo puedan acceder a su trabajo de forma gratuita.
              </p>
              <a className="btn btn-blue btn-big bluu" href={ZEFFY_URL} target="_blank" rel="noreferrer">suscríbete aquí</a>
            </div>
          </div>

          <table className="pricing-table">
            <thead>
              <tr>
                <th className="bluu">nivel</th>
                <th className="bluu">aporte anual</th>
                <th className="bluu">beneficios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amiga/o</td>
                <td data-label="Aporte anual">$50</td>
                <td>Nombre en el "muro de Book Friends" (sitio web y Boletín de Cita Press) + tarjetas de membresía digitales diseñadas por Cita (reemitidas anualmente) + una tarjeta de membresía física única.</td>
              </tr>
              <tr>
                <td>Defensora/or</td>
                <td data-label="Aporte anual">$150</td>
                <td>Beneficios de Amiga/o + zine impreso personalizado con extractos de publicaciones de Cita, diseñado e impreso por Cita.</td>
              </tr>
              <tr>
                <td>Sostenedora/or</td>
                <td data-label="Aporte anual">$500</td>
                <td>Beneficios de Defensora/or + acceso anticipado a nuevos títulos, acceso anticipado a "mini libros" trimestrales.</td>
              </tr>
              <tr>
                <td>Campeona/ón</td>
                <td data-label="Aporte anual">$1,000+</td>
                <td>Beneficios de Sostenedora/or + reconocimiento en publicaciones impresas/digitales.</td>
              </tr>
            </tbody>
          </table>

          <p className="support-footnote">*Los zines se envían trimestralmente. Suscríbete y asegúrate de completar el campo de dirección para recibir tu zine.</p>
        </div>
      )}
    </Layout>
  )
}

export default injectIntl(SupportIndex)
export const Head = ({ location }) => (
  <Seo
    title="Support"
    description="Become a Cita Book Friend — annual memberships that fund feminist publishing and keep Cita Press's free books, translations, and design accessible to everyone."
    pathname={location.pathname}
  />
)
