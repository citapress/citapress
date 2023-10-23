import * as React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"

const NewsIndex = ({ location, intl }) => {
  
  return (
    <Layout location={location} title={'news'}>
      {intl.locale === 'en' ? (
        <div className="english-version">
          <p>
            <span className="inside-title">News:</span><span>To stay up to date on all our releases and news, please <a href="https://citapress.substack.com" className="blue">sign up to our newsletter here!</a></span>
          </p>
          <hr />
          <div className="internal-body">
            <h2>2023</h2>
            <ul>
              <li>
                <b>June 2023 (Event)</b> Cita Press is an exhibitor and presenter at the <a href="https://sfartbookfair.com/" target="_blank" rel="noreferrer">San Francisco Art Book Fair!</a> Visit our table July 14-16 (preview July 13) and join us for a discussion on "New Life in the Public Domain" at 3 pm PT on July 14.
              </li>
              <li><b>April 2023 (Grant Announcement)</b><a href="https://github.com/citapress/citapress/blob/832de933034deeaea1356b2ee5a9107c58af3019/assets/Mellon%20Award%202023%20%20Press%20Release.pdf" target="_blank" rel="noreferrer">Cita to receive $750.000 from Mellon</a> - Cita Press, together with our fiscal sponsor and community cultivation partner Educopia Institute, is thrilled to announce a new award from the Mellon Foundation.  </li> <li><b>March 2023 (Announcement/Press)</b> Our new collection, <a href="https://citapress.org/#books/voices-around-me" target="_blank" rel="noreferrer"><i>Voices Around Me: Nobel Prize Lectures</i></a>, comes out on March 8 (International Women's Day). Literary Hub cross-publishes <a href="https://lithub.com/a-brief-history-of-all-the-women-who-have-won-the-nobel-prize/" target="_blank" rel="noreferrer"> the foreword</a> by Jessi Haley, and the book is paired with two free, printable zines featuring the cover design by Fiorella Ferroni.</li>
              </ul> 
            <h2>2022</h2>
            <ul>
              <li><b>October 2022 (Announcement)</b> Cita publishes a <a href="https://citapress.org/#books/incidents-in-the-life-of-a-slave-girl/" target="_blank" rel="noreferrer">new foreword to our edition </a> of Harriet Jacobs' <i>Incidents in the Life of a Slave Girl</i> by historical geographer Dr. Christy Hyman. Read more about Harriet Jacobs' contemporary influence via <a href="https://tinyletter.com/CitaPress/letters/harriet-jacobs-incidents-in-the-life-of-a-slave-girl-with-a-new-foreword-by-dr-christy-hyman" target="_blank" rel="noreferrer">our newsletter.</a></li>
              <li><b>August 2022 (Press)</b> Cita Press is interviewed for <a href="https://eyeondesign.aiga.org/feminist-open-access-and-decentralized-cita-press-share-five-favorite-books/?utm_source=eod&amp;utm_medium=social&amp;utm_campaign=books/" target="_blank" rel="noreferrer">AIGA Eye on Design's Recommended Reading series.</a></li>
              <li><b>May 2022 (Announcement/Event)</b> Cita is excited to publish a new edition of Edith Wharton's 1924 novella <i>The Old Maid</i>. Join us on 5/17 for a <a href="https://www.eventbrite.com/e/the-old-maid-by-edith-wharton-cita-press-book-launch-with-krithika-varagur-tickets-332901566547/" target="_blank" rel="noreferrer">live virtual discussion</a> of the book featuring journalist and author <a href="http://www.krithikavaragur.com/" target="_blank" rel="noreferrer"> Krithika Varagur</a>!</li>
            </ul>
            <h2>2021</h2>
            <ul>
              <li><b> November 2021 (Announcement)</b> We are thrilled to introduce Cita's inaugural Advisory Board: <a href="https://openreflections.wordpress.com/" target="_blank" rel="noreferrer">Janneke Adema</a>, <a href="https://knightfoundation.org/employee/vicky-checo/" target="_blank" rel="noreferrer">Vicky Checo</a>, <a href="https://twitter.com/krmaher/" target="_blank" rel="noreferrer">Katherine Maher</a>, <a href="https://educopia.org/jessica-meyerson"  target="_blank" rel="noreferrer">Jessica Meyerson</a>, &amp; <a href="https://mindyseu.com/" target="_blank" rel="noreferrer">Mindy Seu!</a> We are grateful to the board for their guidance as we shape the future of Cita.</li>
              <li><b> November 2021 (Event)</b> Cita will be participating in the discussion "Opening Old Books" at <a href="https://openpublishingfest.org/" target="_blank" rel="noreferrer">Open Publishing Fest</a> on 11/12 at 1 pm ET. </li>
            <li><b> October 2021 (Announcement)</b> Cita publishes a bilingual edition of Saint Teresa of Avila's <i>Meditations on the Songs of Songs,</i>. Watch the video launch featuring Juliana Castro, scholar Ana María Carvajal, and illustrator Catalina Vásquez <a href="#broken-link" target="_blank" rel="noreferrer">here</a>! </li>
            <li><b> July 2021 (Announcement)</b> Cita Press would love to hear from you! If you are a Cita reader (or prospective reader) who would like to give us feedback and advice on how we can best advance our work, please fill out our very brief <a href="https://forms.gle/HpvBm9rSmGzSoAKB6" target="_blank" rel="noreferrer">reader survey</a>. Thank you, and take care!</li>
              <li><b> July 2021 (Announcement)</b> We are excited to announce Jessi Haley as Cita Press's new Project &amp; Editorial Coordinator. This position is facilitated by Educopia Institute, as part of the Mellon-sponsored <a href="https://educopia.org/cita-press-getting-fit/" target="_blank" rel="noreferrer">Cita Press: Getting Fit</a> Project. You can reach Jessi via jessi@citapress.org.</li>
              <li><b> April 2021 - 2023 (Announcement)</b> <a href="#broken-link">The Andrew W. Mellon Foundation awards Educopia $245,000 USD</a> to support Cita Press' capacity and business planning. </li>
              <li><b>April 23 2021 (Event)</b> Juliana Castro to speak about Cita as part of the <a href="https://us02web.zoom.us/meeting/register/tZUpcOCpqzIiHNDqJhMa1JUelcxfeC1WgH1U1" target="_blank" rel="noreferrer">Digital Salon</a>.</li>
              <li><b>February 2021 (Announcement)</b> Cita's Cypherpunk Women Anthology is <a href="https://store.bookbaby.com/book/cypherpunk-women1" target="_blank" rel="noreferrer">now available for purchase in print</a>.</li>
            </ul>
            <h2>2020</h2>
            <ul>
              <li><b>August, 2020 (Event)</b> <a href="https://twitter.com/muladelfin/status/1292842070902800384"> Cita en MULA - Muestra de Libro Autogestionado</a>. Hablaremos de libros de acceso abierto, modelos colaborativos de publicación digital y el lanzamiento de Cita en español. </li>
              <li><b>August, 2020 (Announcement)</b> <a href="/pages/collaborate.html"> New collaborators </a> and two upcoming books announced: The Poor Clare by Elizabeth Gaskell and Mathilda by Mary Wollstonecraft Shelley. </li>
              <li> <b>July 27, 2020 (Press) </b> <a href="https://eyeondesign.aiga.org/what-is-designs-role-in-violating-or-upholding-digital-rights/" target="_blank" rel="noreferrer"> Juliana Castro and Cita on AIGA's Eye on Design</a>.</li>
              <li><b>May 23, 2020 (Event/Launch)</b> <a href="https://www.youtube.com= watch?v=YSGrlGHcgWI"> Watch the Virtual Reality book launch </a> for the Cypherpunk Women Anthology.</li>
              <li><b>April, 2020 (Press)</b> <a href="https://xd.adobe.com/ideas/perspectives/social-impact/design-violating-or-upholding-digital-rights/"> Cita mentioned in Adobe XD blogpost </a> in "Embrace open access" section. </li>
              <li><b>February, 2020 - (Announcement)</b> <a href="/pages/collaborate.html"> New collaborators </a> and three upcoming books announced: Incidents in the Life of a Slave Girl by Harriet Jacobs, Tender Buttons by Gertrude Stein, and Men, Women and Ghosts by Amy Lowell. </li>
            </ul>
            <h2>2019</h2>
            <ul>
              <li><b>November, 2019 (Newsletter)</b> <a href="https://citapress.org/newsletter/" target="_blank" rel="noreferrer"> Cita launches Newsletter - Subscribe! </a></li>
              <li><b>August 9, 2019 (Press)</b> <a href="https://eyeondesign.aiga.org/no-258-inside-debbie-millmans-text-based-art-collection-the-sex-ads-that-dont-make-it-on-the-subway-more/" target="_blank" rel="noreferrer"> Cita featured in the Design Diary at AIGA's Eye on Design.</a></li>
              <li><b>July 24, 2019 (Press)</b> <a href="https://www.typewolf.com/site-of-the-day=/cita-press"> Cita featured in Typewolf - Site of the Day!</a></li>
              <li><b>April 17, 2019 (Event)</b> <a href="https://www.meetup.com/WriteSpeakCode-SFBay/events/258027001/"> Cita featured in Write/Speak/Code - San Francisco Chapter, at Postman (595 Market St), 6:30p.m.</a></li>
              <li><b>March, 2019 (Award)</b> <a href="https://awards.latinamericandesign.org/finalistas/cita-press/?g2018=g-20-18"> Cita wins Latin American Design Award - Silver, Digital</a> - Team: Juliana Castro (Design) &amp; Juan Castro (Development). </li>
              <li><b>Feb, 2019 (Program)</b> <a href="https://foundation.mozilla.org/en/opportunity/mozilla-open-leaders/round-7/participants/participants---cohort-d/"> Mozilla Open Leaders </a> - Juan Castro and Juliana Castro to join Mozilla Open Leaders Program January to May. </li>
            </ul>
            <h2>2018</h2>
            <ul>
              <li><b>Oct 27, 2018 (Event)</b> <a href="https://www.opencon2018.org/opencon_2018_new_york_city/"> OpenCon NYC</a> - Adelphi University / Juliana Castro to present "Cita: Feminist Books for Print and Web" at the Satellite Event for OpenCon in New York City</li>
              <li><b>July 31, 2018 (Press)</b> <a href="https://blogs.lib.utexas.edu/texlibris/2018/07/31/creating-space-in-the-public-domain-for-feminist-literature/">TeXLibris</a> - Creating Space in the Public Domain for Feminist Literature</li>
              <li><b>June 7, 2018 (Press)</b> <a href="https://www.facebook.com/ElleBrasil/posts/10156722882284050?comment_id=10156723882854050&amp;comment_tracking=%7B%22tn%22%3A%22R0%22%7D/">Elle Brazil</a> - A Cita Press, iniciativa independente, edita e disponibiliza trabalhos de escritoras.</li>
              <li><b>June 6, 2018 (Press)</b> <a href="https://universomovieforward.com/2018/06/06/plataforma-oferece-livros-feministas-para-ler-online-e-de-graca/"> Universo Movie Forward </a> Plataforma oferece livros feministas para ler online e de graça!</li>
              <li><b>May 24, 2018 (Event)</b> <a href="https://www.eventbrite.com/e/open-source-design-meetup-tickets-46161272609/"> Open Source Design Meetup NYC</a> 6PM - ThoughtWorks, Inc. - 99 Madison Avenue - 15 F. / Please join us on thursday evening for a presentation and Q+A on Cita with Juliana Castro.</li>
              <li><b>April 26 - 29, 2018 (Press)</b><a href="https://libregraphicsmeeting.org/2018/"> Cita in Spain!</a> Saturday, April 28, 5 PM Tramallol, Seville, ESP - Juliana Castro will present Cita at Libre Graphics Meeting, an annual international convention for the discussion of free and open source software used with graphics.</li>
              <li><b>April 20 - May 11, 2018 (Event)</b><a href="https://art.utexas.edu/event/if-then-2018-design-mfa-exhibition"> Opening Reception for If This Then That </a>6-8 PM - At Visual Arts Center Austin, TX - The seven projects present in <i>If This Then That</i> explore solutions to complex problems, using design as a catalyst for social interaction, wellbeing and intellectual discoveries.</li>
              <li><b>March 20, 2018 (Event)</b> Can I Use That?: Open Access and Creativity - PCL Library, 4 PM, Learning Lab 1 Austin, TX - Bookmaking workshop and panel on Copyright, Fair Use, public domain and open access.</li>
            </ul>
          </div>
          <hr />
          <p>Don’t want to miss a thing? Follow us: <a href="http://instagram.com/cita.press">Instagram</a>, <a href="http://twitter.com/citapress">Twitter</a>, <a href="http://fb.com/citapress">Facebook</a>, <a href="https://github.com/jjcastro/cita-press">GitHub</a>, etc.</p>
        </div>
        ) : (
      <div className="spanish-version">
          <p>
            <span className="inside-title">Noticias:</span><span>Para mantenterte al día, suscríbete a <a href="https://citapress.substack.com" className="blue">nuestro newsletter</a>.</span>
          </p>
          <div className="internal-body">
            <hr />
            <ul>
              <li>
                <b> Noviembre, 2021 (Anuncio)</b> Estamos encantadas de presentar a la Junta Directiva de Cita: <a href="https://openreflections.wordpress.com/" target="_blank" rel="noreferrer">Janneke Adema</a>, <a href="https://knightfoundation.org/employee/vicky-checo/" target="_blank" rel="noreferrer">Vicky Checo</a>, <a href="https://twitter.com/krmaher" target="_blank" rel="noreferrer">Katherine Maher</a>, <a href="https://educopia.org/jessica-meyerson/" target="_blank" rel="noreferrer">Jessica Meyerson</a>, &amp; <a href="https://mindyseu.com/" target="_blank" rel="noreferrer">Mindy Seu</a>! Les agradecemos por su orientación mientras damos forma al futuro de Cita.
              </li>
              <li>
                <b> Noviembre, 2021 (Evento)</b> Cita participará en el debate "Abriendo libros antiguos" en el <a href="https://openpublishingfest.org/" target="blank">Open Publishing Fest</a> el 12 de noviembre a la 1 pm ET.
              </li>
              <li><b> Octubre, 2021 (Evento/Lanzamiento)</b> Cita publica una edición bilingüe de las Meditaciones sobre el Cantar de los Cantares de Santa Teresa de Ávila. ¡Mira el video de presentación con Juliana Castro, la académica Ana María Carvajal y la ilustradora Catalina Vásquez <a href="https://www.youtube.com/watch?v=AYd_gXzeqM0" target="_blank" rel="noreferrer"> aquí</a>!
              </li><b> July, 2021 (Anuncio)</b>¡A Cita Press le encantaría saber de ti! Si eres un/una lector/a de Cita (o un/una posible lector/a) y te gustaría darnos tu opinión y consejos sobre cómo podemos avanzar  nuestro trabajo, completa nuestra breve <a href="https://forms.gle/gCnLt6umVVYKLDp39" target="_blank" rel="noreferrer">encuesta</a>. ¡Gracias!
            <li><b> July, 2021 (Anuncio)</b> Nos complace anunciar a Jessi Haley como la nueva Coordinadora Editorial y de Proyectos de Cita Press. Este puesto es facilitado por Educopia Institute, como parte de la beca Mellon <a href="https://educopia.org/cita-press-getting-fit/">Cita Press: Getting Fit</a>. 
              </li>
              <li>
              <b>Abril, 2021 - 2023 (Anuncio)</b> <a href="https://educopia.org/cita-press-getting-fit/">La Fundación Andrew W. Mellon otorga a Educopia $ 245,000 USD</a> para apoyar la capacidad y la planificación comercial de Cita Press.
              </li>
              <li>
                <b>Agosto, 2020 (Evento)</b> Cita en Mula. Hablaremos de libros de acceso abierto, modelos colaborativos de publicación digital y el lanzamiento de los planes para Cita en español.
              </li> 
              <li>
                <b>Agosto, 2020 (Anuncio)</b> <a href="/ajax/collaborate.html"> Nuevas colaboradoras</a> dos libros nuevos: The Poor Clare y Mathilda.
              </li> 
              <li>
                <b>Julio, 2020 (Prensa)</b> <a href="https://eyeondesign.aiga.org/what-is-designs-role-in-violating-or-upholding-digital-rights/"> Juliana Castro y Cita en AIGA's Eye on Design</a>
              </li> 
              <li>
                <b>May 23, 2020 (Evento/Lanzamiento – En inglés)</b> <a href="https://www.youtube.com/watch?v=YSGrlGHcgWI&amp;feature=youtu.be"> Virtual Reality Lanzamiento del libro Cypherpunk Women</a>
              </li> 
              <li>
              <b>Abril, 2020 (Prensa)</b> <a href="https://xd.adobe.com/ideas/perspectives/social-impact/design-violating-or-upholding-digital-rights/"> Cita en AdobeXD</a> – Sección de acceso abierto
              </li> 
              <li>
                <b>Febrero, 2020 (Anuncio)</b> <a href="/ajax/collaborate.html"> Nuevas colaboradoras</a> y tres libros nuevos
              </li> 
              <li>
                <b>Noviembre, 2019 (Prensa)</b> <a href="https://citapress.org/newsletter"> Cita launches Newsletter - Subscribe!</a>
              </li> <li>
                <b>Augosto 9, 2019 (Prensa)</b> <a href="https://eyeondesign.aiga.org/no-258-inside-debbie-millmans-text-based-art-collection-the-sex-ads-that-dont-make-it-on-the-subway-more/"> Cita featured in the Design Diary at AIGA's Eye on Design</a>
              </li> 
              <li>
                <b>Julio 24, 2019 (Prensa)</b> <a href="https://www.typewolf.com/site-of-the-day/cita-press"> Cita featured in Typewolf - Site of the Day</a>
              </li> 
              <li>
                <b>Abril 17, 2019 (Evento)</b> <a href="https://www.meetup.com/WriteSpeakCode-SFBay/events/258027001/"> Cita featured in Write/Speak/Code - San Francisco Chapter, at Postman (595 Market St), 6:30p.m.</a>
              </li>  
              <li>
                <b>Marzo 2019 (Premio)</b> <a href="https://awards.latinamericandesign.org/finalistas/cita-press/?g2018=g-20-18"> Cita wins Latin American Design Award - Silver, Digital</a> - Team: Juliana Castro (Design) &amp; Juan Castro (Development)
              </li>    
              <li>
                <b>Febrero 2019 (Programa)</b> <a href="https://foundation.mozilla.org/en/opportunity/mozilla-open-leaders/round-7/participants/participants---cohort-d/"> Mozilla Open Leaders </a> - Juan Castro and Juliana Castro to join Mozilla Open Leaders Program January to May
              </li>    
              <li>
                <b>Octubre 27, 2018 (Evento)</b> <a href="https://www.opencon2018.org/opencon_2018_new_york_city/"> OpenCon NYC</a> - Adelphi University / Juliana Castro to present "Cita: Feminist Books for Print and Web" at the Satellite Event for OpenCon in New York City
              </li>      
              <li>
                <b>Julio 31, 2018 (Prensa)</b> <a href="https://blogs.lib.utexas.edu/texlibris/2018/07/31/creating-space-in-the-public-domain-for-feminist-literature/"> TeXLibris</a> - Creating Space in the Public Domain for Feminist Literature
              </li>      
              <li>
                <b>Junio 7, 2018 (Prensa)</b> <a href="https://www.facebook.com/ElleBrasil/posts/10156722882284050?comment_id=10156723882854050&amp;comment_tracking=%7B%22tn%22%3A%22R0%22%7D/"> Elle Brazil </a> A Cita Press, iniciativa independente, edita e disponibiliza trabalhos de escritoras.
              </li>      
              <li>
                <b>Junio 6, 2018 (Prensa)</b> <a href="https://universomovieforward.com/2018/06/06/plataforma-oferece-livros-feministas-para-ler-online-e-de-graca/"> Universo Movie Forward </a> Plataforma oferece livros feministas para ler online e de graça!
              </li>      
              <li>
                <b>Mayo 24, 2018 (Evento)</b> <a href="https://www.eventbrite.com/e/open-source-design-meetup-tickets-46161272609/"> Open Source Design Meetup NYC</a> 6PM - ThoughtWorks, Inc. - 99 Madison Avenue - 15 F. / Please join us on thursday evening for a presentation and Q+A on Cita with Juliana Castro.
              </li>      
              <li>
                <b>Abril 26 - 29, 2018 (Prensa)</b><a href="https://libregraphicsmeeting.org/2018/"> Cita in Spain!</a> Saturday, April 28, 5 PM Tramallol, Seville, ESP - Juliana Castro will present Cita at Libre Graphics Meeting, an annual international convention for the discussion of free and open source software used with graphics.
              </li>
              <li>
                <b>Abril 20 - Mayo 11, 2018 (Evento)</b><a href="https://art.utexas.edu/event/if-then-2018-design-mfa-exhibition"> Opening Reception for If This Then That </a>6-8 PM - At Visual Arts Center Austin, TX - The seven projects present in <i>If This Then That</i> explore solutions to complex problems, using design as a catalyst for social interaction, wellbeing and intellectual discoveries.
              </li>
              <li>
                <b>Marzo 20, 2018 (Evento)</b> Can I Use That?: Open Access and Creativity - PCL Library,  4 PM, Learning Lab 1 Austin, TX - Bookmaking workshop and panel on Copyright, Fair Use, public domain and open access.
              </li>
            </ul>
          </div>
          <hr />
          <p>Porfi <a href="https://citapress.substack.com" className="blue">suscríbete a nuestro newsletter</a>.</p>
          <p>¿Estás dirigiendo un taller de encuadernacion con nuestros libros? <a href="mailto:info@citapress.org?Subject=Using%20Cita%20With%20a%20Group">Déjanos saber</a> para publicitarlo.</p>
          <hr />
          <p>¿No quieres perderte nada? Síguenos: <a href="http://instagram.com/cita.press">Instagram</a>, <a href="http://twitter.com/citapress">Twitter</a>, <a href="http://fb.com/citapress">Facebook</a>, <a href="https://github.com/jjcastro/cita-press">GitHub</a>, etc.</p>
        </div>
        )}
    </Layout>
  )

}

export default injectIntl(NewsIndex)