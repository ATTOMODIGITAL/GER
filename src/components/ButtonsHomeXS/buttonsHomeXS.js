import React from "react"
import "./buttonsHomeXS.scss"

const ButtonsHomeXS = ({ booking, menu, extraClassname }) => {
  const isItBooked = () => {
    if (booking.toLowerCase() === "no") {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      {menu &&
        <div className={`ButtonsHomeXS ${extraClassname ? "ExtraButtonsHomeXS" : "ExtraButtonsHomeXS"}`}>
          <a
            href={`${menu?.file?.url}`}
            // target="_blank"
            rel="noreferrer"
            className={`ButtonsHomeXS__buton ${extraClassname ?  "" : "ExtraButtonsHomeXS__buton"}`}
          >
            Ver carta
          </a>
          {isItBooked() && (
            <a
              className={`ButtonsHomeXS__buton ${extraClassname ?  "" : "ExtraButtonsHomeXS__buton"}`}
              href={booking}
              // target="_blank"
              rel="noreferrer"
            >
              Reservar
            </a>
          )}
        </div>
      }
    </>
  )
}

export default ButtonsHomeXS
