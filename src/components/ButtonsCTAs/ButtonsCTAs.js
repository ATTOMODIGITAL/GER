import React from "react"
import pdf from "../../../public/static/53b0d2db445704ecbdab47c651e438ff/carta.pdf"

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
          href={`${menu?.file?.url}`}
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
