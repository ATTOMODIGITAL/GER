import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./Home.scss"

const HomeXS = ({ imgs }) => {
  return (
    <div>
      <GatsbyImage image={getImage(imgs[0])} alt="" className="HomeXS--img" />
      <GatsbyImage image={getImage(imgs[1])} alt="" className="HomeXS--img" />
      <GatsbyImage image={getImage(imgs[2])} alt="" className="HomeXS--img" />
      <GatsbyImage image={getImage(imgs[3])} alt="" className="HomeXS--img" />
      <GatsbyImage image={getImage(imgs[4])} alt="" className="HomeXS--img" />
    </div>
  )
}

export default HomeXS
