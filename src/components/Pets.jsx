import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/main.css";

function Pets() {
  const [pets, setPets] = useState([]);
  const getAllPets = async () => {
    try {
      const allPets = await axios.get("http://localhost:8080/pet");
      console.log(allPets);
      setPets(allPets.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(pets);

  useEffect(() => {
    getAllPets();
  }, []);

  // link to PetDetails on click
  return (
              <table className="table w-75 mx-auto">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Name</th>
                    <th scope="col">Breed</th>
                    <th scope="col">Status</th>
                    <th scope="col">.</th>
                  </tr>
                </thead>
                <tbody>
                  

                    {pets.length && pets.map((pet)=>{
                        return( 
                          <tr>
                        
                        <td>{pet.type}</td>
                    <td>{pet.name}</td>
                    <td>{pet.breed}</td>
                    <td>{pet.adoptionStatus}</td>
                    
                    <button className="btn btn-dark">See more</button>
                    </tr>
                    
                    )})}
                   
                </tbody>
              </table>
  );
}

export default Pets;
