import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useLogoQuery from "../../queries/useLogoQuery"
import { Link } from "gatsby"

const NavHomeXL = () => {
  const data = useLogoQuery()
  return (
    <div className="NavHomeXL__container">
      <GatsbyImage image={getImage(data.logo)} alt="GER" className="NavHomeXL__container--img"/>
      <div className="NavHomeXL__container--menu">
        <Link className="NavHomeXL__container--menu--item" to="/restaurantes">Nuestros restaurantes</Link>
        <Link className="NavHomeXL__container--menu--item" to="/nosotros">Nuestro Grupo</Link>
        <Link className="NavHomeXL__container--menu--item" to="/contacto">Contacto</Link>
      </div>
    </div>
  )
}

export default NavHomeXL
