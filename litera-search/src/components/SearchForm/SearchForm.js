import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'
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

  return (
    <form className='SearchForm'>
      <h1 className='search-form-title'>Search for books</h1>
      <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input 
          type='text'
          name='book-search'
          placeholder='Type to search...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className='sortings-wrapper'>
        <div className='sortings'>
          <label htmlFor='categories'>Categories</label>
          <select id='categories'>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>{category.text}</option>
            ))}
          </select>
        </div>
        <div className='sortings'>
          <label htmlFor='sortings'>Sorting by</label>
          <select id='sortings'>
            {sortings.map((sort) => (
              <option key={sort.value} value={sort.value}>{sort.text}</option>
            ))}
          </select>
        </div>
      </div>
    </form>
  )
}

export default SearchForm;