import React, { useState } from "react";
import "../styles/main.css";
import QuoteGallery from "./QuoteGallery";
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
    <div className="mx-auto text-center mt-5">
      <Welcome handleShow={handleShow} handleLoginShow={handleLoginShow} />
      <SignUpModal show={show} handleClose={handleClose} />
      <LoginModal showLogin={showLogin} handleLoginClose={handleLoginClose} />
      {/* <QuoteGallery /> */}
    </div>
  );
}

export default Home;
