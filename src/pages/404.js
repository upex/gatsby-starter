import React from "react"
import Layout from "../components/layout"
import ListLink from "../components/link"

export default () => (
  <Layout>
    <h3>Oops, that's awkward! The page you're looking for isn't available.</h3>
    <p>
      Back to <ListLink to="/">Home</ListLink>
    </p>
  </Layout>
)