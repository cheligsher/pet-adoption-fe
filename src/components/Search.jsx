import axios from "axios";
import React, { useEffect, useState } from "react";
import PetDetails from "./PetDetails";
import "../styles/main.css"
import { toast } from 'react-toastify';

function Search() {
  const [query, setQuery] = useState("Dog");
  const [petList, setPetList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [selectedPet, setSelectedPet] = useState("")
  
  const getAllPets = async (e) => {
    e.preventDefault()
    try {
      const allPets = await axios.get(`http://localhost:8080/pet/search/${query}`);
      setPetList(allPets.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSelect = (e) => {
    setQuery(e.target.value)
  }

  const handleShowDetails = (pet) => {
    handleShow()
    setSelectedPet(pet)
   };

  return (
    <div className="w-75 text-center mx-auto mt-5 background p-3">
      <h1 className="display-4 mb-3">
        Search{" "}
        <i>
          <b>Adopt A Pet</b>
        </i>
      </h1>
      <form className="d-flex my-2" role="search" onSubmit={getAllPets}>
        <select onChange={handleSelect}>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <ul className="list-group list-group-flush overflow-y">
        {petList.length>0 &&
          petList
          .map((pet) => {
            return(
            <li key={pet._id} className="list-group-item cursor-pointer transparent" onClick={()=>handleShowDetails(pet)}>
              {pet.breed}
            </li>
            )
          })
          }
      </ul>
      <PetDetails handleClose={handleClose} show={show} selectedPet={selectedPet}/>
    </div>
  );
}

export default Search;
