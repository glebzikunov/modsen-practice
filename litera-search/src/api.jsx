import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import * as Constants from "./constants"

const MySwal = withReactContent(Swal)

export const buildUrl = (input, category, sorting, startIndex) => {
  if (
    (category === "all" && sorting === "relevance") ||
    (category === "all" && sorting !== "relevance")
  ) {
    return (
      Constants.BOOK_API_URL +
      "&orderBy=" +
      sorting +
      "&startIndex=" +
      startIndex +
      "&maxResults=" +
      Constants.MAX_RESULTS +
      Constants.BOOK_API_KEY +
      "&q=" +
      input
    )
  } else {
    return (
      Constants.BOOK_API_URL +
      "&orderBy=" +
      sorting +
      "&startIndex=" +
      startIndex +
      "&maxResults=" +
      Constants.MAX_RESULTS +
      Constants.BOOK_API_KEY +
      "&q=" +
      input +
      "+subject:" +
      category
    )
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
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error during search query: ${error}`,
      })
    })
    .finally(() => {
      onLoading(false)
    })
}
