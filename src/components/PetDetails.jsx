import React, { useEffect, useState } from "react";
import "../styles/main.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PetDetails() {
  const [pet, setPet] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPetDetailsById = async () => {
    const id = "63c1516832359b9d39efe089";
    const token = localStorage.getItem("token");
    const res = await axios.get(`http://localhost:8080/pet/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    setPet(res.data);
  };

  useEffect(() => {
    getPetDetailsById();
  }, []);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pet details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {pet && (
            <div>
              <img src="" alt="" />
              <div>Type: {pet.type}</div>
              <div>Name: {pet.name}</div>
              <div>Status: {pet.adoptionStatus}</div>
              <div>Height: {pet.height}</div>
              <div>Weight: {pet.weight}</div>
              <div>Colour: {pet.color}</div>
              <div>Hypoallergenic: {pet.hypoallergenic}</div>
              <div>Dietary Restrictions: {pet.dietary}</div>
              <div>Breed: {pet.breed}</div>
              <div>Bio: {pet.bio}</div>
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
  );
}

export default PetDetails;
