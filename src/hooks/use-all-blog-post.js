import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const {
    allContentfulAuthor: { nodes },
  } = useStaticQuery(graphql`
    query allBlogLinksQuery {
      allContentfulAuthor(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/autores/{contentfulAuthor.url}")
          createdAt(formatString: "DD MMMM, YYYY")
          introduction
        }
      }
    }
  `)

  return nodes
}

export default useAllBlogPost
