import React from "react"
import { MdLocationOn } from "react-icons/md"
import { BiTimeFive } from "react-icons/bi"
import "./InfoRest.scss"

const InfoRestXS = ({ dir1, dir2, time1, time2 }) => {
  return (
    <div className="InfoRestXS">

      <div className="InfoRestXS__item">
        <MdLocationOn fontSize="1.3em" color="#47535B" style={{marginBottom: 5}}/>
        <p>{dir1}<br/>{dir2}</p>
      </div>

      <div className="InfoRestXS__item">
        <BiTimeFive fontSize="1.2em" color="#47535B" style={{marginBottom: 5}}/>
        <p>{time1}<br/>{time2}</p>
      </div>

    </div>
  )
}

export default InfoRestXS
