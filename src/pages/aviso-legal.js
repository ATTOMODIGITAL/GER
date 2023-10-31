import React from "react"
import { Script } from "gatsby"

import useLegalQuery from "../queries/useLegalQuery"
import Layout from "../components/layout"
import useRichText from "../hooks/useRichText"
import Seo from "../components/seo"

const AvisoLegal = () => {
  const data = useLegalQuery()

  return (
    <>
      <Seo
        title="Aviso legal"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescription}
      />
      <Script>
            {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"c7083958ef736a97d794353925bdd4b9"})});`}
      </Script>
      <Layout>
        <div className="Main__titles">
          <h1>{data.titulo}</h1>
          <h6>Grupo El Rincón</h6>
        </div>
        <div className="Main__text">
          <p>{useRichText(data.texto)}</p>
        </div>
      </Layout>
    </>
  )
}

export default AvisoLegal
