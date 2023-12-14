import React, { useState } from 'react';


function SearchBox() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={`search-box-container ${isSearchOpen ? 'open' : ''}`}>
      <button className="search-button" onClick={toggleSearch}>
        &#128269; Search
      </button>
      {isSearchOpen && (
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      )}
    </div>
  );
}

export default SearchBox;

