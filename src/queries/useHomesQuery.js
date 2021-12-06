import { graphql, useStaticQuery } from "gatsby"

const useHomesQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHome {
        edges {
          node {
            seoTitle
            seoMetaDescription
          }
        }
      }
    }
  `)

  return data.allContentfulHome.edges[0].node
}

export default useHomesQuery