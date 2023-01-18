import React, { useEffect, useState } from "react";
import PetCard from "./PetCard";
import "../styles/main.css";
import axios from "axios";

function MyPetPage() {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    console.log("fetchedPets called");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(
      `http://localhost:8080/pet/user/${user.userId}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    setPets(res.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="text-center mt-5">
      {pets.adopted?.length &&
        pets.adopted.map((pet) => {
          return <PetCard pet={pet} />;
        })}
    </div>
  );
}

export default MyPetPage;
