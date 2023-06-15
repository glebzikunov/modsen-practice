import React, {useState} from 'react'
import FilterSelect from '../FilterSelect/index'
import SearchBar from '../SearchBar/index'
import { BOOK_API_KEY, BOOK_API_URL, MAX_RESULTS, CATEGORIES, SORTINGS} from '../../constants'
import './styles.css'

const SearchForm = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');

  const buildUrl = (input, category, sorting) => {
    if (category === 'all' && sorting === 'relevance') {
      return `${BOOK_API_URL}${input}+${BOOK_API_KEY}+${MAX_RESULTS}`;
    } else if (category === 'all' && sorting !== 'relevance') {
      return `${BOOK_API_URL}${input}&orderBy:${sorting}${MAX_RESULTS}`;
    } else {
      return `${BOOK_API_URL}${input}+subject:${category}&orderBy:${sorting}${MAX_RESULTS}`;
    }
  };

  const fetchData = () => {
    const url = buildUrl(input, category, sorting);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        onSearch(json);
      })
      .catch((error) => {
        console.error('Query error: ', error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleSortingChange = (value) => {
    setSorting(value);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <h1 className='search-form-title'>Litera Search</h1>
      <SearchBar value={input} onChange= {(e) => handleInputChange(e.target.value)} />
      <div className='sortings-wrapper'>
        <FilterSelect 
          optionType={CATEGORIES}
          label='Categories'
          onChange={handleCategoryChange}
        />
        <FilterSelect 
          optionType={SORTINGS}
          label='Sorting by'
          onChange={handleSortingChange}
        />
      </div>
    </form>
  )
}

export default SearchForm