import * as React from "react"

import Seo from "../components/seo"
import Home from "../components/Home/Home"
import useHomesQuery from "../queries/useHomesQuery"
import useListRestQuery from "../queries/useListRestQuery"
import useViewport from "../hooks/useViewport"

const IndexPage = () => {
  const data = useHomesQuery()
  const data2 = useListRestQuery()
  const imgsXL = [
    data2[0].node.homeImg,
    data2[1].node.homeImg,
    data2[2].node.homeImg,
    data2[3].node.homeImg,
    data2[4].node.homeImg
  ]
  const names = [
    data2[0].node.nombre,
    data2[1].node.nombre,
    data2[2].node.nombre,
    data2[3].node.nombre,
    data2[4].node.nombre
  ]

  useViewport()
  return (
    <>
      <Seo
        title="Home"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescripcion}
      />
      <Home
        imgsMob={data.mobileImgs}
        imgsDesktop={imgsXL}
        names={names}
      />
    </>
  )
}

export default IndexPage
