import * as React from "react"

import Seo from "../components/seo"
import Home from "../components/Home/Home"
import useHomesQuery from "../queries/useHomesQuery"
import useViewport from "../hooks/useViewport"

const IndexPage = () => {
  const data = useHomesQuery()

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
        imgsDesktop={data.desktopImgs}
      />
    </>
  )
}

export default IndexPage
