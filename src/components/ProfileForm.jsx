import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Form from "react-bootstrap/Form";
import axios from "axios";

function ProfileForm() {
  const { userDetails, setUserDetails } = useContext(AppContext);
  const { firstName, lastName, email, phone } = userDetails;
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userId = "63c4142330dc3adac282631a"
      const token = localStorage.getItem("token");
      const updatedUser = {
        firstName,
        lastName,
        email,
        phone
      }
      const user = await axios.put(`http://localhost:8080/user/${userId}`,updatedUser,{
        headers: { authorization: `Bearer ${token}` },
      })
      console.log(user)
    } catch (err) {
      console.log(err)
    }
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
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  firstName: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3 flex-fill" controlId="formBasicText">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  lastName: e.target.value,
                })
              }
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Your email" value={email} onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      email: e.target.value,
                    })
                  }/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                phone: e.target.value,
              })
            }
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
