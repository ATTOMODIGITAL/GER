import { graphql, useStaticQuery } from "gatsby"

const useRestsPageQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPaginaListadoRestaurantes {
        edges {
          node {
            seoTitle
            seoMetaDescription
          }
        }
      }
    }
  `)

  return data.allContentfulPaginaListadoRestaurantes.edges[0].node
}

export default useRestsPageQuery