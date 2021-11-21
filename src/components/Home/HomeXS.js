import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./Home.scss"
import MenuXS from "../Menu/MenuXS"

const HomeXS = ({ imgs }) => {
  return (
    <>
      <MenuXS />

      <GatsbyImage image={getImage(imgs[0])} alt="" style={{ marginBottom: 8}}/>
      <GatsbyImage image={getImage(imgs[1])} alt="" style={{ marginBottom: 8}}/>
      <GatsbyImage image={getImage(imgs[2])} alt="" style={{ marginBottom: 8}}/>
      <GatsbyImage image={getImage(imgs[3])} alt="" style={{ marginBottom: 8}}/>
      <GatsbyImage image={getImage(imgs[4])} alt="" />
    </>
  )
}

export default HomeXS
