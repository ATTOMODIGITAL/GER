import { graphql, useStaticQuery } from "gatsby"

const useLogoQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLogo {
        edges {
          node {
            logo {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return data.allContentfulLogo.edges[0].node
}

export default useLogoQuery
