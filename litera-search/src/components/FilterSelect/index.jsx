import React from "react"
import "./styles.css"

const FilterSelect = ({ optionType, label, onChange }) => {
  const handleSelectChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className="sortings">
      <label htmlFor={label}>{label}</label>
      <select id={label} onChange={handleSelectChange}>
        {optionType.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterSelect
