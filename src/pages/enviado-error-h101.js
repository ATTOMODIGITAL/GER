import React from "react"

import useGrupoQuery from "../queries/useGrupoQuery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Error = () => {
  const data = useGrupoQuery()

  return (
    <Layout>
      <Seo
        title="El Grupo"
        lang="es"
      />
      <div className="Main__titles">
        <h1>Lo sentimos, no hemos podido enviar su formulario</h1>
        <h6>Inténtelo de nuevo más tarde</h6>
      </div>

      <div className="Button__container">
        <Link to="/restaurantes" className="Button__container--button">Ver restaurantes</Link>
      </div>

    </Layout>
  )
}

export default Error