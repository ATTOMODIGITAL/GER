import { graphql, useStaticQuery } from "gatsby"

const useEmailRestQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEmailRestaurante {
        edges {
          node {
            email
          }
        }
      }
    }
  `)

  return data.allContentfulEmailRestaurante.edges[0].node
}

export default useEmailRestQuery