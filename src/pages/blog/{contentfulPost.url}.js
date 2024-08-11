import React from "react"
import { graphql } from "gatsby"
import ProductTemplate from "../../templates/product-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Product = ({ data: { contentfulPost } }) => {
  return (
    <>
      <Seo title={contentfulPost.title} />
      <Layout>
        <ProductTemplate {...contentfulPost} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query productQuery($id: String) {
    contentfulPost(id: { eq: $id }) {
      title
      introduction
      price
      headerImage {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      description {
        raw
        references {
          __typename
          contentful_id
          url
        }
      }
      metaDescription {
        metaDescription
      }
    }
  }
`

export default Product
