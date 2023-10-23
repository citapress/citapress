import * as React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"

const AboutIndex = ({ location, intl }) => {
  
  return (
    <Layout location={location} title={'about'}>
      <hr />
      <h1 className="bluu about-header">
        <FormattedMessage id="cita is" />
      </h1>
      <hr />
      <div className="flex about-content">
        <div className="flex-50">
          <p
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({id: 'about_left_entry'}),
            }}
            itemProp="description"
          />
          <p
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({id: 'Watch our video!'}),
            }}
            itemProp="description"
          />
          {intl.locale === 'en' ? 
          (
              <>
                <h3 className="bluu">Manifesto:</h3>
                <ul>
                  <li>To elevate the work of those who first addressed gender inequality </li>
                  <li>To use open-source resources and actively credit them </li>
                  <li>To maintain the content in open-access platforms, licenses and formats</li>
                  <li>To give free access to the content</li>
                  <li>To make visible and celebrate the work of contributors</li>
                  <li>To pair classic literature with contemporary open scholarship and design</li>
                  <li>To be committed to intersectionality</li>
                  <li>To be participatory, crowdsourced and open to new voices and collaborations</li>
                </ul>
                <p>
                  <span className="bluu">Advisory Board:</span> <a href="https://openreflections.wordpress.com/" target="_blank" rel="noreferrer">Janneke Adema</a>, <a href="https://knightfoundation.org/employee/vicky-checo/" target="_blank" rel="noreferrer">Vicky Checo</a>, <a href="https://twitter.com/krmaher" target="_blank" rel="noreferrer">Katherine Maher</a>, <a href="https://educopia.org/jessica-meyerson/" target="_blank" rel="noreferrer">Jessica Meyerson</a>, & <a href="https://mindyseu.com/" target="_blank" rel="noreferrer">Mindy Seu</a>.
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="bluu">Manifesto:</span>
                  <ul>
                    <li> Elevar el trabajo de quienes primero abordaron la desigualdad de género </li>
                    <li> Usar recursos de código abierto y acreditar a quienes colaboren activamente </li>
                    <li> Mantener el contenido en plataformas de acceso abierto, licencias y formatos </li>
                    <li> Dar acceso gratuito al contenido </li> <li> Hacer visible y celebrar el trabajo de las contribuyentes </li> <li> Emparejar la literatura clásica con la investigación y el diseño contemporáneo </li> <li> Comprometernos con la interseccionalidad </li><li> Ser participativas y abiertas a nuevas voces y colaboraciones </li></ul>
                </p>
                <p>
                  <span className="bluu">Junta Asesora:</span> <a href="https://openreflections.wordpress.com/" target="_blank" rel="noreferrer">Janneke Adema</a>, <a href="https://knightfoundation.org/employee/vicky-checo/" target="_blank" rel="noreferrer">Vicky Checo</a>, <a href="https://twitter.com/krmaher" target="_blank" rel="noreferrer">Katherine Maher</a>, <a href="https://educopia.org/jessica-meyerson/" target="_blank" rel="noreferrer">Jessica Meyerson</a>, y <a href="https://mindyseu.com/" target="_blank" rel="noreferrer">Mindy Seu</a>.</p></>
            )}
          
        </div>
        <div className="flex-50">
        {intl.locale === 'en' ? (
          <>
            <p><span className="bluu">What:</span> Carefully designed public-domain books written by women in free, contemporary editions for print and web.</p>
            <p><span className="bluu">How:</span> <span className="blue">cita</span> is a collaborative labor of love between designers and writers that relies on public-domain writings and open-source texts, fonts, code, and images. All the content of <span className="blue">cita</span> is either public-domain, or is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons License CC-NC-SA 4.0</a>, meaning it’s free forever, and sharable for non-commercial purposes so long as you can share if you say who created it. For example, we use <a href="https://github.com/evnbr/bindery">Bindery</a> by Evan Brooks. For more details, check the <a href="pages/collaborate.html" data-title="Collaborate">collaborate page</a>.</p>
            <p><span className="bluu">Why:</span> Women authors have historically been underrepresented and underpublicized in the male-dominated, profit-driven publishing industry. We make these women writers’ works accessible to all, in free editions. While the work we have published so far is by women, we are interested in publishing work by writers whose genders have been historically marginalized in the publishing and literary&nbsp;landscape.</p>
            <p><span className="bluu">Who:</span> <span className="blue">cita</span> is fiscally sponsored by Educopia and financially supported by the Andrew W. Mellon Foundation. Read more about <a href="https://educopia.org/cita-press-getting-fit/">Cita Press - Getting Fit</a>, a two-year project project aimed at improving citation capacity and creating a business strategy for the press. <span className="blue">cita</span> was created by <a href="http://julianacastro.co">Juliana Castro</a>. <span className="blue">cita</span>'s Project and Editorial Coordinator is Jessi Haley. We work in collaboration with a growing list of <a href="pages/collaborate.html" data-title="Collaborate">contributors</a>. <a href="pages/collaborate.html" data-title="Collaborate">Join us!</a></p>
          </>
          ) : (
          <>
            <p><span className="bluu">Qué:</span> Libros de dominio público cuidadosamente diseñados escritos por mujeres en ediciones contemporáneas gratuitas para impresión y web.</p>
            <p><span className="bluu">Cómo:</span> <span className="blue">cita</span> es un trabajo de amor entre diseñadoras y escritoras que se basa en escritos de dominio público y textos, fuentes e imágenes de código abierto. El contenido de <span className="blue">cita</span> es de dominio público o tiene licencia  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons CC-NC-SA 4.0</a>, lo que significa que es gratis para siempre y se puede compartir con fines no comerciales siempre que digas quién lo creó. Por ejemplo, usamos <a href="https://github.com/evnbr/bindery">Bindery</a> de Evan Brooks. Para más detalles, visita la <a href="pages/collaborate.html" data-title="Colabora">página de colaboración</a>.</p>
            <p><span className="bluu">Por qué:</span> Históricamente, las autoras han estado subrepresentadas en una industria editorial con fines de lucro y dominada por hombres. Hacemos que las obras de estas escritoras sean accesibles para todes, en ediciones gratuitas. Si bien el trabajo que hemos publicado hasta ahora es de mujeres, nos interesa publicar trabajos de escritorxs cuyos géneros han sido históricamente marginados en el panorama editorial y literario.</p>
            <p><span className="bluu">Quién:</span> <span className="blue">cita</span> está patrocinada fiscalmente por Educopia y apoyada económicamente por la Fundación Andrew W. Mellon. Lee más sobre <a href="https://educopia.org/cita-press-getting-fit/">Cita Press  - Getting Fit</a>, un proyecto de  un proyecto de dos años destinado a mejorar la capacidad de cita y crear una estrategia comercial para la editorial. Cita fue creada por <a href="http://julianacastro.co">Juliana Castro</a>. La Coordinadora editorial y de programas es Jessi Haley. Trabajamos en colaboración con una larga lista de <a href="pages/collaborate.html" data-title="Colabora">contribuidores</a>. <a href="pages/collaborate.html" data-title="Colabora">¡Únete!</a></p>
          </>
          )
        }
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(AboutIndex)
