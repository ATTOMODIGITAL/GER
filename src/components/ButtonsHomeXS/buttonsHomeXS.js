import React from "react"
import "./buttonsHomeXS.scss"

const ButtonsHomeXS = ({ booking, menu, extraClassname, name, restaurantLink }) => {
  const isItBooked = () => {
    if (booking === undefined || booking === null || booking === "No") {
      return false
    } else {
      return true
    }
  }
  // console.log(name)
  // console.log(booking)

  return (
    <>
      {menu &&
        <div className={`ButtonsHomeXS ${extraClassname ? "ExtraButtonsHomeXS" : "ExtraButtonsHomeXS"}`}>
          {/* {menu !== "" && */}
          <a
            href={`${menu?.file?.url}`}
            // target="_blank"
            rel="noreferrer"
            className={`ButtonsHomeXS__buton ${extraClassname ? "" : "ExtraButtonsHomeXS__buton"}`}
          >
            Ver carta
          </a>
          {/* } */}
          {isItBooked() && (
            <a
              className={`ButtonsHomeXS__buton ${extraClassname ? "" : "ExtraButtonsHomeXS__buton"}`}
              href={booking}
              // target="_blank"
              rel="noreferrer"
            >
              Reservar
            </a>
          )}
        </div>
      }
      {/* {name === "PONZANITO" && 
      <div className={`ButtonsHomeXS ${extraClassname ? "ExtraButtonsHomeXS" : "ExtraButtonsHomeXS"}`}>
          <a
            href={`restaurantes/${restaurantLink}`}
            // target="_blank"
            rel="noreferrer"
            className={`ButtonsHomeXS__buton ${extraClassname ?  "" : "ExtraButtonsHomeXS__buton"}`}
          >
            Próximamente
          </a>
        </div>  
      } */}
    </>
  )
}

export default ButtonsHomeXS
