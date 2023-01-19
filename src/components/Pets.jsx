import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/main.css";
import PetTable from "./PetTable";
import { toast } from 'react-toastify';


function Pets() {
  const [pets, setPets] = useState([]);
  const getAllPets = async () => {
    try {
      const allPets = await axios.get("http://localhost:8080/pet");
      setPets(allPets.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getAllPets();
  }, []);

  return (
    <div>
    <PetTable pets={pets} />
    </div>
  );
}

export default Pets;
