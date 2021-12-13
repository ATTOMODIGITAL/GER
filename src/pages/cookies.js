import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import useRichText from "../hooks/useRichText"
import useCookiesQuery from "../queries/useCookiesQuery"

const Cookies = () => {
  const data = useCookiesQuery()

  return (
    <>
      <Seo
        title="Política de Cookies"
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

export default Cookies
