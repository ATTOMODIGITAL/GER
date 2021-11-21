import React from "react"

import Form from "../components/Form/Form"
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
        description={data.seoMetaDescripcion}
      />
      
      <div className="Main__titles">
        <h1>{data.titulo}</h1>
        <h6>{data.subtitulo}</h6>
      </div>
      <div className="Main__text">
        <p>{useRichText(data.texto)}</p>
      </div>
      <div className="Main__form">
        <Form />
      </div>
    </Layout>
  )
}

export default Contacto
