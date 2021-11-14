import React from "react"

import FooterXS from "./FooterXS"
import FooterXL from "./FooterXL"
import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <div className="FooterXS">
        <FooterXS />
      </div>

      <div className="FooterXL">
        <FooterXL />
      </div>
    </>
  )
}

export default Footer
