import React from "react"
import Meta from "./meta"
import ListLink from "./link"
import Profile from "./user"
import layoutStyles from "./layout.module.css"
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default ({ children }) => (
  <div className={layoutStyles.container}>
    <Meta />
    <header className={layoutStyles.header}>
      <div className={layoutStyles.inner}>
        <Profile />
        <h2>
          FullStack Javascript Engineer. Agile minded. Risk taker. Occasional Chef.
        </h2>
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
                <FaTwitter/>
              </a>
            </li>
            <li>
              <a href="https://github.com/upex" target="blank">
               <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/upen-panging/" target="blank">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <ul className={layoutStyles.copyright}>
            <li>&copy; upenpanging.in</li>
          </ul>
      </footer>
    </header>
    <div className={layoutStyles.main}>
      {children}
    </div>
  </div>
)