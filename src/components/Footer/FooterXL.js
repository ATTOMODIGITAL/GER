import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FooterXL = () => {
  return (
    <>
      <div className="FooterXL__bottom__attomo">
        <p>Powered by</p>
        <div className="FooterXL__bottom__attomo--img">
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

      <div className="FooterXL__bottom__legal">
        <Link to="/privacidad" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#e3e7e1" }}>Política de privacidad</p>
        </Link>
        <Link to="/cookies" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#e3e7e1" }}>Política de cookies</p>
        </Link>
        <Link to="/aviso-legal" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#e3e7e1" }}>Aviso Legal</p>
        </Link>
      </div>
    </>
  )
}

export default FooterXL
