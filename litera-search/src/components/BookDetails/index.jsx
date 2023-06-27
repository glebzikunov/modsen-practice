import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { BOOK_API_URL } from "../../constants"
import ErrorBoudary from "../ErrorBoudary"
import "./styles.css"

const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const navigate = useNavigate()

  const IMAGE_NOT_FOUND = "/src/assets/images/thumbnail-not-found.png"

  useEffect(() => {
    fetch(BOOK_API_URL + "/" + id.slice(1))
      .then((response) => response.json())
      .then((data) => {
        const foundBook = {
          cover:
            data.volumeInfo.imageLinks &&
            data.volumeInfo.imageLinks.smallThumbnail,
          category: data.volumeInfo.categories || "Nothing found",
          title: data.volumeInfo.title,
          authors:
            data.volumeInfo.authors &&
            Array.from(data.volumeInfo.authors).join(", "),
          description: data.volumeInfo.description || "Nothing found",
        }
        setBook(foundBook)
      })
  }, [id])

  return (
    <ErrorBoudary>
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
    </ErrorBoudary>
  )
}

export default BookDetails
