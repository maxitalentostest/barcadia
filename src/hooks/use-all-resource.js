import { graphql, useStaticQuery } from "gatsby"

const useAllProduct = () => {
  const {
    allContentfulResource: { nodes },
  } = useStaticQuery(graphql`
    query allResourceLinksQuery {
      allContentfulResource(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/recursos/{contentfulResource.url}")
          introduction
          sku
          price
          description {
            raw
          }
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return nodes
}

export default useAllProduct
