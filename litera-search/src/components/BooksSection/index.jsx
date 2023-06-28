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
            booksArr.map((book, index) => (
              <BookCard
                key={index}
                bookId={book.id}
                bookCover={
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.smallThumbnail
                }
                bookCategories={
                  book.volumeInfo.categories &&
                  Array.from(book.volumeInfo.categories)[0]
                }
                bookTitle={book.volumeInfo.title}
                bookAuthors={
                  book.volumeInfo.authors &&
                  Array.from(book.volumeInfo.authors).join(", ")
                }
              />
            ))}
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
