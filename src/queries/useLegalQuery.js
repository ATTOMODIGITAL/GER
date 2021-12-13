import { graphql, useStaticQuery } from "gatsby"

const useAvisoLegalquery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAvisoLegal {
        edges {
          node {
            seoMetaDescripcion {
              raw
            }
            seoTitle
            texto {
              raw
            }
            titulo
          }
        }
      }
    }
  `)

  return data.allContentfulAvisoLegal.edges[0].node
}

export default useAvisoLegalquery