import { graphql, useStaticQuery } from "gatsby"

const useCookiesQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCookies {
        edges {
          node {
            seoTitle
            seoMetaDescription
            titulo
            texto {
              raw
            }
          }
        }
      }
    }
  `)

  return data.allContentfulCookies.edges[0].node
}

export default useCookiesQuery