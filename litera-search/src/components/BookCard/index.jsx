import React from "react"
import * as Constants from "../../constants"
import "./styles.css"

const BookCard = ({ bookCover, bookCategories, bookTitle, bookAuthors }) => {
  return (
    <div className="book-card">
      <div className="book-card-wrapper">
        <div className="book-card-thumbnail">
          <a href="#">
            <img
              src={bookCover || Constants.IMAGE_NOT_FOUND}
              alt="Book Cover"
            />
          </a>
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
