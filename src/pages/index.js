import * as React from "react"
import Seo from "../components/seo"
import { Script } from "gatsby"
import Home from "../components/Home/Home"
import Cookies from "../components/Cookies/Cookies"
import useHomesQuery from "../queries/useHomesQuery"
//import useRichText from "../hooks/useRichText"
import useListRestQuery from "../queries/useListRestQuery"
import useViewport from "../hooks/useViewport"
import { Script } from "gatsby"

const IndexPage = () => {
  const data = useHomesQuery()
  const data2 = useListRestQuery()

  function eliminarDuplicados(arr) {
    const uniqueArray = []
    for (const obj of arr) {
      if (
        !uniqueArray.some(item => JSON.stringify(item) === JSON.stringify(obj))
      ) {
        uniqueArray.push(obj)
      }
    }
    return uniqueArray
  }

  const arraySinDuplicados = eliminarDuplicados(data2)

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
        description={data.seoMetaDescription}
      />
      <Cookies />
      <Script>
        {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"c7083958ef736a97d794353925bdd4b9"})});`}
      </Script>
      <Home
        videoXS={data.videoMobile}
        videoDesktop={data.videoDesktop}
        restaurants={arraySinDuplicados}
        imgsMob={imgsXL}
        imgsDesktop={imgsXL}
        links={urls}
        logos={logos}
      />

    </>
  )
}

export default IndexPage
