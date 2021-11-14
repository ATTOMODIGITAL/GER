import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <p>
        <Link to="/grupo/">El Grupo</Link> <br />
        <Link to="/restaurantes/">Restaurantes</Link> <br />
        <Link to="/contacto">Contacto</Link>
      </p>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
