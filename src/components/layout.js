import React from "react"
import Meta from "./meta"
import ListLink from "./link"
import User from "./user"
import layoutStyles from "./layout.module.css"
import profile from '../images/profile.jpg'
import logo from '../images/logo.png'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default ({ children }) => (
  <div className={layoutStyles.container}>
    <Meta />
    <header className={layoutStyles.header}>
      <div className={layoutStyles.inner}>
        <User
          logo={logo}
          avatar={profile}
        />
        <h3>
          FullStack Javascript Engineer. Agile minded. Risk taker. Wannabe Chef.
        </h3>
      </div>
      <ul className={layoutStyles.ul}>
        <ListLink to="/">Blog</ListLink>
        <ListLink to="/resume/">Resume</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      <footer>
          <ul className={layoutStyles.social}>
            <li>
              <a href="https://twitter.com/webforest_in" target="blank">
                <span className="material-icons"><FaTwitter/></span>
              </a>
            </li>
            <li>
              <a href="https://github.com/upex" target="blank">
              <span className="material-icons"><FaGithub /></span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/upen-panging/" target="blank">
                <span className="material-icons"><FaLinkedinIn /></span>
              </a>
            </li>
          </ul>
          <ul className={layoutStyles.copyright}>
            <li>&copy; upen.tech</li>
          </ul>
      </footer>
    </header>
    <div className={layoutStyles.main}>
      {children}
    </div>
  </div>
)