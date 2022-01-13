import * as React from "react"

import useListRestQuery from "../queries/useListRestQuery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import useWindowSize from "../hooks/useWindowSize"
import ProjectItem from "../components/ProjectItem/ProjectItem"
import Carousel from "../components/Carousel/Carousel"
import useViewport from "../hooks/useViewport"
import useRestsPageQuery from "../queries/useRestsPageQuery"

const Restaurantes = () => {
  const data = useListRestQuery()
  const seoData = useRestsPageQuery()
  const size = useWindowSize()
  useViewport()

  return (
    <Layout>
      <Seo
        title="Restaurantes"
        lang="es"
        titleSEO={seoData.seoTitle}
        description={seoData.seoMetaDescription.seoMetaDescription}
      />

      <div className="Main__titles displayNoneXL">
        <h1>Nuestros restaurantes</h1>
        <h6>Grupo El Rincón</h6>
      </div>

      <div className="Main__text">
      {size > 880 // ------------------------------ PROJECT ITEM DESKTOP
        ? data.map((rest, i) => (
            <ProjectItem
              key={i}
              name={rest.node.nombre}
              year={rest.node.zona}
              slug={rest.node.url}
              imgs={rest.node.desktopListadoImgs.slice(0, 4)}
              dir1={rest.node.direccionLinea1} dir2={rest.node.direccionLinea2} time1={rest.node.horarioLinea1} time2={rest.node.horarioLinea2} 
              menu={rest.node.carta} booking={rest.node.reservarLinkONo} bookGroup={rest.node.reservasDeGrupoONo}
              
            />
          ))
        : // ------------------------------------------ CAROUSEL MOBILE
          data.map((rest, i) => (
            <div className="container">
              <Carousel
                key={i}
                images={rest.node.mobileListadoImgs.slice(0, 4)}
                linked={true}
                slug={`restaurantes/${rest.node.url}`}
                dir1={rest.node.direccionLinea1} dir2={rest.node.direccionLinea2} time1={rest.node.horarioLinea1} time2={rest.node.horarioLinea2} 
                menu={rest.node.carta} booking={rest.node.reservarLinkONo} bookGroup={rest.node.reservasDeGrupoONo}
              />
              <div className="justify-content-center text-center mb-5 mt-2">
                <p>
                  <b style={{fontSize: 16, lineHeight: 0}}>{rest.node.nombre}</b>
                  <br />
                  {rest.node.zona}
                </p>
              </div>
            </div>
          ))}
      
      </div>

    </Layout>
  )
}

export default Restaurantes
