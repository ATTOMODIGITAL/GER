import * as React from "react"
import Layout from "../components/layout"

import Seo from "../components/seo"
import Form from "../components/Form/Form"
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
        <h1>Tituño formulariop</h1>
      </div>
      <div className="Main__element">
        <Form />
      </div>
    </Layout>
  )
}

export default ReservasGrupo
