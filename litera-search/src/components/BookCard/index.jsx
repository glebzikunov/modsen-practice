import React from 'react'
import './styles.css'

const BookCard = ({ bookCover, bookCategories, bookTitle, bookAuthors }) => {
  const notFound = './src/assets/images/thumbnail-not-found.png'
  
  return (
    <div className="book-card">
      <div className="book-card-wrapper">
        <div className="book-card-thumbnail">
          <a href="#">
            <img src={bookCover || notFound} alt="Book Cover" />
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

export default BookCard;