import * as React from "react"
import { Script } from "gatsby"

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
      <Script>
            {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"c7083958ef736a97d794353925bdd4b9"})});`}
      </Script>
      {
        size > 880 && (<GoBack />)
      }
      <div className="Main__titles">
        <h1>Eventos y reservas de grupo</h1>
        <h6>Cuéntanos qué necesitas</h6>
      </div>
      <div className="Main__element">
        <Form groupOrNot={true} />
      </div>
    </Layout>
  )
}

export default ReservasGrupo
