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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
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
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                  presentationWidth
                }
              }
              publicURL
            }
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt(pruneLength: 200)
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`