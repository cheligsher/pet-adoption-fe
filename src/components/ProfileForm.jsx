import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from 'react-toastify';
import { useState } from "react";


function ProfileForm() {
  const { userDetails, setUserDetails } = useContext(AppContext);
  const [passwords, setPasswords] = useState({})
  const { firstName, lastName, email, phone } = userDetails;
  const { newPassword, reNewPassword } = passwords
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const password = userDetails.password 
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.userId
      const token = JSON.parse(localStorage.getItem("token"));
      const updatedUser = {
        firstName,
        lastName,
        email,
        phone,
        password,
        newPassword,
        reNewPassword
      }
      await axios.put(`http://localhost:8080/user/${userId}`,updatedUser,{
        headers: { authorization: `Bearer ${token}` },
      })
      toast.success("Your profile has been updated!")
    } catch (err) {
      console.log("profile err", err)
      toast.error(err.message)
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
          <Form.Control type="password" placeholder="Your new password" value={newPassword}
          onChange={(e)=> setPasswords({...passwords, newPassword: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repeat new password</Form.Label>
          <Form.Control type="password" placeholder="Repeat your new password" value={reNewPassword} onChange={(e)=> setPasswords({...passwords, reNewPassword: e.target.value})}/>
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
