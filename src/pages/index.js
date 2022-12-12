import * as React from "react"
import Seo from "../components/seo"
import Home from "../components/Home/Home"
import Cookies from "../components/Cookies/Cookies"
import useHomesQuery from "../queries/useHomesQuery"
//import useRichText from "../hooks/useRichText"
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
  ]
  const urls = [
    data2[0].node.url,
    data2[1].node.url,
    data2[2].node.url,
    data2[3].node.url,
    data2[4].node.url,
  ]
  const logos = [
    data2[0].node.logo,
    data2[1].node.logo,
    data2[2].node.logo,
    data2[3].node.logo,
  ]

  useViewport()

  return (
    <>
      <Seo
        title="Home"
        lang="es"
        titleSEO={data.seoTitle}
        description={data.seoMetaDescription.seoMetaDescription}
      />
      <Cookies />
      <Home videoXS={data.videoHomeMobile} videoDesktop={data.videoHomeDesktop} restaurants={data2} imgsMob={imgsXL} imgsDesktop={imgsXL} links={urls} logos={logos} />
    </>
  )
}

export default IndexPage
