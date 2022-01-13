import { graphql, useStaticQuery } from "gatsby"

const useAvisoLegalquery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAvisoLegal {
        edges {
          node {
            seoMetaDescription {
              seoMetaDescription
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