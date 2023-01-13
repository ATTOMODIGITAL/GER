import { graphql, useStaticQuery } from "gatsby"

const useHomesQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomepage {
        edges {
          node {
            seoTitle
            seoMetaDescription
            videoDesktop {
                file {
                  url
                }
            }
            videoMobile {
                file {
                  url
                }
            }
          }
        }
      }
    }
  `)

  return data.allContentfulHomepage.edges[0].node
}

export default useHomesQuery