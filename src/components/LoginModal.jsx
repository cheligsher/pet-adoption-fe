import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import AppContext from "../context/AppContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginModal({ showLogin, handleLoginClose }) {
  const { userDetails, setUserDetails, setUser } = useContext(AppContext);
  const { email, password } = userDetails;

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/user/login", {
        email: email,
        password: password,
      });
      if (res.data.token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setUser(true);
        handleLoginClose();
      }
      const user = {
        ...userDetails,
        userId: res.data.userId,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
      }
      setUserDetails(user);
      localStorage.setItem("user", JSON.stringify(user))
      // if theres a userid --> stay logged in?
    } catch (err) {
      console.log(err);
      if (err.response) {
        alert(err.response.data);
      }
    }
  };
  return (
    <div>
      <Modal centered show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginClose}>
            Close
          </Button>
          <button onClick={handleLogin}>Log in</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
