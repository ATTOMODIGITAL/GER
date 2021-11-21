import { graphql, useStaticQuery } from "gatsby"

const useCookiesQuery = () => {
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

export default useCookiesQuery