import React from "react";

function PetPreview({ pet, handleShowDetails }) {
  return (
    <div className="mt-5 me-1 ms-1 border border-dark rounded p-2">
      <img src={pet.picture} alt="" style={{width: "100px", height: "100px", borderRadius: "50%", border: "1px solid #a06921"}}/>
      <div>{pet.type}</div>
      <div>{pet.name}</div>
      {/* <div>{pet.breed}</div> */}
      <div>{pet.adoptionStatus}</div>
      <button onClick={() => handleShowDetails(pet)}>Details</button>
    </div>
  );
}

export default PetPreview;
