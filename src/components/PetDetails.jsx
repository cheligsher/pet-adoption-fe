import React, { useEffect } from "react";
import "../styles/main.css";
import axios from "axios";

function PetDetails() {
  // pet id from props/ context?
  const getPetDetailsById = async () => {
    const res = await axios.get("http://localhost:8080/pet/:id")
    console.log(res)
  }

  return (
    <div>
      <img src="" alt="" />
      <div>Type:</div>
      <div>Name:</div>
      <div>Status:</div>
      <div>Height:</div>
      <div>Weight:</div>
      <div>Colour:</div>
      <div>Hypoallergenic:</div>
      <div>Dietary Restrictions:</div>
      <div>Breed:</div>
      <div>Bio:</div>
    </div>
  );
}

export default PetDetails;
