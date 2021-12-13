import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import useRichText from "../hooks/useRichText"
import usePrivacyQuery from "../queries/usePrivacyQuery"

const Privacidad = () => {
  const data = usePrivacyQuery()

  return (
    <>
      <Seo
        title="Política de privacidad"
        lang="es"
        titleSEO={data.seoTitle}
        description={useRichText(data.seoMetaDescription)}
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

export default Privacidad
