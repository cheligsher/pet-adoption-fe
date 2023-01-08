import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/main.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="nav-bar mx-auto">
        <ul className="list-unstyled mx-5 d-flex flex-row py-3 align-items-center">
          <li>
            <NavLink
              to={"/"}
              className="px-3 text-decoration-none py-3 align-middle text-light"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to={"/MyPetPage"}
                className="px-3 text-decoration-none py-3 align-middle text-light"
                activeClassName="active"
              >
                My Pets
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                to={"/Profile"}
                className="px-3 text-decoration-none py-3 align-middle text-light"
                activeClassName="active"
              >
                Profile
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to={"/search"}
              className="px-3 text-decoration-none py-3 align-middle text-light"
              activeClassName="active"
            >
              Search
            </NavLink>
          </li>

          <div className="ms-auto d-flex flex-row align-items-center">
            {!user && <li className="me-3">
              {/* link to log in and sign up!!!!!!!!!! */}
              <NavLink
                to={"/"}
                className="px-3 text-decoration-none py-3 align-middle text-light"
                activeClassName="active"
              >
                Log in/ Sign up
              </NavLink>
            </li>}
            <button onClick={handleLogoClick}>
              <img src={require("../images/paw_print.png")} alt="" width={40} />
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
