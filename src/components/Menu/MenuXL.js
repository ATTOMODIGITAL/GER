import React from "react"
import { Link } from "gatsby"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"
import darkLogo from './../../images/logo-dark.svg'
import useLogoQuery from "../../queries/useLogoQuery"

const Menu = () => {
  const data = useLogoQuery()

  return (
    <>
      <div className="MenuXL__brand">
        <Link className="MenuXL__brand__container" to="/">
          <img
            src={darkLogo}
            alt="GER"
            className="MenuXL__brand__container--logoImg"
          />
        </Link>
      </div>

      <div className="MenuXL__content">
        <Link
          partiallyActive={true}
          className="MenuXL__content--navlink"
          activeClassName="MenuXL__content--active"
          to="/restaurantes"
        >
          Nuestros restaurantes
        </Link>

        <Link
          className="MenuXL__content--navlink"
          activeClassName="MenuXL__content--active"
          to="/nosotros"
        >
          Nuestro Grupo
        </Link>

        <Link
          className="MenuXL__content--navlink"
          activeClassName="MenuXL__content--active"
          to="/contacto"
        >
          Contacto
        </Link>
      </div>
    </>
  )
}

export default Menu
