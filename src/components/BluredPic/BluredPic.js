import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./BluredPic.scss"

const BluredPic = ({img, class1, class2 }) => {
  return (
    <div className={`${class1} BluredPic`}>
      <Link className="BluredPic--buttonSeeMore">Ver más</Link>
      <GatsbyImage
        image={getImage(img)}
        alt=""
        className={`${class2} BluredPic--imgSeeMore`}
      />
    </div>
  )
}

export default BluredPic
