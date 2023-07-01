import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import NotFound from "components/NotFound/index.jsx"
import BookDetails from "components/BookDetails/index.jsx"
import ErrorBoundary from "components/ErrorBoundary/index.jsx"
import { BookProvider } from "components/Context"
import { PATHS } from "constants/index.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <BookProvider>
          <Routes>
            <Route path={PATHS.home} element={<App />} />
            <Route path={PATHS.bookDetails} element={<BookDetails />} />
            <Route path={PATHS.notFound} element={<NotFound />} />
          </Routes>
        </BookProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
