import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/main.css";
import PetDetails from "./PetDetails";
import PetTable from "./PetTable";

function Pets() {
  const [pets, setPets] = useState([]);
  const getAllPets = async () => {
    try {
      const allPets = await axios.get("http://localhost:8080/pet");
      setPets(allPets.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllPets();
  }, []);

  // link to PetDetails on click
  return (
    <div>
    <PetTable pets={pets} />
    </div>
  );
}

export default Pets;
