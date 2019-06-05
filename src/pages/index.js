import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/blog"

export default ( { data }) => {
  return (
  <Layout>
    <Blog data={ data }/>
  </Layout>
)
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
      totalCount
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
      }
      edges {
        node {
          id
          frontmatter {
            layout
            rating
            thumbnail
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt(pruneLength: 400)
          html
          timeToRead
        }
      }
    }
  }
`