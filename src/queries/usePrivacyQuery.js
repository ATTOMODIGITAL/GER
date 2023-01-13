import { graphql, useStaticQuery } from "gatsby"

const usePrivacidad = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPrivacidad {
        edges {
          node {
            seoTitle
            seoMetaDescription
            texto {
              raw
            }
            titulo
          }
        }
      }
    }
  `)

  return data.allContentfulPrivacidad.edges[0].node
}

export default usePrivacidad