import React from "react";

function SearchBar() {
  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
        />
        <button
          className="btn btn-outline-dark btn-dark text-light"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
