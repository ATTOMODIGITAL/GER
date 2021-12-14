import React, { useState } from "react"
import { Link } from "gatsby"

import Carousel from "../Carousel/Carousel"
import Grid from '../Grid/Grid'
import gridButton from "../../images/squares-grid.png"
import carouselButton from "../../images/square-lista.png"
import "./ProjectItem.scss"

const ProjectItem = ({ name, year, slug, imgs, dir1, dir2, time1, time2, menu, booking, bookGroup }) => {
  const [state, setState] = useState(true)

  const handleClick = () => {
    setState(!state)
  }

  return (
    <>
      {state ? ( // -------------------------------------------------------- Carousel
        <div className="container mb-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-11 col-lg-11 col-sm-12">
              <Carousel
                images={imgs}
                name={`${name}, ${year}`}
                linked={true}
                slug={`restaurantes/${slug}`}
                dir1={dir1} dir2={dir2} time1={time1} time2={time2} menu={menu} booking={booking}
                bookGroup={bookGroup}
              />
            </div>

            <div className="col-1">
              <img
                onClick={handleClick}
                src={gridButton}
                alt="click"
                className="buttonProject"
              />
            </div>
          </div>
        </div>
      ) : (
        // ----------------------------------------------------------------- Grid
        <div className="container mb-2 pb-3">
          <div className="row pb-5">
            <div className="col-11">
              <p className="text-grid">
                {name}, {year}
              </p>
              <Link to={`/restaurantes/${slug}`}>
                <Grid images={imgs} />
              </Link>
            </div>

            <div className="col-1">
              <img
                onClick={handleClick}
                src={carouselButton}
                alt="click"
                className="buttonProject"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectItem
