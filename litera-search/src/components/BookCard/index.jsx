import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

const BookCard = ({
  bookId,
  bookCover,
  bookCategories,
  bookTitle,
  bookAuthors,
}) => {
  const IMAGE_NOT_FOUND = "/src/assets/images/thumbnail-not-found.png"

  return (
    <div className="book-card">
      <div className="book-card-wrapper">
        <div className="book-card-thumbnail">
          <Link to={`/book/:${bookId}`}>
            <img src={bookCover || IMAGE_NOT_FOUND} alt="Book Cover" />
          </Link>
        </div>
        <div className="book-card-info">
          <h3 className="book-card-category">{bookCategories}</h3>
          <h4 className="book-card-title">{bookTitle}</h4>
          <p className="book-card-author">{bookAuthors}</p>
        </div>
      </div>
    </div>
  )
}

export default BookCard
