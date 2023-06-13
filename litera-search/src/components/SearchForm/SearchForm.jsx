import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import CategorySelect from '../CategoriesSelect/CategorySelect'
import SortingSelect from '../SortingSelect/SortingSelect'
import SearchBar from '../SearchBar/SearchBar'
import './SearchForm.css'

const SearchForm = () => {
  const [input, setInput] = useState('');

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

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className='search-form'>
      <h1 className='search-form-title'>Litera Search</h1>
      <SearchBar value={input} onChange={handleInputChange} />
      <div className='sortings-wrapper'>
        <CategorySelect categories={categories} />
        <SortingSelect sortings={sortings} />
      </div>
    </form>
  )
}

export default SearchForm