import React from "react"

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
        description={useRichText(data.seoMetaDescripcion)}
      />
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
