import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./Grid.scss"
import BluredPic from "../BluredPic/BluredPic"

const Grid = ({ images }) => {
  return (
    <div className="container py-3">
      <div className="row">
        {images?.slice(0, images.length - 1).map((img, i) => (
          <div
            key={i}
            className="col-lg-6 col-md-4 mb-4 justify-content-center GridItem"
          >
            <GatsbyImage
              image={getImage(img)}
              alt=""
              className="GridItem--img"
            />
          </div>
        ))}
        <BluredPic
          img={images[images.length - 1]}
          class1="col-lg-6 col-md-4 mb-4 justify-content-center GridItem"
          class2="GridItem--img"
        />
      </div>
    </div>
  )
}

export default Grid
