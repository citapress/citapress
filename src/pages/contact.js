import * as React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"

const ContactIndex = ({ location, intl }) => {
  
  return (
    <Layout location={location} title={'news'}>
      <div className="internal-body">
        {intl.locale === 'en' ? (
          <div className="english-version">
            <p>
              <span className="inside-title">Contact:</span>
              If you have questions, suggestions, or compliments, find us on <a href="https://github.com/citapress/citapress/">Github</a>, <a href="http://twitter.com/citapress">Twitter</a>, <a href="http://fb.com/citapress">Facebook </a> or <a href="http://instagram.com/cita.press">Instagram</a>, or write to us to <a href="mailto:info@citapress.org?Subject=Hello%20Hola%20Ciao">info@citapress.org</a>.
            </p>
            <p>
              For partnership offers, license questions, complaints, reading suggestions and press inquiries, please contact Jessi Haley at <a href="mailto:jessi@citapress.org?Subject=Hello%20Hola%20Ciao">jessi@citapress.org</a>.
            </p>
            <div className="center">
              <a className={"btn btn-secondary btn-big"} href="https://citapress.substack.com/"> Join our Newsletter! </a>
            </div>
            <hr />
            <p>Please read our <a href="https://github.com/citapress/citapress/blob/master/Code-of-Conduct.md"> Code of Conduct</a> or/and <a href="pages/books.html">our books</a>!</p> 
            <br />
          </div>
          ) : (
            <div className="spanish-version">
              <p>
                <span className="inside-title">Contacto:</span><span>Si tienes preguntas, sugerencias o flores, encuéntranos en <a href="https://github.com/citapress/citapress/">Github</a>, <a href="http://twitter.com/citapress">Twitter</a>, <a href="http://fb.com/citapress">Facebook </a> o <a href="http://instagram.com/cita.press">Instagram</a>, o escríbenos a <a href="mailto:info@citapress.org?Subject=Hello%20Hola%20Ciao">info@citapress.org</a>. </span>
              </p>
              <p>
                Para colaboraciones, preguntas sobre propiedad intelectual, quejas, sugerencias de lectura o solicitudes de prensa, por favor escribir a Juliana Castro a <a href="mailto:juliana@citapress.org?Subject=Hello%20Hola%20Ciao">juliana@citapress.org</a>.
              </p>
              <div className="center">
                <a className={"btn btn-secondary btn-big"} href="https://citapress.substack.com/"> Suscríbete al Newsletter (sobre todo en inglés) </a>
              </div>
              <hr />
              <p>Porfa lee nuestro <a href="https://github.com/citapress/citapress/blob/master/Code-of-Conduct.md">Código de conducta</a> y/o <a href="pages/books.html">nuestros libros</a>!</p> 
              <br />
            </div>
          )}
      </div>
    </Layout>
  )

}

export default injectIntl(ContactIndex)