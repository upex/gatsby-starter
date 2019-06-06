import React from "react"
import { graphql } from "gatsby"
import ListLink from "../components/link"
import Layout from "../components/layout"
import styles from "./blog-post.module.css"
import Meta from "../components/meta"

export default ( { data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Meta
      title={ post.frontmatter.title }
      description={ post.excerpt}
      image={ post.frontmatter.thumbnail }
      pathname={ post.fields.slug}
      article={ true} />
      <div>
        <ul className={styles.ul}>
            <ListLink to="/">Blog</ListLink>
        </ul>
        <h3>{post.frontmatter.title}</h3>
        <strong>{post.frontmatter.date}</strong>
        <div className={styles.featureimage}>
          <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
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
        thumbnail
      }
      excerpt(pruneLength: 200)
      fields {
        slug
      }
    }
  }
`