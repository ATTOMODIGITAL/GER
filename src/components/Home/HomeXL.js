import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useViewport from "../../hooks/useViewport"
import Footer from "../Footer/Footer"
import "./Home.scss"

const HomeXL = ({ imgs, links, logos }) => {
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
              <GatsbyImage
                image={getImage(imgs[0])}
                alt=""
                className="HomeXL__container__row--restCard--img"
              />
              <GatsbyImage
                image={getImage(logos[0])}
                alt=""
                className="HomeXL__container__row--restCard--name"
              />
            </Link>
          </div>

          <div className="HomeXL__container__row--restCard">
            <Link to={`restaurantes/${links[1]}`}>
              <GatsbyImage
                image={getImage(imgs[1])}
                alt=""
                className="HomeXL__container__row--restCard--img"
              />
              <GatsbyImage
                image={getImage(logos[1])}
                alt=""
                className="HomeXL__container__row--restCard--name"
              />
            </Link>
          </div>
        </div>

        <div className="HomeXL__container__row">
          <div
            className="HomeXL__container__row--restCard"
            style={{ marginRight: 14 }}
          >
            <Link to={`restaurantes/${links[2]}`}>
              <GatsbyImage
                image={getImage(imgs[2])}
                alt=""
                className="HomeXL__container__row--restCard--img"
              />
              <GatsbyImage
                image={getImage(logos[2])}
                alt=""
                className="HomeXL__container__row--restCard--name"
              />
            </Link>
          </div>

          <div className="HomeXL__container__row--restCard">
            <Link to={`restaurantes/${links[3]}`}>
              <GatsbyImage
                image={getImage(imgs[3])}
                alt=""
                className="HomeXL__container__row--restCard--img"
              />
              <GatsbyImage
                image={getImage(logos[3])}
                alt=""
                className="HomeXL__container__row--restCard--name"
              />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default HomeXL
