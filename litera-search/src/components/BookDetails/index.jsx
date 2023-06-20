import React from "react"
import "./styles.css"

const BookDetails = () => {
  return (
    <main>
      <section className="book-details">
        <div className="book-details-container">
          <div className="book-image-container">
            <img
              src="../src/assets/images/test-thumbnail.webp"
              alt="Book Cover"
            />
          </div>
          <div className="book-info-container">
            <p className="book-category">Category</p>
            <h1 className="book-title">
              React.js : [le framework JavaScript de Facebook]JavaScript de
              Faceboo
            </h1>
            <h2 className="book-author">Book author</h2>
            <div className="book-description">
              <div>
                Book desc React.js : [le framework JavaScript de
                Facebook]dddddddddddddddddddddddd React.js : [le framework
                JavaScript de Facebook] React.js : [le framework JavaScript de
                Facebook] React.js : [le framework JavaScript de Facebook]
                React.js : [le framework JavaScript de Facebook] React.js : [le
                framework JavaScript de Facebook] React.js : [le framework
                JavaScript de Facebook] React.js : [le framework JavaScript de
                Facebook] React.js :de Facebook] React.js : [le framework
                JavaScript de Facebook] React.js : [le framework JavaScript de
                Facebook] React.js :de Facebook] React.js : [le framework
                JavaScript de Facebook] React.js : [le framework JavaScript de
                Facebook] React.js :
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BookDetails
