import { graphql, useStaticQuery } from "gatsby"

const useFeaturedProduct = () => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery(graphql`
    query featuredProductLinksQuery {
      allContentfulPost(
        filter: { featureThisProduct: { eq: true } }
        sort: { fields: url }
      ) {
        nodes {
          title
          gatsbyPath(filePath: "/blog/{contentfulPost.url}")
          featureThisProduct
          introduction
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

export default useFeaturedProduct
