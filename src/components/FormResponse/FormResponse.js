import React from "react"
import { navigate } from "gatsby"

import "./FormResponse.scss"

const FormResponse = () => {
  return (
    <div className="FormResponse">
      <h1>¡Mensaje enviado!</h1>
      <h6>Gracias por escribirnos, pronto nos pondremos en contacto.</h6>
      <div className="FormResponse__buttons">
        <a rel="noreferrer" onClick={() => navigate(-2)}>Volver</a>
      </div>
    </div>
  )
}

export default FormResponse
