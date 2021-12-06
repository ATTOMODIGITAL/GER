import * as React from "react"

import Layout from "../components/layout"
import useWindowSize from "../hooks/useWindowSize"
import Seo from "../components/seo"
import Form from "../components/Forms/Form"
import useViewport from "../hooks/useViewport"
import GoBack from "../components/GoBack/GoBrack"

const ReservasGrupo = () => {
  const size = useWindowSize()
  useViewport()

  return (
    <Layout>
      <Seo title="Home" lang="es" />
      {
        size > 880 && (<GoBack />)
      }
      <div className="Main__titles">
        <h1>Formulario para eventos</h1>
        <h6>Reservas para Grupos</h6>
      </div>
      <div className="Main__element">
        <Form groupOrNot={true} />
      </div>
    </Layout>
  )
}

export default ReservasGrupo
