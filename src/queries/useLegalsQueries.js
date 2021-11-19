import { graphql, useStaticQuery } from "gatsby"

const useAvisoLegalquery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAvisoLegal {
        edges {
          node {
            seoMetaDescripcion
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

/* const useCookiesQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCookies {
        edges {
          node {
            titulo
            texto {
              raw
            }
            seoMetaDescripcion
            seoTitle
          }
        }
      }
    }
  `)

  return data.allContentfulCookies.edges[0].node
}

const usePrivacidad = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPrivacidad {
        edges {
          node {
            seoMetaDescription
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

  return data.allContentfulPrivacidad.edges[0].node
} */

export { useAvisoLegalquery }
