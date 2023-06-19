import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import * as Constants from "./constants"

const MySwal = withReactContent(Swal)

export const buildUrl = (input, category, sorting, startIndex) => {
  const baseParams =
    "&orderBy=" +
    sorting +
    "&startIndex=" +
    startIndex +
    "&maxResults=" +
    Constants.MAX_RESULTS +
    Constants.BOOK_API_KEY +
    "&q=" +
    input

  if (category === "all") {
    return Constants.BOOK_API_URL + baseParams
  } else {
    return Constants.BOOK_API_URL + baseParams + "+subject:" + category
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
