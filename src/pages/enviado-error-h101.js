import React from "react"

import useContactQuery from "../queries/useContactQuery"
import useRichText from "../hooks/useRichText"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FormFail from "../components/FormResponse/FormFail"

const Error = () => {
  const data = useContactQuery()

  return (
    <Layout>
      <Seo
        title="Contacto"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescripcion}
      />
      
      <div className="Main__titles">
        <h1>{data.titulo}</h1>
        <h6>{data.subtitulo}</h6>
      </div>
      <div className="Main__text">
        <p>{useRichText(data.texto)}</p>
      </div>

      <div>
        <FormFail/>
      </div>
    </Layout>
  )
}

export default Error