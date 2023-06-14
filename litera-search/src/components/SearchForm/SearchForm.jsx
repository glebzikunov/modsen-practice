import React, {useState} from 'react'
import CategorySelect from '../CategoriesSelect/CategorySelect'
import SortingSelect from '../SortingSelect/SortingSelect'
import SearchBar from '../SearchBar/SearchBar'
import BOOK_SEARCH_API_KEY from '../../apikey'
import './SearchForm.css'

const SearchForm = ({onSearch}) => {
  const [input, setInput] = useState('');
  
  const fetchData = (value) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${value}&key=${BOOK_SEARCH_API_KEY}&maxResults=30`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.items);
        console.log(json);
        console.log(json.totalItems)
        onSearch(json.totalItems);
      })
      .catch((error) => {
        console.error('Query error: ', error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(input);
  };

  const categories = [
    { value: "all", text: "All" },
    { value: "art", text: "Art" },
    { value: "biography", text: "Biography" },
    { value: "computers", text: "Computers" },
    { value: "history", text: "History" },
    { value: "medical", text: "Medical" },
    { value: "poetry", text: "Poetry" }
  ];

  const sortings = [
    { value: "relevance", text: "Relevance" },
    { value: "newest", text: "Newest" },
  ];

  const handleInputChange = (value) => {
    setInput(value);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <h1 className='search-form-title'>Litera Search</h1>
      <SearchBar value={input} onChange= {(e) => handleInputChange(e.target.value)} />
      <div className='sortings-wrapper'>
        <CategorySelect categories={categories} />
        <SortingSelect sortings={sortings} />
      </div>
    </form>
  )
}

export default SearchForm