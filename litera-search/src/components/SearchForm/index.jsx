import React, { useState } from "react"
import FilterSelect from "../FilterSelect/index"
import SearchBar from "../SearchBar/index"
import * as Constants from "../../constants"
import "./styles.css"

const SearchForm = ({
  onSubmit,
  onCategoryChange,
  onSortingChange,
  category,
  sorting,
  onInputChange,
}) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(input)
  }

  const handleInputChange = (value) => {
    setInput(value)
    onInputChange(value)
  }

  const handleCategoryChange = (value) => {
    onCategoryChange(value)
  }

  const handleSortingChange = (value) => {
    onSortingChange(value)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h1 className="search-form-title">Litera Search</h1>
      <SearchBar
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
        onClick={handleSubmit}
      />
      <div className="sortings-wrapper">
        <FilterSelect
          optionType={Constants.CATEGORIES}
          label="Categories"
          value={category}
          onChange={handleCategoryChange}
        />
        <FilterSelect
          optionType={Constants.SORTINGS}
          label="Sorting by"
          value={sorting}
          onChange={handleSortingChange}
        />
      </div>
    </form>
  )
}

export default SearchForm
