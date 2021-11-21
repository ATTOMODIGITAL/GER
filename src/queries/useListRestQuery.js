import { graphql, useStaticQuery } from "gatsby"

const UseListRestQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRestaurantes(sort: { fields: ordenListado, order: ASC }) {
        edges {
          node {
            url
            nombre
            zona
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

  return data.allContentfulRestaurantes.edges
}

export default UseListRestQuery