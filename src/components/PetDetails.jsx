import React, { useEffect, useState } from "react";
import "../styles/main.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function PetDetails({handleClose, show}) {
  const [pet, setPet] = useState({});  

  const getPetDetailsById = async () => {
    const id = "63c5399906beafdeb03d58d7";
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pet details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {pet && (
            <div id="pet-details d-flex">
              <img src={pet.picture} alt="" id="pet-picture" />
              <div className="d-flex flex-row justify-content-evenly mt-3">

              <div>Name: {pet.name}</div>
              <div>Status: {pet.adoptionStatus}</div>
              </div>
              <div className="d-flex flex-row justify-content-evenly">

              <div>Type: {pet.type}</div>
              <div>Breed: {pet.breed}</div>
              </div>
              <div className="d-flex flex-row justify-content-evenly">

              <div>Height: {pet.height}</div>
              <div>Weight: {pet.weight}</div>
              </div>
              <div>Colour: {pet.color}</div>
              <div>Hypoallergenic: {pet.hypoallergenic}</div>
              <div>Dietary Restrictions: {pet.dietary}</div>
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
