import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useGrupoQuery from "../queries/useGrupoQuery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Success = () => {
  const data = useGrupoQuery()

  return (
    <Layout>
      <Seo
        title="El Grupo"
        lang="es"
      />
      <div className="Main__titles">
        <h1>Formulario enviado con éxito</h1>
        <h6>Gracias</h6>
      </div>

      <div className="Button__container">
        <Link to="/restaurantes" className="Button__container--button">Ver restaurantes</Link>
      </div>

    </Layout>
  )
}

export default Success