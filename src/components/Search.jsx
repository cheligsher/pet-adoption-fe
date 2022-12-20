import React from "react";
import SearchBar from "./SearchBar";

function Search() {
  return (
    <div className="w-75 text-center mx-auto mt-5">
      <SearchBar />
      <ul>
        <li>Search results</li>
      </ul>
    </div>
  );
}

export default Search;
