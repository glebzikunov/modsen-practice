import Swal from "sweetalert2"
import { MAX_RESULTS, BOOK_API_URL, BOOK_API_KEY } from "../constants"

export const buildUrl = (input, category, sorting, startIndex) => {
  const baseParams =
    "&orderBy=" +
    sorting +
    "&startIndex=" +
    startIndex +
    "&maxResults=" +
    MAX_RESULTS +
    BOOK_API_KEY +
    "&q=" +
    input

  if (category === "all") {
    return BOOK_API_URL + "?" + baseParams
  } else {
    return BOOK_API_URL + "?" + baseParams + "+subject:" + category
  }
}

export const fetchData = (url, onSearch, onLoading) => {
  onLoading(true)
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      onSearch(json)
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error during search query: ${error}`,
      })
    })
    .finally(() => {
      onLoading(false)
    })
}
