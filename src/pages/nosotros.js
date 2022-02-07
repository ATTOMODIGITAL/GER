import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import useGrupoQuery from "../queries/useGrupoQuery"
import useRichText from "../hooks/useRichText"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Nosotros = () => {
  const data = useGrupoQuery()

  return (
    <>
      <Seo
        title="El Grupo"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescription.seoMetaDescription}
      />
      <Layout>
        <div className="Main__titles">
          <h1>{data.titulo}</h1>
          <h6>{data.subtitulo}</h6>
        </div>

        <div className="Main__text">
          <p>{useRichText(data.texto)}</p>
        </div>

        <div className="Main__img">
          <GatsbyImage
            image={getImage(data.imagen)}
            alt="GER"
            className="Main__img--img"
          />
        </div>

        <div className="Button__container">
          <Link to="/restaurantes" className="Button__container--button">
            Ver restaurantes
          </Link>
        </div>
      </Layout>
    </>
  )
}

export default Nosotros