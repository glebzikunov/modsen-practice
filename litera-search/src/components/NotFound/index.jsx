import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-wrapper">
        <h1 className="not-found-title">Sorry</h1>
        <h3 className="not-found-subtitle">That page cannot be found</h3>
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}

export default NotFound
