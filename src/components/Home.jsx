import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import "../styles/main.css";
import ImageGallery from "./ImageGallery";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

function Home() {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const { firstName, lastName, user } = useContext(AppContext);

  return (
    <div className="mx-auto text-center mt-5">
      {user && (
        <h1>
          Hi {firstName} {lastName}!
        </h1>
      )}
      <h1 className="display-3">
        Welcome to{" "}
        <i>
          <b>Adopt A Pet</b>
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
      <p className="fs-1 mb-5">🐾 🐕 🐈 🐇 🐥 🦔 🐾</p>
      {!user && (
        <button className="btn btn-dark me-5 mb-5 fs-3" onClick={handleLoginShow}>
          Log in
        </button>
      )}
      {!user && (
        <button className="btn btn-dark mb-5 fs-3" onClick={handleShow}>
          Sign up
        </button>
      )}
      <SignUpModal show={show} handleClose={handleClose} />
      <LoginModal showLogin={showLogin} handleLoginClose={handleLoginClose} />
      <ImageGallery />
    </div>
  );
}

export default Home;
