import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { BOOK_API_URL } from "constants/index"
import IMAGE_NOT_FOUND from "assets/images/thumbnail-not-found.png"
import "./styles.css"

const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(BOOK_API_URL + "/" + id.slice(1))
      .then((response) => response.json())
      .then((data) => {
        const { imageLinks, categories, title, authors, description } =
          data.volumeInfo
        const foundBook = {
          cover: imageLinks && imageLinks.smallThumbnail,
          category: categories || "Nothing found",
          title: title,
          authors: authors && Array.from(authors).join(", "),
          description: description || "Nothing found",
        }
        setBook(foundBook)
      })
  }, [id])

  return (
    <main>
      <section className="book-details">
        <div className="book-details-container">
          <div className="book-image-container">
            <img src={book.cover || IMAGE_NOT_FOUND} alt="Book Cover" />
          </div>
          <div className="book-info-container">
            <p className="book-category">{book.category}</p>
            <h1 className="book-title">{book.title}</h1>
            <h2 className="book-author">{book.authors}</h2>
            <div className="book-description">
              <div>{book.description}</div>
            </div>
            <button className="back-btn" onClick={() => navigate("/")}>
              Back
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BookDetails
