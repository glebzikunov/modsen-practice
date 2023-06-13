import React from 'react'

const SortingSelect = () => {
  
  const sortings = [
    { value: "relevance", text: "Relevance" },
    { value: "newest", text: "Newest" },
  ];
  
  return (
    <div className='sortings'>
      <label htmlFor='sortings'>Sorting by</label>
      <select id='sortings'>
        {sortings.map((sort) => (
          <option key={sort.value} value={sort.value}>{sort.text}</option>
        ))}
      </select>
    </div>
  )
}

export default SortingSelect