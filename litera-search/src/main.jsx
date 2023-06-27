import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import NotFound from "components/NotFound/index.jsx"
import BookDetails from "components/BookDetails/index.jsx"
import ErrorBoudary from "components/ErrorBoudary/index.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/book/:id",
    element: <BookDetails />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoudary>
      <RouterProvider router={router} />
    </ErrorBoudary>
  </React.StrictMode>
)
