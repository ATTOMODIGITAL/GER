import React from "react"
import "./Input.scss"

const Input = ({ name, text, type, extraClass}) => {
  return (
    <label className={`input ${extraClass}`}>
      <input name={name} className="input__field" type={type} placeholder=" " />
      <span className="input__label">{text}</span>
    </label>
  )
}

export default Input
