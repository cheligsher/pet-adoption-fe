import React, {useContext} from 'react'
import AppContext from "../context/AppContext";
import "../styles/main.css";


function Welcome({handleLoginShow, handleShow}) {
    const { userDetails, user } = useContext(AppContext);
  const { firstName, lastName } = userDetails

  return (
    <div>
        {user && (
        <h1>
          Hi {firstName} {lastName}!
        </h1>
      )}
      <h1 className="display-3 mb-4">
        Welcome to {" "}
        <i>
          <b id="adopt-a-pet">Adopt A Pet</b>
        </i>
        !
      </h1>
      <p className="fs-3 w-50 mx-auto">
        At{" "}
        <i>
          <b>Adopt A Pet</b>
        </i>
        , our goal is to provide you with an easy-to-use platform that will help
        pair you up with a fur-friend!
      </p>
      <p className="fs-1 mb-5 mt-4">🐾 🐕 🐈 🐇 🐥 🦔 🐾</p>
      {!user && (
        <button className="me-5 mb-5 fs-3" onClick={handleLoginShow}>
          Log in
        </button>
      )}
      {!user && (
        <button className="mb-5 fs-3" onClick={handleShow}>
          Sign up
        </button>
      )}
    </div>
  )
}

export default Welcome