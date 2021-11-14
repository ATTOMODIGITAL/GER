import * as React from "react"
import PropTypes from "prop-types"

import Menu from "../components/Menu/Menu"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
