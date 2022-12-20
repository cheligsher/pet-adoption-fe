import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function LoginModal({ showLogin, handleLoginClose }) {
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
            />
          </div>
          <div className="d-flex justify-content-evenly">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Must be more than 6 char long"
              className="flex-grow-1 ms-3"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginClose}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
