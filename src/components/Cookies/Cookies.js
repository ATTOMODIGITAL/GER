import React, { useState } from "react"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import "./Cookies.scss"

const Cookies = () => {
  const [state, setstate] = useState(true)

  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      cookieName="gatsby-gdpr-google-analytics"
    >
      <h6>Uso de cookies</h6>
      <p>Utilizamos cookies propias y de terceros para personalizar el contenido y
      para analizar el tráfico de la web. <span> </span>
      <Link to="/cookies" style={{color: "#333"}}>Política de cookies</Link></p>
        {/* <button
          onClick={() => setstate(false)}
        >
          Rechazar
        </button> */}
    </CookieConsent>
  )
}

export default Cookies
