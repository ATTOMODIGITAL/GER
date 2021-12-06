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
        <h1>formulario enviado con Exito</h1>
        <h6>Gracias</h6>
      </div>

      <div className="Main__text">
        <p>dgfsgsdth</p>
      </div>

      <div className="Main__img" >
        <GatsbyImage image={getImage(data.imagen)} alt="GER" className="Main__img--img" />
      </div>

      <div className="Button__container">
        <Link to="/contacto" className="Button__container--button">Contacto</Link>
      </div>

    </Layout>
  )
}

export default Success