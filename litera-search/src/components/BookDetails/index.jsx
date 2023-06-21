import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { IMAGE_NOT_FOUND } from "../../constants"
import "./styles.css"

const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes/" + id.slice(1))
      .then((response) => response.json())
      .then((data) => {
        const foundBook = {
          cover:
            data.volumeInfo.imageLinks &&
            data.volumeInfo.imageLinks.smallThumbnail,
          category: data.volumeInfo.categories,
          title: data.volumeInfo.title,
          authors:
            data.volumeInfo.authors &&
            Array.from(data.volumeInfo.authors).join(", "),
          description: data.volumeInfo.description,
        }
        setBook(foundBook)
      })

    const handlePopState = () => {
      return <Link to="/"></Link>
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [id])

  console.log(book)

  return (
    <main>
      <section className="book-details">
        <div className="book-details-container">
          <div className="book-image-container">
            <img src={book.cover} alt="Book Cover" />
          </div>
          <div className="book-info-container">
            <p className="book-category">{book.category}</p>
            <h1 className="book-title">{book.title}</h1>
            <h2 className="book-author">{book.authors}</h2>
            <div className="book-description">
              <div>{book.description}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BookDetails
