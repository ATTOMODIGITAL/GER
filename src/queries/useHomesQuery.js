import { graphql, useStaticQuery } from "gatsby"

const useHomesQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHome {
        edges {
          node {
            mobileImgs {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
            desktopImgs {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
            seoTitle
            seoMetaDescription
          }
        }
      }
    }
  `)

  return data.allContentfulHome.edges[0].node
}

export default useHomesQuery