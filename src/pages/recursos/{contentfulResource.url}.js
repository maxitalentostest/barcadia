import React from "react"
import { graphql } from "gatsby"
import ResourceTemplate from "../../templates/resource-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Resource = ({ data: { contentfulResource } }) => {
  return (
    <>
      <Seo title={contentfulResource.title} />
      <Layout>
        <ResourceTemplate {...contentfulResource} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query productQuery($id: String) {
    contentfulResource(id: { eq: $id }) {
      title
      introduction

      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      thumbnail {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      description {
        raw
      }
      file {
        url
      }
    }
  }
`

export default Resource
