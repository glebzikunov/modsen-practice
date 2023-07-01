import React, { useState, useContext } from "react"
import Swal from "sweetalert2"
import SearchForm from "components/SearchForm"
import BooksSection from "components/BooksSection"
import ErrorBoundary from "components/ErrorBoundary"
import { fetchData, buildUrl } from "api/api"
import { BookContext } from "components/Context"
import "./App.css"

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [inputString, setInputString] = useState("")
  const [category, setCategory] = useState("all")
  const [sorting, setSorting] = useState("relevance")
  const [numberOfBooks, setNumberOfBooks] = useState(0)
  const { booksArr, updateBooksArr } = useContext(BookContext)
  const [startIndex, setStartIndex] = useState(0)

  const handleInputChange = (value) => {
    setInputString(value)
  }

  const handleSearch = (value) => {
    setSearchValue(value)
    setNumberOfBooks(value.totalItems)
    updateBooksArr(value.items)
  }

  const handleLoading = (loadingStatus) => {
    setLoading(loadingStatus)
  }

  const handleSubmit = (input) => {
    if (input.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Input string can't be empty!",
      })
    } else {
      const url = buildUrl(input, category, sorting, 0)
      updateBooksArr([])
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
    setStartIndex((prevStartIndex) => prevStartIndex + 30)

    const url = buildUrl(inputString, category, sorting, newStartIndex)
    fetchData(
      url,
      (value) => {
        updateBooksArr((prevBooksArr) => [...prevBooksArr, ...value.items])
      },
      () => {
        setLoading(false)
      }
    )
    console.log(booksArr.length)
  }

  return (
    <ErrorBoundary>
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
              numberOfBooks={numberOfBooks}
            />
          )}
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
