import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./Home.scss"
import MenuXS from "../Menu/MenuXS"

const HomeXS = ({ imgs, links }) => {
  return (
    <>
      <MenuXS />
      <div className="HomeXS--imgsContainer">

        <Link to={`restaurantes/${links[2]}`} className="HomeXS--imgsContainer--link">
          <GatsbyImage
            image={getImage(imgs[2])}
            alt=""
            className="HomeXS--imgsContainer--link--img"
          />
        </Link>

        <Link to={`restaurantes/${links[1]}`} className="HomeXS--imgsContainer--link">
          <GatsbyImage
            image={getImage(imgs[1])}
            alt=""
            className="HomeXS--imgsContainer--link--img"
          />
        </Link>

        <Link to={`restaurantes/${links[3]}`} className="HomeXS--imgsContainer--link">
          <GatsbyImage
            image={getImage(imgs[3])}
            alt=""
            className="HomeXS--imgsContainer--link--img"
          />
        </Link>

        <Link to={`restaurantes/${links[0]}`} className="HomeXS--imgsContainer--link">
          <GatsbyImage
            image={getImage(imgs[0])}
            alt=""
            className="HomeXS--imgsContainer--link--img"
          />
        </Link>

      </div>
    </>
  )
}

export default HomeXS
