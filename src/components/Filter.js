import React, { useState, useEffect } from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  const [searchText, setSearchText] = useState(search);

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    onSearchChange(value);
  };

  const filterItems = (items) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
