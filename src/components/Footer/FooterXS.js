import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FooterXS = ({ email, phone, description, image }) => {
  return (
    <div className="FooterXS__container">
      <h3>VISITANOS</h3>
      <Link to="/" ><img className="FooterXS__container__image" src={image} alt={image} /></Link>
      <p className="FooterXS__container__description">{description.content[0].content[0].value}</p>

      <div className="FooterXS__container__items">
        <p>
          <Link to="/privacidad" className="FooterXS__container__items--legal">
            <span>Política de privacidad |</span>
          </Link>
        </p>
        <p>
          <Link to="/cookies" className="FooterXS__container__items--legal">
            <span> Política de cookies </span>
          </Link>
        </p>
        <p>
          <Link to="/aviso-legal" className="FooterXS__container__items--legal">
            <span style={{ marginRight: 20 }}> | Aviso Legal</span>
          </Link>
        </p>
        <p>
        </p>
      </div>
        <div className="FooterXS__container__data">

          <p>CONTACTO</p>
          <p>{phone}</p>
          <a className="link" href={`mailto:${email}`}><p>{email}</p></a>

        </div>

        <div className="LogosKitDigital-mv">
        <StaticImage
              src="../../images/logoKitDigital1.jpg"
              alt="Attomo"
              placeholder="none"              
              height={50}
              
              
            />
        <StaticImage
              src="../../images/logoKitDigital2.jpg"
              alt="Attomo"
              placeholder="none"            
              height={50}            
            />
          <StaticImage
              src="../../images/logoKitDigital3.jpeg"
              alt="Attomo"
              placeholder="none"              
              height={50}
            />
      </div>

      <a
        className="FooterXS__container__attomo"
        href="https://attomo.digital/"
        target="_blank"
        rel="noreferrer"
      >
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
      </a>
      
    </div>
  )
}

export default FooterXS
