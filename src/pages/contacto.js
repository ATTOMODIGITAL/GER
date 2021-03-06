import React from "react"

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
        description={data.seoMetaDescription.seoMetaDescription}
      />
      
      <div className="Main__titles">
        <h1>{data.titulo}</h1>
        <h6>{data.subtitulo}</h6>
      </div>
      <div className="Main__text">
        <p>{useRichText(data.texto)}</p>
      </div>

      <Form groupOrNot={false}/>

    </Layout>
  )
}

export default Contacto
