import * as React from "react"
import PropTypes from "prop-types"

import Menu from "../components/Menu/Menu"
import useViewport from "../hooks/useViewport";
import "./layout.scss"

const Layout = ({ children }) => {
  useViewport();
  return (
    <div className="Layout">
      <Menu />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
