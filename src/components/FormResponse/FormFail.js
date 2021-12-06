import React from "react"
import { Link } from "gatsby"

import "./FormResponse.scss"

const FormResponse = () => {
  return (
    <div className="FormResponse">
      <h1>Ha habido un error</h1>
      <h6>Ha habido un error en el servidor. Por favor intentelo de nuevo.</h6>
      <div className="FormResponse__buttons">
        <Link to="/contacto">Volver</Link>
      </div>
    </div>
  )
}

export default FormResponse