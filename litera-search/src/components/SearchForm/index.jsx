import React, { useState } from "react"
import FilterSelect from "../FilterSelect/index"
import SearchBar from "../SearchBar/index"
import { CATEGORIES, SORTINGS } from "../../constants"
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

  const handleSearchBarChange = (e) => {
    handleInputChange(e.target.value)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h1 className="search-form-title">Litera Search</h1>
      <SearchBar
        value={input}
        onChange={handleSearchBarChange}
        onClick={handleSubmit}
      />
      <div className="sortings-wrapper">
        <FilterSelect
          optionType={CATEGORIES}
          label="Categories"
          value={category}
          onChange={handleCategoryChange}
        />
        <FilterSelect
          optionType={SORTINGS}
          label="Sorting by"
          value={sorting}
          onChange={handleSortingChange}
        />
      </div>
    </form>
  )
}

export default SearchForm
