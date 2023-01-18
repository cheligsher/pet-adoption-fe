import React, { useEffect, useState } from "react";
import "../styles/main.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function UserDetails({handleClose, show, selectedUser}) {
    const [user, setUser] = useState({})

    const getUserDetailsById = async () => {
        const id = selectedUser._id;
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:8080/user/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      };
    
      useEffect(() => {
        getUserDetailsById();
        console.log(selectedUser);
      }, [selectedUser]);

  return (
    <div>

<Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user && (
            <div id="pet-details d-flex justify-content-center">
              <div className="d-flex flex-row justify-content-center">
                <div className="me-2">{user.firstName}</div>
                <div>{user.lastName}</div>
              </div>
                <div className="text-center"><span className="mx-3">☎️</span> {user.phone}</div>
                <div className="text-center"><span className="mx-3">💌</span>{user.email}</div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default UserDetails