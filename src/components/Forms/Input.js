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
    <>
    <label className={`input ${extraClass}`}>
      <input
        name={name}
        className="input__field"
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <span className="input__label">{text}</span>
    </label>
    <p><small>{error}</small></p>
    </>
  )
}

export default Input
