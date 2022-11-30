import React from "react"
import "./buttonsHomeXS.scss"

const ButtonsHomeXS = ({ booking, menu }) => {
  const isItBooked = () => {
    if (booking.toLowerCase() === "no") {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div className={`ButtonsHomeXS`}>
            <a
            className={`ButtonsHomeXS__button `}
            href={`${menu?.file?.url}`}
            // target="_blank"
            rel="noreferrer"
            >
            Carta
            </a>
            {isItBooked() && (
            <a
                className={`ButtonsHomeXS__button `}
                href={booking}
                // target="_blank"
                rel="noreferrer"
            >
                Reservar
            </a>
            )}
      </div>
    </>
  )
}

export default ButtonsHomeXS
