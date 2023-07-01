import React from "react"
import { Link } from "react-router-dom"
import IMAGE_NOT_FOUND from "assets/images/thumbnail-not-found.png"
import "./styles.css"

const BookCard = ({
  id,
  volumeInfo: { imageLinks, categories, title, authors },
}) => {
  const bookCover = imageLinks && imageLinks.smallThumbnail
  const bookCategories = categories
  const bookTitle = title
  const bookAuthors = authors && Array.from(authors)?.join(", ")

  return (
    <div className="book-card">
      <div className="book-card-wrapper">
        <div className="book-card-thumbnail">
          <Link to={`/book/:${id}`}>
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
