import React from "react"
import SquareLoader from "react-spinners/SquareLoader";

import "./Spinner.scss"

const Spinner = () => {
  return (
    <div className="ContainerSpin">
      <div className="ContainerSpin__spinner-style">
        <SquareLoader color="#000" size={15} />
      </div>
      <div className="ContainerSpin__spinner-style">
        <SquareLoader color="#000" size={15} />
      </div>
      <div className="ContainerSpin__spinner-style">
        <SquareLoader color="#000" size={15} />
      </div>
    </div>
  )
}

export default Spinner
