import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FooterXS = () => {
  return (
    <div className="FooterXS__container">
      <div className="FooterXS__container__attomo">
        <p>Powered by</p>
        <div className="FooterXS__container__attomo--img">
          <StaticImage
            src="../../images/attomo-black.png"
            alt="Attomo"
            placeholder="none"
            style={{
              zIndex: 1,
            }}
          />
        </div>
      </div>

      <div className="FooterXS__container__items">
        <p>
          <Link to="/aviso-legal" className="FooterXS__container__items--legal">
            <span style={{marginRight: 20}}>Aviso Legal</span>
          </Link>
          <Link to="/cookies" className="FooterXS__container__items--legal">
            <span>Política de cookies</span>
          </Link>
        </p>
        <p>
        <Link to="/privacidad" className="FooterXS__container__items--legal">
          <span>Política de privacidad</span>
        </Link>
        </p>
      </div>
    </div>
  )
}

export default FooterXS
