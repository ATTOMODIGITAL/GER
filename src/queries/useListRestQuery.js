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
            homeImg {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
            }
            logo {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
            }
            mobileListadoImg {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
            }
            desktopDetalleImgs {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
            }
            carta {
              file {
                url
              }
            }
            reservar
            direccionLinea1
            direccionLinea2
            horarioLinea1
            horarioLinea2
            reservarLinkONo
            reservasDeGrupoONo
            descripcin {
              raw
            }
            breveDescripcinHomepage {
              raw
            }
            homeNameDesktop
          }
        }
      }
    }
  `)
  return data.allContentfulRestaurantes.edges
}

export default UseListRestQuery
