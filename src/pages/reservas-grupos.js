import * as React from "react"
import Layout from "../components/layout"

import Seo from "../components/seo"
import FormGroup from "../components/Forms/FormGroup"
import useViewport from "../hooks/useViewport"

const ReservasGrupo = () => {
  useViewport()
  return (
    <Layout>
      <Seo
        title="Home"
        lang="es"
      />
      <div className="Main__titles">
        <h1>Formulario para eventos</h1>
      </div>
      <div className="Main__element">
        <FormGroup />
      </div>
    </Layout>
  )
}

export default ReservasGrupo
