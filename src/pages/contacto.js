import React from 'react'

import useContactQuery from "../queries/useContactQuery"
import useRichText from "../hooks/useRichText"
import Layout from '../components/layout'
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
      <h1>{data.titulo}</h1>
      <p>{useRichText(data.texto)}</p>
      <p>FORMULARIO</p>
    </Layout>
  )
}

export default Contacto
