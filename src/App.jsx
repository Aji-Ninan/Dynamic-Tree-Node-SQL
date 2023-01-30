import React, { useState } from 'react';
import './App.css'

function App() {
  const [categories, setCategories] = useState([{ name: 'Category A', subcategories: [] }]);

  const addCategory = () => {
    const name = prompt('Enter Category Name:');
    setCategories([...categories, { name, subcategories: [] }]);
  };

  const addSubCategory = (index) => {
    const name = prompt('Enter SubCategory Name:');
    const updatedCategories = [...categories];
    updatedCategories[index].subcategories = [...updatedCategories[index].subcategories, name];
    setCategories(updatedCategories);
  };

  return (
    <div className='container'>
      <h1>Dynamic Tree Structure</h1>
      <button onClick={addCategory}>Add Category</button>
      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.name}</h3>
          {category.subcategories.map((subcategory, subIndex) => (
            <div key={subIndex}>
              <p>{subcategory}</p>
            </div>
          ))}
          <button onClick={() => addSubCategory(index)}>Add SubCategory</button>
        </div>
      ))}
    </div>
  );
}

export default App;
