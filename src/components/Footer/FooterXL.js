import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FooterXL = () => {
  return (
    <>
      <a
        className="FooterXL__bottom__attomo"
        href="https://attomo.digital/"
        target="_blank"
        rel="noreferrer"
      >
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
      </a>

      <div className="FooterXL__bottom__legal">
        <Link to="/privacidad" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#c4c5c3" }}>Política de privacidad</p>
        </Link>
        <Link to="/cookies" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#c4c5c3" }}>Política de cookies</p>
        </Link>
        <Link to="/aviso-legal" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#c4c5c3" }}>Aviso Legal</p>
        </Link>
      </div>
      
    </>
  )
}

export default FooterXL
