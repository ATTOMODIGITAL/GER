import React from "react"

import "./ButtonsCTAs.scss"
const ButtonsCTAs = ({ booking, menu }) => {
  const isItBooked = () => {
    if (booking.toLowerCase() === "no") {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div className="ButtonsCTAs">
        <a
          href={`${menu?.localFile?.publicURL}`}
          target="_blank"
          rel="noreferrer"
          className="ButtonsCTAs__buton"
        >
          Ver carta
        </a>
        {isItBooked() && (
          <a
            className="ButtonsCTAs__buton"
            href={booking}
            target="_blank"
            rel="noreferrer"
          >
            Reservar
          </a>
        )}
      </div>
    </>
  )
}

export default ButtonsCTAs
