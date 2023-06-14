import React from 'react'
import './BooksSection.css'
import BookCard from '../BookCard/BookCard'

const BooksSection = ({searchValue}) => {
  let resultText = searchValue === 1 ? 'Found 1 result' : `Found ${searchValue} results`;
  
  return (
    <section className='books-section'>
      <div className="books-section-wrapper">
        {searchValue && <h4 className='books-section-title'>{resultText}</h4>}
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