import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SignUpModal({ show, handleClose }) {
  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="d-flex justify-content-evenly">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              className="flex-grow-1 ms-3"
            />
          </div>
          <div className="d-flex justify-content-evenly">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              className="flex-grow-1 ms-3"
            />
          </div>
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
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="0123456789"
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
          <div className="d-flex justify-content-evenly">
            <label htmlFor="re-password">Repeat password</label>
            <input
              type="password"
              name="re-password"
              placeholder="Must be more than 6 char long"
              className="flex-grow-1 ms-3"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignUpModal;
