import React, { createContext, useState } from "react"

export const BookContext = createContext()

export const BookProvider = ({ children }) => {
  const [booksArr, setBooksArr] = useState([])

  const updateBooksArr = (newBooksArr) => {
    setBooksArr(newBooksArr)
  }

  return (
    <BookContext.Provider value={{ booksArr, updateBooksArr }}>
      {children}
    </BookContext.Provider>
  )
}
