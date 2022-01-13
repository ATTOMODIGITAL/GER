import React from "react"

import useContactQuery from "../queries/useContactQuery"
import useRichText from "../hooks/useRichText"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FormResponse from "../components/FormResponse/FormResponse"

const Success = () => {
  const data = useContactQuery()

  return (
    <Layout>
      <Seo
        title="Contacto"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescription.seoMetaDescription}
      />
      
      <div className="Main__titles">
        <h1>{data.titulo}</h1>
        <h6>{data.subtitulo}</h6>
      </div>
      <div className="Main__text">
        <p>{useRichText(data.texto)}</p>
      </div>

      <div>
        <FormResponse />
      </div>
    </Layout>
  )
}

export default Success