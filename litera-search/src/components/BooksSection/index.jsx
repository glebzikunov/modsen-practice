import React from "react"
import BookCard from "components/BookCard"
import "./styles.css"

const BooksSection = ({ searchValue, booksArr, onLoadMore, numberOfBooks }) => {
  const searchResult =
    numberOfBooks === 1
      ? `Found ${numberOfBooks} result`
      : `Found ${numberOfBooks} results`

  return (
    <section className="books-section">
      <div className="books-section-wrapper">
        {searchValue && <h4 className="books-section-title">{searchResult}</h4>}
        <div className="books-container">
          {booksArr &&
            booksArr.map((book) => <BookCard key={book.id} {...book} />)}
        </div>
        {numberOfBooks > 0 && (
          <button className="book-section-btn" onClick={onLoadMore}>
            Load More
          </button>
        )}
      </div>
    </section>
  )
}

export default BooksSection
