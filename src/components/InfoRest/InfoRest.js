import React from "react"
import { IoLogoInstagram } from "react-icons/io"
import { FaTripadvisor } from "react-icons/fa"
import "./InfoRest.scss"

const InfoRest = ({ dir1, dir2, time1, time2, linkIG, linkTrip, name, categ }) => {
  return (
    <div className="InfoRest">
      {
        name && categ && (<div className="InfoRest__item">
          <h1>{name}</h1>
          <h6>{categ}</h6>
        </div>)
      }

      <div className="InfoRest__item">
        <p>
          {dir1} <br/>
          {dir2} 
        </p>
      </div>

      <div className="InfoRest__item">
        <p>
          {time1} <br/>
          {time2}
        </p>
      </div>

      <div className="InfoRest__item InfoRest__3">
        <a href={linkIG} target="_blank" rel="noreferrer">
          <IoLogoInstagram fontSize="2.3em" color="#47535B" />
        </a>
        <a href={linkTrip} target="_blank" rel="noreferrer">
          <FaTripadvisor fontSize="2.3em" color="#47535B" />
        </a>
      </div>

    </div>
  )
}

export default InfoRest
