import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FooterXL = () => {
  return (
    
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
            //width={900}
            height={100}
            //style={{
            //  zIndex: 1,
            //}}
          />
        </div>
      </a>

     
    
  )
}

export default FooterXL
