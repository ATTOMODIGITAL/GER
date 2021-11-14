import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { IoLogoInstagram } from "react-icons/io"
import { Link } from "gatsby"

const FooterXS = ({ email, tlf, dir1, dir2, ig }) => {
  return (
    <>
      <div className="FooterXS--item">
        <p>{dir1}</p>
        <p>{dir2}</p>
        <p>España</p>{" "}
      </div>

      <div className="FooterXS--item">
        <p>{tlf}</p>
        <p>{email}</p>
      </div>

      <div className="FooterXS--item">
        <a href={ig} target="_blank" rel="noreferrer">
          <IoLogoInstagram fontSize="2.3em" color="#47535B" />
        </a>
      </div>

      <div className="FooterXS--item__attomo">
          <p>Powered by</p>
          <div className="FooterXS--item__attomo--img"
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

        <div className="FooterXS--item">
          <Link to="/aviso-legal" className="FooterXS--item--legal">
            <p style={{color: "#e3e7e1"}}>Aviso Legal</p>
          </Link>
          <Link to="/privacidad" className="FooterXS--item--legal">
            <p style={{color: "#e3e7e1"}}>Política de privacidad</p>
          </Link>
        </div>

    </>
  )
}

export default FooterXS
