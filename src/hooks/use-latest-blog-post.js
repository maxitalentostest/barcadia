import { graphql, useStaticQuery } from "gatsby"

const useLatestPost = () => {
  const {
    allContentfulAuthor: { nodes },
  } = useStaticQuery(graphql`
    query latestBlogLinksQiery {
      allContentfulAuthor(sort: { fields: createdAt, order: DESC }, limit: 3) {
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

export default useLatestPost
