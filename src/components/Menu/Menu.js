import React from "react"
import MenuXL from "./MenuXL"
import MenuXS from "./MenuXS"
import "./Menu.scss"

const Menu = () => {
  return (
    <>

      <div className="MenuXL">
        <MenuXL />
      </div>

      <div className="MenuXS">
        <MenuXS />
      </div>

    </>
  )
}

export default Menu
