import React from "react";
import SearchBar from "./SearchBar";

function Search() {
  return (
    <div className="w-75 text-center mx-auto mt-5">
      <h1 className="display-4 mb-3">Search <i><b>Adopt A Pet</b></i></h1>
      <SearchBar />
      <ul>
        <li>Search results</li>
      </ul>
    </div>
  );
}

export default Search;
