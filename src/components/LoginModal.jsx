import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import AppContext from "../context/AppContext";

function LoginModal({ showLogin, handleLoginClose }) {
  const { userDetails, setUserDetails, setUser } = useContext(AppContext)

  const handleLogin = async() => {
    const res = await axios.post("http://localhost:8080/login", {
      email: userDetails.email,
      password: userDetails.password
    })
    console.log(res.data)
    setUser(true)
    handleLoginClose()
  }
  return (
    <div>
      <Modal centered show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="d-flex justify-content-evenly">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@doe.com"
              className="flex-grow-1 ms-3"
              onChange={(e)=> setUserDetails.email(e.target.value)}
              value={userDetails.email}
            />
          </div>
          <div className="d-flex justify-content-evenly">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Must be more than 6 char long"
              className="flex-grow-1 ms-3"
              onChange={(e)=> setUserDetails.password(e.target.value)}
              value={userDetails.password}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
