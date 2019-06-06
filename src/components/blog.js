import React from "react"
import Post from "./post"
import ListLink from "./link"
import styles from "./blog.module.css"

export default (props) => {
  return (
    <div>
     <ul className={styles.ul}>
        <ListLink to="/">Blog</ListLink>
     </ul>
     {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
          key={node.id}
          date= { node.frontmatter.date }
          slug= { node.fields.slug }
          thumbnail= { node.frontmatter.thumbnail }
          title={node.frontmatter.title}
          excerpt={ node.excerpt }  />
      ))}
    </div>
  )
}