import React from "react"

import useListRestQuery from "../../queries/useListRestQuery"
import "./Form.scss"
import Input from "./Input"

const FormGroup = () => {
  const data = useListRestQuery()

  return (
    <form method="post" className="Form">
      <div className="Form__rests">
        <label>
        <span className="Form__rests--label">
          Restaurante
        </span>
          <select>
            <option value="Solo rests con grupos">Coming soon... </option>
            <option value="Solo rests con grupos">Only restaurants with Group option</option>
          </select>
        </label>
      </div>

      <div className="Form__userInfo">
        <Input name="name" type="text" text="Nombre" extraClass="infoInput" />
        <Input name="email" type="email" text="Email" extraClass="infoInput" />
        <Input name="phone" type="text" text="Teléfono" extraClass="infoInput" />
      </div>

      <div className="Form__coments">
        <Input name="coments" type="text" text="Comentarios" extraClass="comentsInput" />
      </div>

      <div className="Form__checkboxes">
        <label>
          <span className="Form__checkboxes--checkLabel">
            Acepto la política de privacidad y aviso legal
          </span>
          <input name="legal" type="checkbox" />
        </label>
        <label>
          <span className="Form__checkboxes--checkLabel">
            Acepto recibir comunicaciones comerciales
          </span>
          <input name="comms" type="checkbox" />
        </label>
      </div>

      <div className="Form__button">
        <button>Enviar</button>
      </div>
    </form>
  )
}

export default FormGroup
