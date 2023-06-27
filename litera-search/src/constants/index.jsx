export const BOOK_API_URL = import.meta.env.VITE_BOOK_API_URL
export const BOOK_API_KEY = import.meta.env.VITE_BOOK_API_KEY
export const MAX_RESULTS = 30

export const CATEGORIES = [
  { value: "all", text: "All" },
  { value: "art", text: "Art" },
  { value: "biography", text: "Biography" },
  { value: "computers", text: "Computers" },
  { value: "history", text: "History" },
  { value: "medical", text: "Medical" },
  { value: "poetry", text: "Poetry" },
]

export const SORTINGS = [
  { value: "relevance", text: "Relevance" },
  { value: "newest", text: "Newest" },
]
