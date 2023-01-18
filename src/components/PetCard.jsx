import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/main.css";

function PetCard({pet}) {
  const [adoptedPet, setAdoptedPet] = useState("");

  const fetchPetById = async (id) => {
    try {
      if(adoptedPet) return
      const pet = await axios.get(`http://localhost:8080/pet/${id}`);
     setAdoptedPet(pet.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(()=>{
    fetchPetById(pet)
  },[])
  // define fostered & adopted
  const petId = pet;
  fetchPetById(petId);
  return (
    <div className="border border-dark rounded mx-auto w-50">
      <div >
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
        <div>{adoptedPet.height} CM</div>
        <div>{adoptedPet.weight} KG</div>
        <div>{adoptedPet.color}</div>
        <div>Dietary restrictions: {adoptedPet.dietary}</div>
        <div>{adoptedPet.bio.length ? <span>Bio : {adoptedPet.bio} </span>: "" }</div>


      </div>

      {/* <div>My name is: </div> */}
      {/* {fostered &&  */}
      {/* <div>I am currently being fostered</div> */}
      {/* } */}
      {/* {adopted &&  */}
      {/* <div>I have been adopted</div> */}
      {/* } */}
      {/* {!fostered && !adopted ?  */}
      {/* <div>I am available for fostering and adopting!</div> */}
      {/* : ""} */}
      {/* <button className="btn btn-dark">More info</button> */}
    </div>
  );
}

export default PetCard;
