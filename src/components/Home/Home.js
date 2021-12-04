import React from "react"

import HomeXS from "./HomeXS"
import NavHomeXL from "./NavHomeXL"
import HomeXL from "./HomeXL"
import useViewport from "../../hooks/useViewport"
import "./Home.scss"

const Home = ({ imgsMob, imgsDesktop, links, logos }) => {
  useViewport()

  return (
    <>
      <div className="HomeXS">
        <HomeXS imgs={imgsMob} links={links} />
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
