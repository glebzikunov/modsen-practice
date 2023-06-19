import React, { useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import SearchForm from "./components/SearchForm/index"
import BooksSection from "./components/BooksSection/index"
import { fetchData, buildUrl } from "./api"
import "./App.css"

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [inputString, setInputString] = useState("")
  const [category, setCategory] = useState("all")
  const [sorting, setSorting] = useState("relevance")
  const [booksArr, setBooksArr] = useState([])
  const [startIndex, setStartIndex] = useState(1)
  const MySwal = withReactContent(Swal)

  const handleInputChange = (value) => {
    setInputString(value)
  }

  const handleSearch = (value) => {
    setSearchValue(value)
    setBooksArr((prevBooksArr) => [...prevBooksArr, ...value.items])
  }

  const handleLoading = (loadingStatus) => {
    setLoading(loadingStatus)
  }

  const handleSubmit = (input) => {
    if (input.trim() === "") {
      MySwal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Input string can't be empty!",
      })
    } else {
      const url = buildUrl(input, category, sorting, startIndex)
      setBooksArr([])
      fetchData(url, handleSearch, handleLoading)
    }
  }

  const handleCategoryChange = (value) => {
    setCategory(value)
  }

  const handleSortingChange = (value) => {
    setSorting(value)
  }

  const handleLoadMore = () => {
    const newStartIndex = startIndex + 30
    setStartIndex(newStartIndex)

    const url = buildUrl(inputString, category, sorting, newStartIndex)
    fetchData(url, handleSearch, handleLoading)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchForm
          onSubmit={handleSubmit}
          onCategoryChange={handleCategoryChange}
          onSortingChange={handleSortingChange}
          category={category}
          sorting={sorting}
          onInputChange={handleInputChange}
        />
      </header>
      <main className="App-main">
        {loading ? (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        ) : (
          <BooksSection
            searchValue={searchValue}
            booksArr={booksArr}
            onLoadMore={handleLoadMore}
          />
        )}
      </main>
      <footer className="App-footer">Pod</footer>
    </div>
  )
}

export default App
