import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Form from "react-bootstrap/Form";

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
        <div className="d-flex flex-row justify-content-between">
          <Form.Group className="mb-3 flex-fill" controlId="formBasicText">
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
          </Form.Group>
        </div>

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

        {/* add bio etc! */}

        <button className="me-5 mt-3" onClick={handleSubmit}>
          Update profile
        </button>
      </Form>
    </div>
  );
}

export default ProfileForm;
