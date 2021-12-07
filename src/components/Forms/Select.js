import React from "react"

const Select = ({ labelname, name, onChange, value, array }) => {
  return (
    <label>
      <span className="Form__rests--label">{labelname}</span>
      <select name={name} onChange={onChange} value={value}>
        {array.map((rest, i) => (
          <option key={i} value={ rest }>
            {rest}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select
