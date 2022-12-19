import React from 'react'

function SearchBar() {
  return (
    <div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar