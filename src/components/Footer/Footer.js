import React from "react"

import useFooterQuery from "../../queries/useFooterQuery"
import { StaticImage } from "gatsby-plugin-image"
import FooterXS from "./FooterXS"
import FooterXL from "./FooterXL"
import "./Footer.scss"
import { Link } from "gatsby"

const Footer = () => {
  const data = useFooterQuery()

  return (
    <>
      <div className="FooterXS">
        <FooterXS email={data.email} phone={data.telefono} description={JSON.parse(data.descripcionFooter.raw)} image={data.imagenFooter.file.url}/>
      </div>

      <div className="LogosKitDigital">
        <StaticImage
              src="../../images/logoKitDigital1.jpg"
              alt="Attomo"
              placeholder="none"              
              height={70}
              
            />
        <StaticImage
              src="../../images/logoKitDigital2.jpg"
              alt="Attomo"
              placeholder="none"            
              height={70}            
            />
          <StaticImage
              src="../../images/logoKitDigital3.jpeg"
              alt="Attomo"
              placeholder="none"              
              height={70}
            />
      </div>

      <div className="FooterXL">
      <div className="FooterXL__bottom__legal">
        <Link to="/aviso-legal" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#c4c5c3" }}>Aviso Legal</p>
        </Link>
        <Link to="/cookies" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#c4c5c3" }}>Política de cookies</p>
        </Link>
        <Link to="/privacidad" className="FooterXL__bottom__legal--item">
          <p style={{ color: "#c4c5c3" }}>Política de privacidad</p>
        </Link>
      </div>
        
        <FooterXL email={data.email} phone={data.telefono} />
        <div>
          <p>{data.telefono}</p>
          <a href={`mailto:${data.email}`}><p>{data.email}</p></a>
        </div>
      </div>
    </>
  )
}

export default Footer
