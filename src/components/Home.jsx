import React, { useState } from "react";
import "../styles/main.css";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import Welcome from "./Welcome";

function Home() {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  return (
    <div className="mx-auto text-center mt-5 background w-75">
      <Welcome handleShow={handleShow} handleLoginShow={handleLoginShow} />
      <SignUpModal show={show} handleLoginShow={handleLoginShow} handleClose={handleClose} />
      <LoginModal showLogin={showLogin} handleLoginClose={handleLoginClose} />
    </div>
  );
}

export default Home;
