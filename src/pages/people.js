import * as React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const PeopleIndex = ({ location, intl }) => {
  const siteTitle = `People`;
  return (
    <Layout location={location} title={siteTitle}>
      <div className="internal-body">
        {intl.locale === "en" ? (
          <div className="english-version">
            <p>
              <span className="inside-title">People:</span>
              <span>
                Cita is a collaborative effort of love made possible by the
                generosity of many direct and indirect contributors. Cita is
                fiscally sponsored by Educopia Institute and funded through the
                generous support of the Mellon Foundation.
              </span>
            </p>
            <hr />
            <p>
              <span className="inside-title">Staff:</span>
            </p>
            <div className="flex">
              <div className="column">
                <img
                  src="/img/people/juli.png"
                  alt="Illustration of Juliana Castro"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>Juliana Castro Varón</b> is Cita’s Founder and Design
                  Director. She is a designer, and the author of Papel sensible.
                  Juliana is currently a fellow at Harvard University's Berkman
                  Klein Center for Internet &amp; Society.{" "}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="column">
                <img
                  src="/img/people/jessi.png"
                  alt="Illustration of Jessi Haley"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>Jessi Haley</b> is Cita’s Editorial Director. Jessi
                  previously managed the creative writing program at the
                  University of Chicago and has served on the editorial staff of{" "}
                  <i>Chicago Review</i> and <i>Colloquium Magazine</i>.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="column">
                <img
                  src="/img/people/fabian.jpg"
                  alt="Illustration of Fabian Rios"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>Fabián Ríos</b> is Cita’s Web Developer. Fabian brings
                  about 11 years of experience as a developer and media artist.
                  He lives with his wife, children, and dog in Düsseldorf,
                  Germany.
                </p>
              </div>
            </div>
             <div className="flex">
              <div className="column">
                <img
                  src="/img/people/bex.PNG"
                  alt="Illustration of bex ya yolk"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>bex ya yolk</b> is a graphic designer, book artist, and arts professor based in Chicago, IL. They have a BFA from VCUarts and an MFA from SAIC. yolk is the founder of an independent artists' book publisher THUNGRY.
                </p>
              </div>
            </div>
                                 <div className="flex">
              <div className="column">
                <img
                  src="/img/people/daniel.png"
                  alt="Illustration of Daniel Saldana Paris"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>Daniel Saldaña París</b> is Cita's Literary Translation & Technology Fellow. A writer and translator born in Mexico City, author of three novels and a collection of personal essays. He was a 2022-2023 Cullman Center Fellow at the New York Public Library.
                </p>
              </div>
            </div>
            <p>
              <b>
                <i>Getting Fit</i> consulting team:
              </b>{" "}
              Lauren Dapena Fraiz, Katherine Kim, Brandon Locke, Jessica
              Meyerson
            </p>
            <hr />
            <p>
              <span className="inside-title">Advisory Board:</span>
            </p>
            <div className="flex">
              <div className="column">
                <img
                  src="/img/people/janneke.png"
                  alt="Illustration of Janneke Adema"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>Dr. Janneke Adema</b> is a cultural and media theorist
                  working in the fields of (book) publishing and digital
                  culture. In her research she explores the future of scholarly
                  communications and experimental forms of knowledge production.
                  She also supports a variety of scholar-led, not-for-profit
                  publishing projects, including the Radical Open Access
                  Collective, Open Humanities Press, ScholarLed, Post Office
                  Press (POP), and COPIM.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="column">
                <img
                  src="/img/people/gita.jpg"
                  alt="Illustration of Gita Manaktala"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>Gita Manaktala</b> is the Executive Editor at Large for the
                  MIT Press, a publisher of scholarship at the intersection
                  of the arts, sciences, and technology. She works closely with
                  the press’s team of acquiring editors and acquires her own
                  list in the areas of information science and communication.
                </p>
              </div>
            </div>
      
            <div className="flex">
              <div className="column">
                <img
                  src="/img/people/jessica.png"
                  alt="Illustration of Jessica Meyerson"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>Jessica Meyerson</b> is Co-Director of Educopia Institute,
                  where she is chiefly responsible for ensuring smooth
                  implementation of the organization’s strategic direction.
                  She’s also Co-Director of The Maintainers, a global research
                  network interested in the concepts of maintenance
                  infrastructure, repair and the myriad forms of labor and
                  expertise that sustain our human-built world.
                </p>
              </div>
            </div>
            <p>
              <span className="inside-title">General Contributors:</span>
              <span></span>
            </p>
            <p>
              <b>Volunteer Web Development Lead:</b>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://castrovaron.com"
              >
                Juan José Castro Varón
              </a>
              .
            </p>{" "}
            <p>
              <b>Designers:</b> Josie Bellini, Antonela Debiasi, Fiorella
              Ferroni, Thaïs Jacoponi, Irina Koryagina, Annika Leppäaho, Kathy
              Mueller, Jiwon Park, Laura Ramírez, Natalia Rojas, Laura Savina,
              Lauren Smedley, Luce Terrasson, Catalina Vásquez, Jean Yang, Petra
              Zehner
            </p>{" "}
            <p>
              <b>Writers:</b> Ana María Carvajal, Francesca Gargallo, Catherine
              J. Golden, Bonnie Hurd Smith, Christy Hyman, Carol MacKay, Heather
              Ostman, Krithika Varagur, Gabrielle Welsh
            </p>{" "}
            <p>
              <b>Cypherpunk Women writers &amp; editors:</b> Leigh Cuen, Michael
              McSweeney, Marisol Bayona Román, Soona Amhaz, Saga Arvidsdotter,
              Josie Bellini, Kiara Bickers, Audrey Chaing, Emily Faria, Janey
              Gak, Allie Eve Knox, Jordan Kong, Sarah Jamie Lewis, Mir Liponi,
              Beth McCarthy, Chrissa McFarlane, Lisa Neigut, Norika Kizawa,
              Chelsea Palmer, Anita Posch, Samantha Radocchia, Hannah Rosenberg,
              Kokab “Setareh” Shabanipour, Amber Scott, Alena Vranova, Leah
              Wald, Karima Williams, Joyce Yang, Linda Xie, @Bitcoinstripper,
              @GlitchesBrew, @Tina_in_Tech, and many more.{" "}
            </p>{" "}
            <p>
              <b>Other contributors and supporters:</b> Nate Angell (Mozilla
              Open Leaders mentor and friend), Tien Mimi Nguyen (Write Speak
              Code SF advocate), Camilo Villegas (Web Dev support), Mindy Seu and Katherine Maher (Former Board Members)
            </p>{" "}
            <p>
              <b>Video credits:</b> Fantasy by Podington Bear, Icons by Creative
              Mania, Llisole, Mungang Kim, Becris and corpus delicti and Luisa
              Iborra. Powered by The Noun Project, and licensed under CC.
              Preformatted text - Project Gutenberg. Interior illustrations for
              The Yellow Wall-Paper - Jo. H. Hatfield, currently under public
              domain. Spanish translation for The Old Maid - Freeditorial. Video
              voice - Kira Street. Bindery by Evan Brooks. Licensed under MIT
              License. Short video / gifs - From Giphy! Roboto and Bitter,
              distributed by Google Fonts. Licensed under OFL, Bluu, distributed
              by Open Foundry. Licensed under OFL. If you believe this could be
              a more concrete credit, hit us up!
            </p>
            <hr />
            <p>
              If you want to join us,
              <b>
                {" "}
                please read our{" "}
                <a href="https://github.com/citapress/citapress/blob/master/Code-of-Conduct.md">
                  {" "}
                  Code of Conduct
                </a>
              </b>
              .
            </p>
            <hr />
          </div>
        ) : (
          <div className="spanish-version">
            <p>
              <span className="inside-title">Equipo:</span>
              <span>
                Cita Press es un esfuerzo colaborativo de amor hecho posible por
                la generosidad de muchas colaboradoras directas e indirectas.
                Actualmente, Cita está patrocinado fiscalmente por el Instituto
                Educopia y financiado a través del generoso apoyo de la
                Fundación Mellon.{" "}
              </span>
            </p>
            <hr />
            <p>
              <span className="inside-title">Personal:</span>
            </p>
            <div className="flex">
              {" "}
              <div className="column">
                <img
                  src="/img/people/juli.png"
                  alt="Illustration of Juliana Castro"
                  width="150px"
                  height="auto"
                />
              </div>{" "}
              <div className="column">
                <p>
                  <b>Juliana Castro Varón</b> es la fundadora de Cita y
                  co-investigadora principal de Getting Fit. Es directora
                  creativa, diseñadora y autora de Papel sensible. Actualmente
                  es Fellow del Berkman Klein Center for Internet &amp; Society
                  de la Universidad de Harvard.
                </p>
              </div>{" "}
            </div>{" "}
            <div className="flex">
              {" "}
              <div className="column">
                <img
                  src="/img/people/jessi.png"
                  alt="Illustration of Jessi Haley"
                  width="150px"
                  height="auto"
                />
              </div>{" "}
              <div className="column">
                <p>
                  <b>Jessi Haley</b> es la coordinadora editorial y de proyectos
                  de Cita. Jessi anteriormente administró el programa de
                  escritura creativa en la Universidad de Chicago y formó parte
                  del equipo editorial de Chicago Review y Colloquium Magazine.
                </p>
              </div>{" "}
            </div>{" "}
            <p>
              <b>Equipo de consultoría de Getting Fit:</b> Lauren Dapena Fraiz,
              Katherine Kim, Brandon Locke, Jessica Meyerson
            </p>
            <hr />
            <p>
              <span className="inside-title">Junta Asesora:</span>
            </p>
            <div className="flex">
              <div className="column">
                <img
                  src="/img/people/janneke.png"
                  alt="Illustration of Janneke Adema"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  La <b>Dra. Janneke Adema</b> es una teórica cultural y de
                  medios que trabaja en la publicación (de libros) y la cultura
                  digital. En su investigación, explora el futuro de las
                  comunicaciones académicas y las formas experimentales de
                  producción de conocimiento. Apoya proyectos sin fines de lucro
                  incluidos Radical Open Access Collective, Open Humanities
                  Press, ScholarLed, Post Office Press (POP) y COPIM.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="column">
                <img
                  src="/img/people/gita.jpg"
                  alt="Illustration of Gita"
                  width="150px"
                  height="auto"
                />
              </div>
              <div className="column">
                <p>
                  <b>Gita Manaktala</b> es la editora ejecutiva general de MIT
                  Press, una editorial de estudios en la intersección de las
                  artes, las ciencias y la tecnología. Trabaja en estrecha
                  colaboración con el equipo de editores de adquisiciones de la
                  prensa y adquiere su propia lista en las áreas de ciencias de
                  la información y comunicación.
                </p>
              </div>
            </div>
            <div className="flex">
              {" "}
              <div className="column">
                <img
                  src="/img/people/jessica.png"
                  alt="Illustration of Jessica Meyerson"
                  width="150px"
                  height="auto"
                />
              </div>{" "}
              <div className="column">
                <p>
                  <b>Jessica Meyerson</b> es codirectora de Educopia, donde es
                  la principal responsable de garantizar la implementación
                  fluida de la organización. También es codirectora de The
                  Mantainers, una red de investigación global interesada en los
                  conceptos de infraestructura de mantenimiento, reparación y
                  las innumerables formas de trabajo y experiencia que sustentan
                  nuestro mundo construido.
                </p>
              </div>{" "}
            </div>
            <p></p>
            <hr />
            <p>
              <span className="inside-title">Colaboradores Generales</span>
              <span></span>
            </p>
            <p>
              <b>Voluntario líder de desarrollo Web:</b>{" "}
              <a
                href="https://castrovaron.com"
                target="_blank"
                rel="noreferrer"
              >
                Juan José Castro Varón
              </a>
            </p>{" "}
            <p>
              <b>Otros colaboradores:</b> Nate Angell (Mozilla Open Leaders
              mentor and friend), Mindy Seu and Katherine Maher (Former Board Members), Tien Mimi
              Nguyen (Write Speak Code SF advocate)
            </p>{" "}
            <p>
              <b>Diseñadoras:</b> Josie Bellini, Antonela Debiasi, Fiorella
              Ferroni, Thaïs Jacoponi, Irina Koryagina, Annika Leppäaho, Kathy
              Mueller, Jiwon Park, Laura Ramírez, Natalia Rojas, Laura Savina,
              Lauren Smedley, Luce Terrasson, Catalina Vásquez, Jean Yang, Petra
              Zehner
            </p>{" "}
            <p>
              <b>Escritoras:</b> Ana María Carvajal, Francesca Gargallo, Bonnie
              Hurd Smith, Christy Hyman, Carol MacKay, Heather Ostman, Krithika
              Varagur, Gabrielle Welsh
            </p>{" "}
            <p>
              <b>Otros créditos:</b> Fantasy by Podington Bear, Icons by
              Creative Mania, Llisole, Mungang Kim, Becris and corpus delicti
              and Luisa Iborra. Powered by The Noun Project, and licensed under
              CC, Pre-formated text, Project Gutemberg
            </p>{" "}
            <p>
              Interior illustrations for The Yellow Wall-Paper - Jo. H. Hatfield,
              currently under public domain, Voz en video por Kira Street, Bindery
              by Evan Brooks. Licensed under MIT License, Short video / gifs -
              From Giphy! If you consider this could be a more concrete credit,
              hit ups up! Roboto and Bitter, distributed by Google Fonts. Licensed
              under OFL, Bluu, distributed by Open Foundry. Licensed under OFL
            </p>
            <p></p>
            <hr />
            <p>
              Si quieres unirte
              <b>
                {" "}
                por favor lee nuestro{" "}
                <a href="https://github.com/citapress/citapress/edit/master/Codigo-de-Conducta.md">
                  código de conducta
                </a>
              </b>
            </p>
            <hr />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default injectIntl(PeopleIndex);

export const Head = () => <Seo title="People" />;
