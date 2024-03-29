import { graphql, useStaticQuery } from "gatsby"

const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContact {
        edges {
          node {
            seoTitle
            seoMetaDescription
            textoDescriptivo {
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
