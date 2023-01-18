import React, { useEffect, useState } from "react";
import PetCard from "./PetCard";
import "../styles/main.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';


function MyPetPage() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchPets = async () => {
    setLoading(true)
    try{
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(
      `http://localhost:8080/pet/user/${user.userId}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    setPets(res.data);
    }catch(err){
      toast.error(err.message)
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="text-center mt-5">
      {loading === true && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
      <h2>{pets.adopted.length ? "Here you can see the pets you've fostered or adopted!" : "You currently have no adopted or fostered pets :("}</h2>
      <div className="d-flex flex-row">
      {pets.adopted.length &&
        pets.adopted.map((pet) => {
          return (
              <PetCard pet={pet} />
          );
        })}
            </div>
    </div>
  );
}

export default MyPetPage;
