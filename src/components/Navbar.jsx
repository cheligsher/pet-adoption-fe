import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/main.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogOut = () => {
    alert("You have successfully signed out. See you soon!")
    setUser(false)
    localStorage.clear()
    navigate("/")
  }

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
          {user && <li>
            <NavLink
              to={"/addpet"}
              className="px-3 text-decoration-none py-3 align-middle text-light"
              activeClassName="active"
            >
              Add Pet
            </NavLink>
          </li>}

          {user && <li>
            <NavLink
              to={"/dash"}
              className="px-3 text-decoration-none py-3 align-middle text-light"
              activeClassName="active"
            >
              Dashboard
            </NavLink>
          </li>}

          <div className="ms-auto d-flex flex-row align-items-center">
            {user && (
              <li>
                <button
                  onClick={handleLogOut}
                  className="px-3 text-decoration-none py-3 align-middle text-light"
                >
                  Log Out
                </button>
              </li>
            )}
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
