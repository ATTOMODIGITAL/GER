import React from "react"
import { useState } from "react"
import { navigate } from "@reach/router"
import { useQueryParam, StringParam } from "use-query-params";
import SquareLoader from "react-spinners/SquareLoader";

import { sendData } from "../../services/contactService"
import useListRestQuery from "../../queries/useListRestQuery"
import useGroupRestQuery from "../../queries/useGroupRestQuery"
import Input from "./Input"
import "./Form.scss"

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PHONE_PATTERN = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/

const validators = {
  email: value => {
    let message
    if (!value) {
      message = "*Es necesario introducir un email"
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "*Es necesario introducir un email válido"
    }
    return message
  },
  name: value => {
    let message
    if (!value) {
      message = "*Es necesario introducir un nombre"
    }
    return message
  },
  phone: value => {
    let message
    if (!value) {
      message = "*Es necesario introducir un teléfono"
    } else if (!PHONE_PATTERN.test(value)) {
      message = "*El teléfono debe ser válido"
    }
    return message
  },
  message: value => {
    let message
    if (!value) {
      message = "*Es necesario introducir un mensaje"
    }
    return message
  },
  legal: value => {
    let message
    if (value !== true) {
      message = "*Es necesario aceptar la política de privacidad"
    }
    return message
  },
}


// --------------------------------------------------------------------


const Form = ({ groupOrNot }) => {
  const data = useListRestQuery()
  const dataGroup = useGroupRestQuery()
  const group = () => (groupOrNot ? "Sí" : "No")
  const [groupRest, setGroupRest] = useQueryParam("restaurante", StringParam);
  const [loader, setLoader ] = useState(false)
  const [ resError, setResError ] = useState({ error: false, info: ''})
  const [touched, setTouched] = useState({})
  const [state, setState] = useState({
    fields: {
      rest: "", 
      name: "", email: "", phone: "",
      message: "",
      legal: "", comms: "",
      group: group()
    },
    errors: {
      rest: "",
      name: validators.name(), email: validators.email(), 
      phone: validators.phone(), message: validators.message(),
      legal: validators.legal(), comms: "",
    }
  })

  const isValid = () => {
    const { errors } = state
    return !Object.keys(errors).some(e => errors[e])
  }

  const allRests = []
  dataGroup.map( e => (allRests.push(e.node.nombre)))
  const firstRest = allRests.filter(rest => rest === groupRest)
  const nextRests = allRests.filter(rest => rest !== groupRest)
  const order = [ ...firstRest, ...nextRests ]

  const onSubmit = e => {
    e.preventDefault()
    // send the data 
    if (isValid()) {
      setLoader(true)
      console.log(state.fields.rest)
      sendData(state.fields)
      .then(() => {
        navigate('/enviado-success')
      })
      .catch(error => {
        navigate('/enviado-error-h101')
        setResError({ error: true, info: error })
      })
    } else {
      setResError({ error: true, info: "*Es necesario introducir todos los campos" })
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value)
      }
    }))
    // Default vaule for select a restaurant
    if ( state.fields.rest === "" ) {
      const { name, value } = e.target
      groupOrNot ? (
        setState((prevState) => ({
          fields: {
            ...prevState.fields,
            rest: groupRest
          },
          errors: {
            ...prevState.errors,
            [name]: validators[name] && validators[name](value)
          }
        }))
        ) : (
       setState((prevState) => ({
        fields: {
          ...prevState.fields,
          rest: data[0].node.nombre
        },
        errors: {
          ...prevState.errors,
          [name]: validators[name] && validators[name](value)
        }
        }))
      )
    }
  }

  const onChangeCheck = (e) => {
    setResError({ error: false })
    let isChecked = e.target.checked;

    setState((prevState) => ({
      fields: {
        ...prevState.fields,
        legal: e.target.checked
      },
      errors: {
        ...prevState.errors,
        legal: validators.legal(isChecked)
      }
    }))
  }

  const onFocus = e => {
    const { name } = e.target
    setTouched(prevTouch => ({
      ...prevTouch,
      [name]: false,
    }))
  }

  const onBlur = (e) => {
    const { name } = e.target
    setTouched((prevTouch) => ({
      ...prevTouch,
      [name]: true
    }))
  }

  return (
    <>
    {
      loader
      ? (
        <div className="ContainerSpin">
           <div className="ContainerSpin__spinner-style"><SquareLoader color="#000" size={15}/></div>
           <div className="ContainerSpin__spinner-style"><SquareLoader color="#000" size={15}/></div>
           <div className="ContainerSpin__spinner-style"><SquareLoader color="#000" size={15}/></div>
        </div>
      ) : (
      <form method="post" className="Form" onSubmit={onSubmit}>
        <div className="Form__rests">

              {
                groupOrNot ? (
                <label>
                  <span className="Form__rests--label">Restaurante</span>
                  <select name="rest" onChange={onChange} 
                    value={state.fields.rest}
                  >
                    {order.map((rest, i) => (
                      <option key={i} value={rest} >
                        {rest}
                      </option>
                    ))}

                  </select>
                </label>
                ) : (
                <label>
                  <span className="Form__rests--label">Restaurante</span>
                  <select 
                    name="rest" onChange={onChange} 
                    value={state.fields.rest}
                  >
                    {data.map((rest, i) => (
                      <option key={i} value={rest.node.nombre} >
                        {rest.node.nombre}
                      </option>
                    ))}
                  </select>
                </label>
                )
              }
        </div>

        <div className="Form__userInfo">
          <Input
            name="name"
            type="text"
            value={state.fields.name}
            text="Nombre"
            extraClass="infoInput"
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
            error={state.errors.name && touched.name ? state.errors.name : ""}
          />
          <Input
            name="email"
            type="email"
            value={state.fields.email}
            text="Email"
            extraClass="infoInput"
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
            error={state.errors.email && touched.email ? state.errors.email : ""}
          />
          <Input
            name="phone"
            type="text"
            text="Teléfono"
            extraClass="infoInput"
            value={state.fields.phone}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
            error={state.errors.phone && touched.phone ? state.errors.phone : ""}
          />
        </div>

        <div className="Form__coments">
          <div className="Input__container">
            <label className={`Input__container--input comentsInput`}>
              <textarea
                name="message"
                className="Input__container--input__field"
                type="text"
                placeholder=" "
                value={state.fields.message}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
              />
              <span className="Input__container--input__label">Mensaje</span>
              <p className="Input__container--input__error">
                <small>
                  {state.errors.message && touched.message ? state.errors.message : ""}
                </small>
              </p>
            </label>
          </div>
        </div>

        <div className="Form__checkboxes">
          <label>
            <input name="legal" type="checkbox" onChange={onChangeCheck}/>
            <span className="Form__checkboxes--checkLabel">
              Acepto la política de privacidad y aviso legal
            </span>
          </label>

          {state.errors.legal && resError.error ? 
          <p className="Input__container--input__error">
          <small>{state.errors.legal}</small></p> : ""}

          <label>
            <input name="comms" type="checkbox" onChange={onChange}/>
            <span className="Form__checkboxes--checkLabel">
              Acepto recibir comunicaciones comerciales
            </span>
          </label>
        </div>
        {resError.error ? <p className="Input__container--input__error"
        style={{marginTop: 20}}>
          {resError.info}</p>  : ""}

        <div className="Form__button">
          <button>Enviar</button>
        </div>
      </form>
      )
    }
   </>
  )
}

export default Form
