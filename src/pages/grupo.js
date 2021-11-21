import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useGrupoQuery from "../queries/useGrupoQuery"
import useRichText from "../hooks/useRichText"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Grupo = () => {
  const data = useGrupoQuery()

  return (
    <Layout>
      <Seo
        title="El Grupo"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescripcion}
      />
      <div className="ElGrupo__titles">
        <h1>{data.titulo}</h1>
        <h6>{data.subtitulo}</h6>
      </div>

      <div className="ElGrupo__text">
        <p>{useRichText(data.texto)}</p>
      </div>

      <div className="ElGrupo__img" >
        <GatsbyImage image={getImage(data.imagen)} alt="GER" className="ElGrupo__img--img" />
      </div>
    </Layout>
  )
}

export default Grupo
