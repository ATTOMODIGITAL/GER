import { graphql, useStaticQuery } from "gatsby"

const UseListRestQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRestaurantes {
        edges {
          node {
            url
            nombre
            zona
            ordenListado
            mobileListadoImgs {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
            }
            desktopListadoImgs {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return data.allContentfulRestaurantes.edges[0].node
}

export default UseListRestQuery