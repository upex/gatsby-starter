import React from "react"
import { graphql } from "gatsby"
import ListLink from "../components/link"
import Layout from "../components/layout"
import styles from "./blog-post.module.css"
import Meta from "../components/meta"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export default ( { data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Meta
      title={ post.frontmatter.title }
      description={ post.excerpt}
      pathname={ post.fields.slug}
      image={ post.frontmatter.thumbnail.childImageSharp.fluid.src || post.frontmatter.thumbnail.publicURL }
      article={ true} />
      <div className={ styles.blog }>
        <ul className={styles.ul}>
            <ListLink to="/">Blog</ListLink>
        </ul>
        <h3>{post.frontmatter.title}</h3>
        <p className={styles.date}><strong>{post.frontmatter.date}</strong> <span className={styles.timeToRead}><em>{post.timeToRead > 1 ? `${post.timeToRead} mins` : `${post.timeToRead} min`}</em></span></p>
        <div className={styles.featureimage}>
          <PreviewCompatibleImage
            imageInfo={{
              image: post.frontmatter.thumbnail,
              alt: post.frontmatter.title
            }}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          publicURL
        }
      }
      excerpt(pruneLength: 200)
      timeToRead
      fields {
        slug
      }
    }
  }
`