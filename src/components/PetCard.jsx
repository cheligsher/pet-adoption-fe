import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/main.css";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';


function PetCard({ pet }) {
  const [adoptedPet, setAdoptedPet] = useState("");
  const [loading, setLoading] = useState(false)

  const fetchPetById = async (id) => {
    setLoading(true)
    try {
      if (adoptedPet) return;
      const pet = await axios.get(`http://localhost:80800/pet/${id}`);
      setAdoptedPet(pet.data);
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchPetById(pet);
  }, []);
  // define fostered & adopted
  const petId = pet;
  fetchPetById(petId);
  return (
    <div className="border border-dark my-3 mx-3 w-25 p-2">
          {loading === true && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}

      <img
        height={100}
        width={100}
        src={adoptedPet.picture}
        alt=""
        className="border border-dark"
      />
      <div>{adoptedPet.name}</div>
      <div>{adoptedPet.adoptionStatus}</div>
      <div>{adoptedPet.type}</div>
      <div>{adoptedPet.breed}</div>
      <div className="d-flex justify-content-evenly">
        <div>{adoptedPet.height} CM</div>
        <div>{adoptedPet.weight} KG</div>
      </div>

      <div>{adoptedPet.color}</div>
      <div>Dietary restrictions: {adoptedPet.dietary}</div>
      <div>{adoptedPet.bio ? <span>Bio : {adoptedPet.bio} </span> : ""}</div>
      <button className="mt-2">Return Pet</button>
    </div>
  );
}

export default PetCard;
