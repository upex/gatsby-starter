import React from "react"
import { Link } from "gatsby"
import liStyles from "./li.module.css"

const ListLink = props => (
  <li className={liStyles.li}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default ListLink;