import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Welcome({ handleLoginShow, handleShow }) {
  const { userDetails, user } = useContext(AppContext);
  const { firstName, lastName } = userDetails;

  return (
    <div className="mt-5">
      <div className="mt-5">
      {user && (
        <h1 className="pt-4">
          Hi {firstName} {lastName}!
        </h1>
      )}
      <h1 className="display-3 mb-4 pt-4">
        Welcome to{" "}
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
      <div className="mb-5"><span className="fs-1">🐾</span><span className="fs-1 ms-5 me-5">🐾</span><span className="fs-1">🐾</span></div>
      
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
    </div>
  );
}

export default Welcome;
