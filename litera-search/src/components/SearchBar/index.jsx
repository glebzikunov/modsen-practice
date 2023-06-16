import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './styles.css'

const SearchBar = ({ value, onChange, onClick }) => {
  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' onClick={onClick}/>
      <input 
        type='text'
        name='book-search'
        placeholder='Type to search...'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
