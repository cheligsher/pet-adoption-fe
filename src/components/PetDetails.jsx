import React, { useContext, useEffect, useState } from "react";
import "../styles/main.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AppContext from "../context/AppContext";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Spinner from 'react-bootstrap/Spinner';
import EditPetModal from "./EditPetModal";


function PetDetails({ handleClose, show, selectedPet }) {
  const {user} = useContext(AppContext)
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(false)
  const token = JSON.parse(localStorage.getItem("token"));


  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const getPetDetailsById = async () => {
    setLoading(true)
    try{
    const id = selectedPet._id;
    const res = await axios.get(`http://localhost:8080/pet/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    setPet(res.data);
    setLoading(false)
  }catch(err){
    toast.error(err.message)
  }
};

  useEffect(() => {
    getPetDetailsById();
    console.log(selectedPet);
  }, [selectedPet]);

  const handleAdopt = async (pet) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/pet/${pet._id}/adopt`,
        {},
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
        toast.success(`${pet.name} has been successfully adopted!`)
    } catch (err) {
      console.log(err)
      toast.error(err.response.data);
    }
  };

  const handleFoster = async (pet) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/pet/${pet._id}/foster`,
        {},
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      toast.error(err.message)
    }
  };

  const handleSave = async (pet) => {
    const res = axios.post(
      `http://localhost:8080/pet/${pet._id}/adopt`,
      {},
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
  };

  const editPet = () => {
    handleShowEdit()
    handleClose()
  }
  
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pet details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {loading === true && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}

          {pet && (
            <div id="pet-details d-flex">
              <img src={pet.picture} alt="" id="pet-picture" className="mx-auto d-block"/>
              <div className="d-flex flex-row justify-content-evenly mt-3 ">
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
              <div className="text-center">Colour: {pet.color}</div>
              <div className="text-center">Hypoallergenic: {pet.hypoallergenic}</div>
              <div className="text-center">Dietary Restrictions: {pet.dietary}</div>
              <div className="text-center">Bio: {pet.bio}</div>
              {user && <div className="d-flex justify-content-evenly">
                <button
                  className="mt-2"
                  onClick={() => handleAdopt(selectedPet)}
                >
                  Adopt Pet
                </button>
                <button
                  className="mt-2"
                  onClick={() => handleFoster(selectedPet)}
                >
                  Foster Pet
                </button>
                <button
                  className="mt-2"
                  onClick={() => handleSave(selectedPet)}
                >
                  Save Pet
                </button>
              </div>}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editPet}>
            Edit pet
          </Button>
        </Modal.Footer>
      </Modal>

      <EditPetModal handleCloseEdit={handleCloseEdit} handleShowEdit={handleShowEdit} showEdit={showEdit} selectedPet={selectedPet}/>
    </div>
  );
}

export default PetDetails;
