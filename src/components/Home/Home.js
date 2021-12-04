import React from "react"

import HomeXS from "./HomeXS"
import NavHomeXL from "./NavHomeXL"
import HomeXL from "./HomeXL"
import useViewport from "../../hooks/useViewport"
import "./Home.scss"
import Footer from "../Footer/Footer"

const Home = ({ imgsMob, imgsDesktop, names, links }) => {
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
        <HomeXL imgs={imgsDesktop} names={names} links={links}/>
      </div>

      <Footer />
    </>
  )
}

export default Home
