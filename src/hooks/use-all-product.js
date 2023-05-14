import { graphql, useStaticQuery } from "gatsby"

const useAllProduct = () => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery(graphql`
    query allProductLinksQuery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/blog/{contentfulPost.url}")
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
