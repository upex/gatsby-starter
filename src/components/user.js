import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./user.module.css"
import ImgPreview from "gatsby-image"
import logo from '../images/logo.png'
const User = ({ data, ...props}) => {
  return (
    <div className={styles.user}>
      <div className={styles.avatarwrapper}>
        <ImgPreview
        fluid={data.profile.childImageSharp.fluid}
        alt={`upen panging profile image`}
        className={styles.avatar}
        />
      </div>
      <div className={styles.description}>
        <img
        src={logo}
        alt=""
        />
      </div>
    </div>
  )
}
export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        profile: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <User data={ data } {...props} />}
  />
)