import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/main.css";
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

function PetCard({ pet }) {
  const [adoptedPet, setAdoptedPet] = useState("");
  const [loading, setLoading] = useState(false)
  const token = JSON.parse(localStorage.getItem("token"));

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

  return (
    <div className="border border-dark rounded my-3 mx-3 w-25 p-2">
          {loading === true && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}

      <img
        height={100}
        width={100}
        src={adoptedPet.picture}
        alt=""
        style={{width: "100px", height: "100px", borderRadius: "50%", border: "1px solid #a06921"}}
      />
      <div className="mt-2"><b>{adoptedPet.name}</b></div>
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
