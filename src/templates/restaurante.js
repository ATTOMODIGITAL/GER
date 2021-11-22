import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import useWindowSize from "../hooks/useWindowSize"
import useViewport from "../hooks/useViewport"
import ButtonsCTAs from "../components/ButtonsCTAs/ButtonsCTAs"

export const query = graphql`
  query ($slug: String!) {
    contentfulRestaurantes(url: { eq: $slug }) {
      seoTitle
      seoMetaDescripcion
      nombre
      categoria
      direccionLinea1
      direccionLinea2
      direccionLinea3
      horarioLinea1
      horarioLinea2
      trpadvisorLink
      instagramLink
      reservarLinkONo
      carta {
        file {
          url
        }
      }
      texto {
        raw
      }
      mobileDetalleImgs {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
      }
      desktopDetalleImgs {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
      }
    }
  }
`

const Restaurante = props => {
  const size = useWindowSize()
  useViewport()

  return (
    <Layout>
      <Seo
        title={props.data.contentfulRestaurantes.nombre}
        lang="es"
        titleSEO={props.data.contentfulRestaurantes.seoTitle}
        description={props.data.contentfulRestaurantes.seoMetaDescripcion}
      />

      <div className="">
        {size > 880 ? (
          <>
            <div className="Main__titles">
              <h1>{props.data.contentfulRestaurantes.nombre}</h1>
              <h6>{props.data.contentfulRestaurantes.categoria}</h6>
            </div>

            <div className="Main__element">
              <ButtonsCTAs
                booking={props.data.contentfulRestaurantes.reservarLinkONo}
                menu={props.data.contentfulRestaurantes.carta}
              />
            </div>
          </>
        ) : (
          <>
            <div className="Main__titles">
              <h1>{props.data.contentfulRestaurantes.nombre}</h1>
              <h6>{props.data.contentfulRestaurantes.categoria}</h6>
            </div>

            <div className="Main__element">
              <ButtonsCTAs
                booking={props.data.contentfulRestaurantes.reservarLinkONo}
                menu={props.data.contentfulRestaurantes.carta}
              />
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Restaurante
