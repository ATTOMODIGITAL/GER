import React from "react"
import { Script } from "gatsby"

import Form from "../components/Forms/Form"
import useContactQuery from "../queries/useContactQuery"
import useRichText from "../hooks/useRichText"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contacto = () => {
  const data = useContactQuery()

  return (
    <Layout>
      <Seo
        title="Contacto"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescription}
      />
      <Script>
            {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"c7083958ef736a97d794353925bdd4b9"})});`}
      </Script>
      
      <div className="Main__titles">
        <h1>{data.titulo}</h1>
        <h6>{data.subtitulo}</h6>
      </div>
      <div className="Main__text">
        <p>{useRichText(data.textoDescriptivo)}</p>
      </div>

      <Form groupOrNot={false}/>

    </Layout>
  )
}

export default Contacto
