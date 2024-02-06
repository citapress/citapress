import React, { useState } from 'react';
import { Link, FormattedMessage } from "gatsby-plugin-intl"
import ChangeLanguage from "../changeLanguage/changeLanguage"
import Marquee from "react-fast-marquee";
// import * as classes from "./layout.module.scss"


const Layout = ({ location, children, intl, where }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  console.log(location.pathname)
  const arrayofsplitlocation = location.pathname.split('/').filter(Boolean);
  let pathnamestriped = arrayofsplitlocation[arrayofsplitlocation.length - 1] || '';
  pathnamestriped = pathnamestriped === 'estudio' ? 'studio' : pathnamestriped;
  const [clicked, setClicked] = useState(true)
  
  let header = (
    <div className={clicked ? "flex main-heading" : "flex main-heading open"}>
      <h1 className="cita-heading">
        <Link to="/">{clicked ? 'cita': ''}</Link>
      </h1>
      <ul className="navigation">
        <li><Link to="/about"><FormattedMessage id="about" /></Link></li>
        <li><Link to="/books"><FormattedMessage id="books" /></Link></li>
        <li><Link to="/people"><FormattedMessage id="people" /></Link></li>
        <li><Link to="/news"><FormattedMessage id="news" /></Link></li>
        <li><Link to="/contact"><FormattedMessage id="contact" /></Link></li>
        <li><a aria-label="shop-navigate" href="https://cita-press.square.site/"  rel="noreferrer" target="_blank"><FormattedMessage id="shop" /></a></li>
        <li><Link to="/studio" className={`studio-link ${pathnamestriped}`}><span>cita:</span>studio</Link></li>
      </ul>
      <button className="btn btn-secondary menu-button" onClick={() => setClicked(!clicked)}>Menu</button>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className={`global-header bluu ${pathnamestriped}`}>{header}</header>
      <main className={`main-wrapper ${pathnamestriped}`}>
        <div className='internal-wrapper'>{children}</div>
      </main>
      <footer className={`${pathnamestriped}`}>
        {pathnamestriped === 'studio'?
        (
          <div className={"footer-container marquee-container"}>
          <Marquee speed={100} gradientWidth={200}>
            <h2 className='marquee-content'>✺ Distinctive design ✺ Accessibility ✺ All things open source ✺ Clear, thoughtful communications ✺ Playfulness and curiosity &nbsp;</h2>
          </Marquee>
          </div>
        ) : (
          <div className={"footer-container"}>
            <ChangeLanguage where={where} />
            <div className="message">
              <div className="social">
                <a className="social-img" href="http://facebook.com/citapress"><img src="/img/fb.png" alt="fb" /></a>
                <a className="social-img" href="http://twitter.com/citapress"><img src="/img/tw.png" alt="tw" /></a>
              </div>
              <div className='footer-rights'>
                Some rights reserved <img className='some-rights' alt="cc" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"/> CC-BY-SA 4.0 / {new Date().getFullYear()} &nbsp; <a href="https://github.com/citapress/citapress" target="_blank" rel="noreferrer">Github</a>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  )
}

export default Layout
