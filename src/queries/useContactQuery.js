import { graphql, useStaticQuery } from "gatsby"

const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContact {
        edges {
          node {
            seoTitle
            seoMetaDescripcion
            texto {
              raw
            }
            titulo
          }
        }
      }
    }
  `)

  return data.allContentfulContact.edges[0].node
}

export default useContactQuery
