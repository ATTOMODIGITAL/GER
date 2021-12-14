import React from "react"
import "./ButtonsCTAs.scss"

const ButtonsCTAs = ({ booking, menu, extraClassname }) => {
  const isItBooked = () => {
    if (booking.toLowerCase() === "no") {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div className={`ButtonsCTAs ${extraClassname ? "ExtraButtonsCTAs" : "ExtraButtonsCTA"}`}>
        <a
          href={`${menu?.file?.url}`}
          // target="_blank"
          rel="noreferrer"
          className={`ButtonsCTAs__buton ${extraClassname ?  "" : "ExtraButtonsCTA__buton"}`}
        >
          Ver carta
        </a>
        {isItBooked() && (
          <a
            className={`ButtonsCTAs__buton ${extraClassname ?  "" : "ExtraButtonsCTA__buton"}`}
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

export default ButtonsCTAs
