import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FooterXS from "./FooterXS"
import FooterXL from "./FooterXL"
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <div className="FooterXS">
        <FooterXS
        />
      </div>

      <div className="FooterXL">
        {/* <FooterXL
          email={data.email}
          tlf={data.telefono}
          dir1={data.direccionLinea1}
          dir2={data.direccionLinea2}
          ig={data.igUrl}
        /> */}
      </div>
    </>
  )
}

export default Footer
