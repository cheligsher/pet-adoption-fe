import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/main.css";
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
const token = JSON.parse(localStorage.getItem("token"));


function PetCard({ pet }) {
  const [adoptedPet, setAdoptedPet] = useState("");
  const [loading, setLoading] = useState(false)

  const fetchPetById = async (id) => {
    setLoading(true)
    try {
      const pet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pet/${id}`);
      setAdoptedPet(pet.data);
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false)
  };

  const handleReturn = async(id) => {
    setLoading(true)
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/pet/${id}/return`,{},{
        headers: { authorization: `Bearer ${token}` },
      })
      console.log(res)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPetById(pet);
  }, []);
  // define fostered & adopted

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
      <button className="mt-2" onClick={()=>handleReturn(adoptedPet._id)}>Return Pet</button>
    </div>
  );
}

export default PetCard;
