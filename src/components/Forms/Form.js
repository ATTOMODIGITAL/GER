import React, { useState } from "react"
import { navigate } from "@reach/router"
import { useQueryParam, StringParam } from "use-query-params"

import { validators, orderRests, orderGroupRests } from "./validators"
import useGroupRestQuery from "../../queries/useGroupRestQuery"
import useEmailRestQuery from "../../queries/useEmailRestQuery"
import useListRestQuery from "../../queries/useListRestQuery"
import { sendData } from "../../services/contactService"
import Spinner from "../Spinner/Spinner"
import Select from "./Select"
import Input from "./Input"
import "./Form.scss"

// --------------------------------------------------------------------

const Form = ({ groupOrNot }) => {
  const data = useListRestQuery()
  const dataGroup = useGroupRestQuery()
  const group = () => (groupOrNot ? "Sí" : "No")
  const [groupRest, setGroupRest] = useQueryParam("restaurante", StringParam)
  const [loader, setLoader] = useState(false)
  const [resError, setResError] = useState({ error: false, info: "" })
  const [touched, setTouched] = useState({})
  const [state, setState] = useState({
    fields: {
      rest: "", name: "", email: "", phone: "",
      message: "", legal: "", comms: false, group: group(),
      emailToRest: useEmailRestQuery().emailRestaurante
    },
    errors: {
      rest: "", name: validators.name(),
      email: validators.email(), phone: validators.phone(), 
      message: validators.message(), legal: validators.legal(),
      comms: "",
    },
  })
  const groupRestsOrdered = orderGroupRests(dataGroup, groupRest)
  const orderedRests = orderRests( data )

  const isValid = () => {
    const { errors } = state
    return !Object.keys(errors).some(e => errors[e])
  }

  const onSubmit = e => {
    e.preventDefault()
    // send the data
    if (isValid()) {
      setLoader(true)
      
      sendData(state.fields)
        .then(() => navigate("/enviado-success"))
        .catch(err => {
          navigate("/enviado-error-h101")
          setResError({ err: true, info: err })
        })
    } else {
      setResError({ error: true })
    }
  }

  const onChange = e => {
    const { name, value } = e.target
    setState(prevState => ({
      fields: {
        ...prevState.fields,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value),
      },
    }))
    // Default vaule for select a restaurant
    if (state.fields.rest === "") {
      groupOrNot
        ? setState(prevState => ({
            ...prevState,
            fields: {
              ...prevState.fields,
              rest: groupRest,
            },
          }))
        : setState(prevState => ({
            ...prevState,
            fields: {
              ...prevState.fields,
              rest: data[0].node.nombre,
            },
          }))
    }
  }

  const onChangeCheck = e => {
    setResError({ error: false })

    setState(prevState => ({
      fields: {
        ...prevState.fields,
        legal: e.target.checked,
      },
      errors: {
        ...prevState.errors,
        legal: validators.legal(e.target.checked),
      },
    }))
  }

  const onFocus = e => {
    const { name } = e.target
    setTouched(prevTouch => ({
      ...prevTouch,
      [name]: false,
    }))
  }

  const onBlur = e => {
    const { name } = e.target
    setTouched(prevTouch => ({
      ...prevTouch,
      [name]: true,
    }))
  }

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <form method="post" className="Form" onSubmit={onSubmit}>
          <div className="Form__rests">
            {groupOrNot ? (
              <Select 
                labelname="Restaurante" name="rest" 
                onChange={onChange} value={state.fields.rest}
                array={groupRestsOrdered}
              />
            ) : (
              <Select 
                labelname="Restaurante" name="rest" 
                onChange={onChange} value={state.fields.rest}
                array={orderedRests}
              />
            )}
          </div>

          <div className="Form__userInfo">
            <Input
              name="name" type="text"
              value={state.fields.name} text="Nombre"
              extraClass="infoInput" onFocus={onFocus} 
              onChange={onChange} onBlur={onBlur}
              error={(state.errors.name && touched.name) 
              || (state.errors.name && resError.error) ? state.errors.name : ""}
            />
            <Input
              name="email" type="email"
              value={state.fields.email} text="Email"
              extraClass="infoInput" onFocus={onFocus}
              onChange={onChange} onBlur={onBlur}
              error={(state.errors.email && touched.email) 
              || (state.errors.email && resError.error) ? state.errors.email : ""}
            />
            <Input
              name="phone" type="text"
              text="Teléfono" extraClass="infoInput"
              value={state.fields.phone} onFocus={onFocus}
              onChange={onChange} onBlur={onBlur}
              error={(state.errors.phone && touched.phone) 
              || (state.errors.phone && resError.error) ? state.errors.phone : ""}
            />
          </div>

          <div className="Form__coments">
            <div className="Input__container message-container">
              <label className={`Input__container--input message-container`}>
                <textarea
                  name="message"
                  className="Input__container--input__field message-container"
                  type="text" placeholder=" " value={state.fields.message}
                  onChange={onChange} onBlur={onBlur} onFocus={onFocus}
                />
                <span className="Input__container--input__label">Mensaje</span>
                <p className="Input__container--input__error">
                  <small>
                  {(state.errors.message && touched.message) 
                  || (state.errors.message && resError.error) ? 
                  state.errors.message : ""}
                  </small>
                </p>
              </label>
            </div>
          </div>

          <div className="Form__checkboxes">
            <label>
              <input name="legal" type="checkbox" onChange={onChangeCheck} />
              <span className="Form__checkboxes--checkLabel">
                Acepto la política de privacidad y aviso legal
              </span>
            </label>

            {state.errors.legal && resError.error ? (
              <p className="Input__container--input__error">
                <small>{state.errors.legal}</small>
              </p>
            ) : (
              ""
            )}

            <label>
              <input name="comms" type="checkbox" onChange={onChange} />
              <span className="Form__checkboxes--checkLabel">
                Acepto recibir comunicaciones comerciales
              </span>
            </label>
          </div>

          <div className="Form__button">
            <button>Enviar</button>
          </div>
        </form>
      )}
    </>
  )
}

export default Form
