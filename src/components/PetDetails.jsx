import React, { useEffect, useState } from "react";
import "../styles/main.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function PetDetails({handleClose, show, selectedPet}) {
  const [pet, setPet] = useState({});  

  const getPetDetailsById = async () => {
    const id = selectedPet._id;
    const token = localStorage.getItem("token");
    const res = await axios.get(`http://localhost:8080/pet/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    setPet(res.data);
  };

  useEffect(() => {
    getPetDetailsById();
    console.log(selectedPet)
  }, [selectedPet]);

  const handleAdopt = async(pet) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.post(`http://localhost:8080/pet/${pet._id}/adopt`, {}, {
      headers: { authorization: `Bearer ${token}` },
    })
    console.log(res.data)
  }

  const handleFoster = async(pet) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.post(`http://localhost:8080/pet/${pet._id}/foster`, {}, {
      headers: { authorization: `Bearer ${token}` },
    })
    console.log(res.data)
  }

  const handleSave = async(pet) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = axios.post(`http://localhost:8080/pet/${pet._id}/adopt`, {}, {
      headers: { authorization: `Bearer ${token}` },
    })
  }

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

              <div>Height: {pet.height} CM</div>
              <div>Weight: {pet.weight} KG</div>
              </div>
              <div>Colour: {pet.color}</div>
              <div>Hypoallergenic: {pet.hypoallergenic}</div>
              <div>Dietary Restrictions: {pet.dietary}</div>
              <div>Bio: {pet.bio}</div>
              <div className="d-flex justify-content-evenly">

              <button className="mt-2" onClick={() => handleAdopt(selectedPet)}>Adopt Pet</button>
              <button className="mt-2" onClick={() => handleFoster(selectedPet)}>Foster Pet</button>
              <button className="mt-2" onClick={() => handleSave(selectedPet)}>Save Pet</button>

              </div>
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
