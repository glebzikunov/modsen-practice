import React, { useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import FilterSelect from "../FilterSelect/index"
import SearchBar from "../SearchBar/index"
import * as Constants from "../../constants"
import "./styles.css"

const SearchForm = ({ onSearch, onLoading }) => {
  const [input, setInput] = useState("")
  const [category, setCategory] = useState("all")
  const [sorting, setSorting] = useState("relevance")
  const MySwal = withReactContent(Swal)

  const buildUrl = (input, category, sorting) => {
    if (
      (category === "all" && sorting === "relevance") ||
      (category === "all" && sorting !== "relevance")
    ) {
      return (
        Constants.BOOK_API_URL +
        "&orderBy=" +
        sorting +
        Constants.MAX_RESULTS +
        Constants.BOOK_API_KEY +
        "&q=" +
        input
      )
    } else {
      return (
        Constants.BOOK_API_URL +
        "&orderBy=" +
        sorting +
        Constants.MAX_RESULTS +
        Constants.BOOK_API_KEY +
        "&q=" +
        input +
        "+subject:" +
        category
      )
    }
  }

  const fetchData = () => {
    onLoading(true)
    if (input.trim() === "") {
      MySwal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Input string can't be empty!",
      })
      onLoading(false)
    } else {
      const url = buildUrl(input, category, sorting)
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          onSearch(json)
        })
        .catch((error) => {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: `Query error: ${error}`,
          })
        })
        .finally(() => {
          onLoading(false)
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }

  const handleInputChange = (value) => {
    setInput(value)
  }

  const handleCategoryChange = (value) => {
    setCategory(value)
  }

  const handleSortingChange = (value) => {
    setSorting(value)
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
          onChange={handleCategoryChange}
        />
        <FilterSelect
          optionType={Constants.SORTINGS}
          label="Sorting by"
          onChange={handleSortingChange}
        />
      </div>
    </form>
  )
}

export default SearchForm
