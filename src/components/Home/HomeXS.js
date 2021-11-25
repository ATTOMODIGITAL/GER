import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./Home.scss"
import MenuXS from "../Menu/MenuXS"

const HomeXS = ({ imgs }) => {
  return (
    <>
      <MenuXS />
      <Link to="/restaurantes">
      <div className="HomeXS--imgsContainer">
        <GatsbyImage
          image={getImage(imgs[0])}
          alt=""
          style={{ marginBottom: 8 }}
        />
        <GatsbyImage
          image={getImage(imgs[1])}
          alt=""
          style={{ marginBottom: 8 }}
        />
        <GatsbyImage
          image={getImage(imgs[2])}
          alt=""
          style={{ marginBottom: 8 }}
        />
        <GatsbyImage
          image={getImage(imgs[3])}
          alt=""
          style={{ marginBottom: 8 }}
        />
        </div>
      </Link>
    </>
  )
}

export default HomeXS
