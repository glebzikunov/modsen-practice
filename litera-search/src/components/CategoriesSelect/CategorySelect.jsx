import React from 'react'

const CategorySelect = () => {

  const categories = [
    { value: "all", text: "All" },
    { value: "art", text: "Art" },
    { value: "biography", text: "Biography" },
    { value: "computers", text: "Computers" },
    { value: "history", text: "History" },
    { value: "medical", text: "Medical" },
    { value: "poetry", text: "Poetry" }
  ];

  return (
    <div className='sortings'>
      <label htmlFor='categories'>Categories</label>
      <select id='categories'>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>{category.text}</option>
        ))}
      </select>
    </div>
  )
}

export default CategorySelect