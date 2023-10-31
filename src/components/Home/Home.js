import React from "react"

import HomeXS from "./HomeXS"
import HomeXL from "./HomeXL"
import useViewport from "../../hooks/useViewport"
import "./Home.scss"

const Home = ({
  videoXS,
  videoDesktop,
  restaurants,
  imgsMob,
  imgsDesktop,
  links,
  logos,
}) => {
  useViewport()
  return (
    <>
      <div className="HomeXS">
        <HomeXS
          videoXS={videoXS}
          restaurants={restaurants}
          imgs={imgsMob}
          links={links}
        />
      </div>
      <div className="HomeXL">
        <HomeXL
          videoDesktop={videoDesktop}
          restaurants={restaurants}
          imgs={imgsDesktop}
          links={links}
          logos={logos}
        />
      </div>
    </>
  )
}

export default Home
