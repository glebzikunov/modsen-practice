import React from 'react'
import './BooksSection.css'
import BookCard from '../BookCard/BookCard'

const BooksSection = () => {
  return (
    <section className='books-section'>
      <div className="books-section-wrapper">
        <h4 className='books-section-title'>Found 446 results</h4>
        <div className='books-container'>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </section>
  )
}

export default BooksSection