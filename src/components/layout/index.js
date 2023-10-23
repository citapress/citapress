import React, { useState } from 'react';
import { Link, FormattedMessage } from "gatsby-plugin-intl"
import Transition from "../transition/transition"
import * as classes from "./layout.module.scss"

const RootLayout = ({ location, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [clicked, setClicked] = useState(true)
  
  let header = (
    <div className={clicked ? "flex main-heading" : "flex main-heading open"}>
      <h1 className="cita-heading">
        <Link to="/">{clicked ? 'cita': ''}:</Link>
      </h1>
      <ul className="navigation">
        <li><Link to="/about"><FormattedMessage id="about" />:</Link></li>
        <li><Link to="/books"><FormattedMessage id="books" />:</Link></li>
        <li><Link to="/people"><FormattedMessage id="people" />:</Link></li>
        <li><Link to="/news"><FormattedMessage id="news" />:</Link></li>
        <li><Link to="/contact"><FormattedMessage id="contact" />:</Link></li>
      </ul>
      <button className="btn btn-secondary menu-button" onClick={() => setClicked(!clicked)}>Menu</button>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className={`${classes.globalHeader} bluu`}>{header}</header>
      <main className="main-wrapper">
        <div className='internal-wrapper'>
          <Transition location={location}>{children}</Transition>
        </div>
      </main>
    </div>
  )
}

export default RootLayout
