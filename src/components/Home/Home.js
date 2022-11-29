import React from "react"

import HomeXS from "./HomeXS"
import NavHomeXL from "./NavHomeXL"
import HomeXL from "./HomeXL"
import useViewport from "../../hooks/useViewport"
import "./Home.scss"

const Home = ({ restaurants, imgsMob, imgsDesktop, links, logos }) => {
  useViewport()

  return (
    <>
      <div className="HomeXS">
        <HomeXS restaurants={restaurants} imgs={imgsMob} links={links} />
      </div>
      
      <div className="NavHomeXL">
        <NavHomeXL />
      </div>
      <div className="HomeXL">
        <HomeXL imgs={imgsDesktop} links={links} logos={logos}/>
      </div>

    </>
  )
}

export default Home
