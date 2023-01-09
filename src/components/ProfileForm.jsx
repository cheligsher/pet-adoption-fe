import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Form from 'react-bootstrap/Form';

function ProfileForm() {
  const { userDetails } = useContext(AppContext);
  const { firstName, lastName, email, phone } = userDetails;
  const handleSubmit = (e) => {
    e.preventDefault();
    // set states
  };
  return (
    <div>
      <Form>
        <div className="d-flex flex-row justify-content-between"><Form.Group className="mb-3 flex-fill" controlId="formBasicText">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your first name"
            value={firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3 flex-fill" controlId="formBasicText">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your last name"
            value={lastName}
          />
        </Form.Group></div>
        

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Your email" value={email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Your phone number"
            value={phone}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Old password</Form.Label>
          <Form.Control type="password" placeholder="Your old password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New password</Form.Label>
          <Form.Control type="password" placeholder="Your new password" />
        </Form.Group>

        <button className="btn btn-dark me-5 mt-3">Update profile</button>
      </Form>

      {/* <form
        className="w-50 border border-dark p-3 mx-auto mt-4"
        onSubmit={handleSubmit}
      >
        <div className="d-flex justify-content-evenly">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="John"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Doe"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="john@doe.com"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="number"
            name="phoneNumber"
            value={phone}
            placeholder="0123456789"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="password">Old password</label>
          <input
            type="password"
            name="password"
            placeholder="Must be more than 6 char long"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="password">New password</label>
          <input
            type="password"
            name="password"
            placeholder="Must be more than 6 char long"
            className="flex-grow-1 ms-3"
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <label htmlFor="bio">Short bio</label>
          <textarea
            name="bio"
            placeholder="Write a bit about yourself..."
            rows={3}
            className="flex-grow-1 ms-3"
          />
        </div>
        <button className="btn btn-dark me-5 mt-3">Update profile</button>
      </form> */}
    </div>
  );
}

export default ProfileForm;
