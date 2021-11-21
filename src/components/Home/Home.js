import React from "react"

import HomeXS from "./HomeXS"
import HomeXL from "./HomeXL"
import useViewport from "../../hooks/useViewport"
import "./Home.scss"

const Home = ({ imgsMob, imgsDesktop }) => {
  useViewport()

  return (
    <>
      <div className="HomeXS">
        <HomeXS imgs={imgsMob} />
      </div>

      <div className="HomeXL">
        <HomeXL imgs={imgsDesktop}/>
      </div>
    </>
  )
}

export default Home
