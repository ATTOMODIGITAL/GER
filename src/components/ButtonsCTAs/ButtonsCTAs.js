import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./ButtonsCTAs.scss"
const ButtonsCTAs = ({ booking, menu }) => {
  const isItBooked = () => {
    if (booking.toLowerCase() === "no") {
      return false
    } else {
      return true
    }
  }
  console.log(menu)
  return (
    <>
    <div className="ButtonsCTAs">
      <a className="ButtonsCTAs__buton" href={menu} target="_blank" rel="noreferrer">
        Ver carta
      </a>
      {isItBooked() && (
        <a className="ButtonsCTAs__buton" href={booking} target="_blank" rel="noreferrer">
          Reservar
        </a>
      )}
    </div>
    </>
  )
}

export default ButtonsCTAs
