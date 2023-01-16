import React, { useState } from "react";
import PetDetails from "./PetDetails";
import '../styles/main.css'

function PetTable({ pets }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const handleShowDetails = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h3 className="text-center mx-auto">Pets</h3>
      <div className="table-div">
        <div class="container text-center">
          <div class="row">
            {pets.length &&
              pets.map((pet) => {
                return (
                  <div className="col mt-5 mb-5 me-2 border border-dark">
                    <div>{pet.type}</div>
                    <div>{pet.name}</div>
                    <div>{pet.breed}</div>
                    <div>{pet.adoptionStatus}</div>
                    {/* can access _id. check id _id = fetch id */}
                    <button onClick={handleShow}>
                      Details
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <PetDetails handleClose={handleClose} show={show} />
    </div>
  );
}

export default PetTable;
