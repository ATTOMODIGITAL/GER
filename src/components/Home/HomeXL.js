import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useViewport from "../../hooks/useViewport"
import "./Home.scss"

const HomeXL = ({ imgs, names, links }) => {
  useViewport()

  return (
    <>
      <div className="HomeXL__container">
        <div className="HomeXL__container__row">

            <div
              className="HomeXL__container__row--restCard"
              style={{ marginRight: 14 }}
            >
          <Link to={`restaurantes/${links[0]}`}>
              <GatsbyImage image={getImage(imgs[0])} alt="" className="HomeXL__container__row--restCard--img"/>
              <p className="HomeXL__container__row--restCard--name">{names[0]}</p>
          </Link>
            </div>

            <div className="HomeXL__container__row--restCard">
          <Link to={`restaurantes/${links[1]}`}>
              <GatsbyImage image={getImage(imgs[1])} alt="" className="HomeXL__container__row--restCard--img"/>
              <p className="HomeXL__container__row--restCard--name">{names[1]}</p>
          </Link>
            </div>
        </div>

        <div className="HomeXL__container__row">
            <div
              className="HomeXL__container__row--restCard"
              style={{ marginRight: 14 }}
            >
          <Link to={`restaurantes/${links[2]}`}>
              <GatsbyImage image={getImage(imgs[2])} alt="" className="HomeXL__container__row--restCard--img"/>
              <p className="HomeXL__container__row--restCard--name">{names[2]}</p>
          </Link>
            </div>

            <div className="HomeXL__container__row--restCard">
          <Link to={`restaurantes/${links[3]}`}>
              <GatsbyImage image={getImage(imgs[3])} alt="" className="HomeXL__container__row--restCard--img" />
              <p className="HomeXL__container__row--restCard--name">{names[3]}</p>
          </Link>
            </div>

        </div>
      </div>
    </>
  )
}

export default HomeXL
