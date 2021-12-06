import React from "react"
import "./Input.scss"

const Input = ({
  name,
  text,
  type,
  extraClass,
  value,
  onChange,
  onBlur,
  onFocus,
  error
}) => {
  return (
    <div className="Input__container">
    <label className={`Input__container--input ${extraClass}`}>
      <input
        name={name}
        className="Input__container--input__field"
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <span className="Input__container--input__label">{text}</span>
      <p className="Input__container--input__error"><small>{error}</small></p>
    </label>
    </div>
  )
}

export default Input
