import { graphql, useStaticQuery } from "gatsby"

const useFooterQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFooter {
        edges {
          node {
            telefono
            email
          }
        }
      }
    }
  `)

  return data.allContentfulFooter.edges[0].node
}

export default useFooterQuery