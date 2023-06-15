import React from 'react'
import BookCard from '../BookCard/index'
import './styles.css'

const BooksSection = ({ searchValue }) => {
  const numberOfBooks = searchValue.totalItems;
  const bookArr = searchValue.items;
  const resultText = numberOfBooks === 1 ? 'Found 1 result' : `Found ${numberOfBooks} results`;
  
  return (
    <section className='books-section'>
      <div className="books-section-wrapper">
        {searchValue && <h4 className='books-section-title'>{resultText}</h4>}
        <div className='books-container'>
          {bookArr && (bookArr.map((book, index) => (
            <BookCard
              key={index}
              bookCover={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
              bookCategories={book.volumeInfo.categories && Array.from(book.volumeInfo.categories)[0]}
              bookTitle={book.volumeInfo.title}
              bookAuthors={book.volumeInfo.authors && Array.from(book.volumeInfo.authors).join(', ')}
            />
          )))}
        </div>
      </div>
    </section>
  )
}

export default BooksSection;