import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useViewport from "../../hooks/useViewport"
import Footer from "../Footer/Footer"
import { HiOutlineClock } from "react-icons/hi";
import NavHomeXL from "./NavHomeXL"
import { GoLocation } from "react-icons/go";

import "./Home.scss"


const HomeXL = ({videoDesktop, restaurants ,imgs, links, logos }) => {
  useViewport()
  return (
    <>
      <div className="HomeXL__container">
        <div className="HomeXL__container__banner">
            <NavHomeXL />
            <video src={videoDesktop.file.url} type="video/mp4" autoPlay muted playsInline loop 
              className="HomeXL__container__banner__video"
            >
            </video>
        </div>
        <div className="HomeXL__container__restaurants">
            {restaurants.map((rest, i) => (
              <div key={i} className="HomeXL__container__restaurants--restCard">
                <Link to={`restaurantes/${rest.node.url}`}>
                  <GatsbyImage
                    image={getImage(rest.node.homeImg)}
                    alt=""
                    className="HomeXL__container__restaurants--restCard--img"
                  />
                  <div className="HomeXL__container__restaurants--details">
                    <h2 className="HomeXL__container__restaurants--details--title">{rest.node.homeNameDesktop}</h2>
                    <div className="HomeXL__container__restaurants--details--hover">
                      <div className="HomeXL__container__restaurants--details--hover--item">
                        <GoLocation style={{color:"#fff"}}/>
                        <p>{rest.node.direccionLinea1}</p>
                      </div>
                      <div className="HomeXL__container__restaurants--details--hover--item">
                        <HiOutlineClock style={{color:"#fff"}}/>
                        <div className="HomeXL__container__restaurants--details--hover--item--hour">
                          <p>{rest.node.horarioLinea1}</p>
                          <p>{rest.node.horarioLinea2}</p>
                        </div>
                      </div>
                    </div>
                    <p className="HomeXL__container__restaurants--details--text">{JSON.parse(rest.node.homeDescriptionText.raw).content[0].content[0].value}</p>
                    <button className="HomeXL__container__restaurants--details--button">Ver más</button>
                  </div>
              </Link>
              </div>
            )

            )}
        </div>
        {/* <div className="HomeXL__container__row">
          <div
            className="HomeXL__container__row--restCard"
            style={{ marginRight: 30 }}
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
            style={{ marginRight: 30 }}
          >
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

          <div className="HomeXL__container__row--restCard">
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
        </div> */}
      </div>

      <Footer />
    </>
  )
}

export default HomeXL
