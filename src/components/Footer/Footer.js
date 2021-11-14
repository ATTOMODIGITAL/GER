import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FooterXS from "./FooterXS"
import FooterXL from "./FooterXL"
import './Footer.scss'

/* const useContact = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContacto {
        edges {
          node {
            email
            telefono
            direccionLinea1
            direccionLinea2
            igUrl
          }
        }
      }
    }
  `)

  return data.allContentfulContacto.edges[0].node
} */

const Footer = () => {
  //const data = useContact()
  return (
    <>
      <div className="FooterXS">
        {/* <FooterXS
          email={data.email}
          tlf={data.telefono}
          dir1={data.direccionLinea1}
          dir2={data.direccionLinea2}
          ig={data.igUrl}
        /> */}
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
