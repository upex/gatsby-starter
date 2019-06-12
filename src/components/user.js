import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./user.module.css"
import PreviewCompatibleImage from './PreviewCompatibleImage'

const User = ({ data, ...props}) => {
  return (
    <div className={styles.user}>
      <PreviewCompatibleImage
        imageInfo={{
          image: data.profile,
          alt: `upen panging profile image`,
          className: styles.avatar 
        }}
      />
      <div className={styles.description}>
        <PreviewCompatibleImage
          imageInfo={{
            image: data.logo,
            alt: `upen panging logo image`
          }}
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
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <User data={ data } {...props} />}
  />
)