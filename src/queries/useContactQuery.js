import { graphql, useStaticQuery } from "gatsby"

const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContact {
        edges {
          node {
            seoTitle
            seoMetaDescripcion {
              raw
            }
            texto {
              raw
            }
            titulo
            subtitulo
          }
        }
      }
    }
  `)

  return data.allContentfulContact.edges[0].node
}

export default useContactQuery
