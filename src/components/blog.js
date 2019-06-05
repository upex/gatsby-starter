import React from "react"
// import styles from "./blog.module.css"

export default (props) => {
  console.log(props.data);
  return (
    <div>
     <h3>{props.data.allMarkdownRemark.totalCount} Posts</h3>
     {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title} />
          <h3>
            {node.frontmatter.title}{" "}
            <span>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </div>
  )
}