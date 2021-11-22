import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./GroupImgs.scss"

const GroupImgs = ({ imgs }) => {
  return (
    <div className="GroupImgs">
      {imgs.map((img, i) => (
        <GatsbyImage
          image={getImage(img)}
          style={{ marginBottom: 30 }}
          alt="img"
          key={i}
          className="GroupImgs--item"
        />
      ))}
    </div>
  )
}

export default GroupImgs
