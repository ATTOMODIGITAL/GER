import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"
import useWindowSize from "../hooks/useWindowSize"
import useViewport from "../hooks/useViewport"

export const query = graphql`
  query ($slug: String!) {
    contentfulRestaurantes(url: { eq: $slug }) {
      seoTitle
      seoMetaDescripcion
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
          <h1>{props.data.contentfulRestaurantes.nombre}</h1>
          <h6>Coming soon...</h6>
          </>
        ) : (
          <h1 style={{ textAlign: "center"}}>Coming soon...  {props.data.contentfulRestaurantes.nombre}</h1>
        )}
      </div>
    </Layout>
  )
}

export default Restaurante
