import React, { useState } from "react";
import PetDetails from "./PetDetails";
import '../styles/main.css'
import axios from "axios";

function PetTable({ pets }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [selectedPet, setSelectedPet] = useState("")

  const handleShowDetails = (pet) => {
   handleShow()
   setSelectedPet(pet)
  };
  
  return (
    <div>
      <h3 className="text-center mx-auto">Pets</h3>
        <div className="container text-center">
          <div className="row">
            {pets.length &&
              pets.map((pet) => {
                return (
                  <div className="col mt-5 me-2 border border-dark">
                    <div>{pet.type}</div>
                    <div>{pet.name}</div>
                    <div>{pet.breed}</div>
                    <div>{pet.adoptionStatus}</div>
                    <button onClick={()=>handleShowDetails(pet)}>
                      Details
                    </button>
                  </div>
                );
              })}
          </div>
      </div>
      <PetDetails handleClose={handleClose} show={show} selectedPet={selectedPet}/>
    </div>
  );
}

export default PetTable;
