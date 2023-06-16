import React, { useState } from "react"
import SearchForm from "./components/SearchForm/index"
import BooksSection from "./components/BooksSection/index"
import "./App.css"

const App = () => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchForm onSearch={handleSearch} />
      </header>
      <main className="App-main">
        <BooksSection searchValue={searchValue} />
      </main>
      <footer className="App-footer">Pod</footer>
    </div>
  )
}

export default App
