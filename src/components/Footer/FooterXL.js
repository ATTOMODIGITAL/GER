import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { IoLogoInstagram } from "react-icons/io"
import { Link } from "gatsby"

const FooterXL = ({ email, tlf, dir1, dir2, ig }) => {
  return (
    <>
      <div className="FooterXL__upper">
        <div className="FooterXL__upper--item">
          <p>{dir1}</p>
          <p>{dir2}</p>
          <p>España</p>
        </div>

        <div className="FooterXL__upper--item">
          <p>{tlf}</p>
          <p>{email}</p>
        </div>

        <div className="FooterXL__upper--item">
          <a href={ig} target="_blank" rel="noreferrer">
            <IoLogoInstagram fontSize="2.3em" color="#47535B" />
          </a>
        </div>
      </div>

      <div className="FooterXL__bottom">
        <div className="FooterXL__bottom__attomo">
          <p>Powered by</p>
          <div className="FooterXL__bottom__attomo--img"
          >
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
            <p style={{color: "#e3e7e1"}}>Política de privacidad</p>
          </Link>
          <Link to="/aviso-legal" className="FooterXL__bottom__legal--item">
            <p style={{color: "#e3e7e1"}}>Aviso Legal</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FooterXL
