import React, { useEffect, useState } from "react";
import PetCard from "./PetCard";
import "../styles/main.css";
import axios from "axios";

function MyPetPage() {
  const [pets, setPets] = useState([]);
  const [adoptedPet, setAdoptedPet] = useState("");

  const fetchPets = async () => {
    console.log("fetchedPets called")
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

  const fetchPetById = async (id) => {
      console.log("FetchbyId")
      console.log(adoptedPet, "reset?")
    try {
      if(adoptedPet) return
      const pet = await axios.get(`http://localhost:8080/pet/${id}`);
     setAdoptedPet(pet.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="text-center mt-5">
      {pets.adopted?.length &&
        pets.adopted.map((pet) => {
          const petId = pet;
          fetchPetById(petId);
          return (
            <div key={adoptedPet._id}>
              <img height={100} width={100} src={adoptedPet.picture} alt="" className="border border-dark"/>
              <div>{adoptedPet.name}</div>
            </div>
          );
        })}
    </div>
  );
}

export default MyPetPage;
