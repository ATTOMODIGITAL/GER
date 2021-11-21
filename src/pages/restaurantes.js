import * as React from "react"

import useListRestQuery from "../queries/useListRestQuery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import useWindowSize from "../Hooks/useWindowSize"
import ProjectItem from "../components/ProjectItem/ProjectItem"
import Carousel from "../components/Carousel/Carousel"
import useViewport from "../hooks/useViewport"

const Restaurantes = () => {
  const data = useListRestQuery()
  const size = useWindowSize()
  useViewport()

  return (
    <Layout>
      <Seo
        title="Restaurantes"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescripcion}
      />

      {size > 880 // ------------------------------ PROJECT ITEM DESKTOP
        ? data.map((proyect, i) => (
            <ProjectItem
              key={i}
              name={proyect.node.nombre}
              year={proyect.node.zona}
              slug={proyect.node.url}
              imgs={proyect.node.desktopListadoImgs.slice(0, 4)}
            />
          ))
        : // ------------------------------------------ CAROUSEL MOBILE
          data.map((proyect, i) => (
            <div className="container">
              <Carousel
                key={i}
                images={proyect.node.mobileListadoImgs.slice(0, 4)}
                linked={true}
                slug={`restaurantes/${proyect.node.url}`}
              />
              <div className="justify-content-center text-center mb-5 mt-2">
                <p>
                  <b>{proyect.node.nombre}</b>
                  <br />
                  <small>
                    {proyect.node.zona}
                  </small>
                </p>
              </div>
            </div>
          ))}
    </Layout>
  )
}

export default Restaurantes
