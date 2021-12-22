import React from "react"

import useFooterQuery from "../../queries/useFooterQuery"
import FooterXS from "./FooterXS"
import FooterXL from "./FooterXL"
import "./Footer.scss"

const Footer = () => {
  const data = useFooterQuery()

  return (
    <>
      <div className="FooterXS">
        <FooterXS email={data.email} phone={data.telefono}/>
      </div>

      <div className="FooterXL">
        <span style={{marginBottom: 70}}><p>{data.telefono}</p>
        <p>{data.email}</p></span>
        <FooterXL />
      </div>
    </>
  )
}

export default Footer
