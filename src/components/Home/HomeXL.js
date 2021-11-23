import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useLogoQuery from "../../queries/useLogoQuery"
import useViewport from "../../hooks/useViewport"
import "./Home.scss"

const HomeXL = ({ imgs, names }) => {
  const data = useLogoQuery()
  useViewport()

  return (
    <div className="HomeXL__container">
      <Link to="/restaurantes">
        <div className="HomeXL__container__upperRow">
          <div
            className="HomeXL__container__upperRow--img"
            style={{ marginRight: 15 }}
          >
          <div className="HomeXL--name">
            <h1 className="HomeXL--name--text">{names[0]}</h1>
            <GatsbyImage image={getImage(imgs[0])} alt="" />
            </div>
          </div>

          <div className="HomeXL__container__upperRow--img">
            <div className="HomeXL--name">
              <h1 className="HomeXL--name--text">{names[1]}</h1>
            </div>
            <GatsbyImage image={getImage(imgs[1])} alt="" />
          </div>
        </div>

        <div className="HomeXL__container__bottomRow">
          <div
            className="HomeXL__container__bottomRow--img1"
            style={{ marginRight: 15 }}
          >
            <h1 className="HomeXL--name">{names[2]}</h1>
            <GatsbyImage
              image={getImage(imgs[2])}
              alt=""
              className="HomeXL__container__bottomRow--img1--img"
            />
          </div>

          <div
            className="HomeXL__container__bottomRow--img2"
            style={{ marginRight: 15 }}
          >
            <GatsbyImage
              image={getImage(data.logo)}
              alt="GER"
              className="HomeXL__container__bottomRow--img2--logo"
            />
            <h1 className="HomeXL--name">{names[3]}</h1>
            <GatsbyImage
              image={getImage(imgs[3])}
              alt=""
              className="HomeXL__container__bottomRow--img2--img"
            />
          </div>

          <div className="HomeXL__container__bottomRow--img3">
            <h1 className="HomeXL--name">{names[4]}</h1>
            <GatsbyImage
              image={getImage(imgs[4])}
              alt=""
              className="HomeXL__container__bottomRow--img3--img"
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeXL
