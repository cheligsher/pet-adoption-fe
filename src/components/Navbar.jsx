import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/main.css'


function Navbar() {
  return (
    <div>
        <nav className="nav-bar mx-auto">
        <ul className="list-unstyled mx-5 d-flex flex-row py-3">
          <li>
              <NavLink
                to={"/"}
                className="px-3 text-decoration-none py-3 align-middle text-light"
                activeClassName="active"
              >
                Home
              </NavLink>
          </li>
          <li>
              <NavLink
                to={"/"}
                className="px-3 text-decoration-none py-3 align-middle text-light"
                activeClassName="active"
              >
                My Pets
              </NavLink>
          </li>
          <li>
              <NavLink
                to={"/search"}
                className="px-3 text-decoration-none py-3 align-middle text-light"
                activeClassName="active"
              >
                Search
              </NavLink>
          </li>
          {/* <li>
              <NavLink
              onClick={}
                className="px-3 text-decoration-none py-3 link align-middle"
                activeClassName="active"
              >
                Sign Out
              </NavLink>
          </li> */}
          {/* <img src={require("../images/dog_logo.png")} alt="" width={40} /> */}
          <div className="ms-auto">
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar