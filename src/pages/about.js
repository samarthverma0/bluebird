import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            It is an account from the view of a 16 year old who is filling his bag of memories and trying to create an unbiased opinion about his own society which is full of complexities and barriers.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Centre m shashwat h, left m parth, right m samarth</figcaption>
          </figure>
          <h3 id="dynamic-styles">Shashwat Dubey</h3>
          <p>
          Welcome to my blog page written by a sixteen year old boy who lives in the beautiful city of Bhopal where the finest photographers take birth but only few of them receives honour and glory . The vibe of his locality allowed Shashwat to grew interest in photography. photography gave me a chance to wander around the city in search of blissful frames , while capturing the nature through camera’s lens, my eye captured moments and started filling my diaries with delightful , moralising and thrilling events. so that’s why he started this blog to share his stories with everyone…
          He also records his own podcast which includes a lot of beautiful stories:<a href='He also records his own podcast which includes a lot of beautiful stories:https://open.spotify.com/show/49DjDVunURjNu8J8zGWbHG?si=J8xnxHPjQQq8cAxxSe50vA'>https://open.spotify.com/show/49DjDVunURjNu8J8zGWbHG?si=J8xnxHPjQQq8cAxxSe50vA</a>
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
