import React, { useState } from "react"
import SearchForm from "./components/SearchForm/index"
import BooksSection from "./components/BooksSection/index"
import "./App.css"

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  const handleLoading = (loadingStatus) => {
    setLoading(loadingStatus)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchForm onSearch={handleSearch} onLoading={handleLoading} />
      </header>
      <main className="App-main">
        {loading ? (
          <span className="loader"></span>
        ) : (
          <BooksSection searchValue={searchValue} />
        )}
      </main>
      <footer className="App-footer">Pod</footer>
    </div>
  )
}

export default App
