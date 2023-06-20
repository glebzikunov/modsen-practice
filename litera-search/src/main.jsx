import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import BookDetails from "./components/BookDetails/index.jsx"
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
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
