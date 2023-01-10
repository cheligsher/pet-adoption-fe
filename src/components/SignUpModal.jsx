import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import AppContext from "../context/AppContext";

function SignUpModal({ show, handleClose }) {
  const { userDetails, setUser, setUserDetails } = useContext(AppContext)
  const handleSignUp = async () => {
    const res = await axios.post("http://localhost:8080/user/signup", {
      email: userDetails.email,
      phone: userDetails.phone,
      password: userDetails.password,
      repassword: userDetails.repassword,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName
    })
    console.log(res.data)
    setUser(true)
    handleClose()
  }

  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
            <Form.Group className="mb-3 flex-fill" controlId="formBasicText">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" onChange={(e)=> setUserDetails({...userDetails, firstName: e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3 flex-fill" controlId="formBasicText">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" onChange={(e)=> setUserDetails({...userDetails, lastName: e.target.value})}/>
            </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" onChange={(e)=> setUserDetails({ ...userDetails, email: e.target.value })}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="number" placeholder="Enter your phone number" onChange={(e)=> setUserDetails({...userDetails, phone: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter a password" onChange={(e)=> setUserDetails({...userDetails, password: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repeat password</Form.Label>
              <Form.Control type="password" placeholder="Re-type your password" onChange={(e)=> setUserDetails({...userDetails, repassword: e.target.value})}/>
            </Form.Group>
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
          {/* <div className="d-flex justify-content-evenly">
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
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button onClick={handleSignUp}>
            Sign up
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignUpModal;
