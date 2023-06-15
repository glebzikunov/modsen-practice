import React from 'react'
import './styles.css'

const BookCard = () => {
  return (
    <div className="book-card">
      <div className="book-card-wrapper">
        <div className="book-card-thumbnail">
          <a href="#">
            <img src="src/assets/images/test-thumbnail.webp" alt="Book Cover" />
          </a>
        </div>
        <div className="book-card-info">
          <h3 className="book-card-category">Computers</h3>
          <h4 className="book-card-title">Node.js Разработка серверных веб-приложений на JavaScript</h4>
          <p className="book-card-author">Дэвид Хэрон</p>
        </div>
      </div>
    </div>
  )
}

export default BookCard;