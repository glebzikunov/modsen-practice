import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import NotFound from "components/NotFound/index.jsx"
import BookDetails from "components/BookDetails/index.jsx"
import ErrorBoudary from "components/ErrorBoudary/index.jsx"
import { BookProvider } from "components/Context"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoudary>
      <BrowserRouter>
        <BookProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BookProvider>
      </BrowserRouter>
    </ErrorBoudary>
  </React.StrictMode>
)
