import axios from "axios";
import React, { useEffect, useState } from "react";
import PetDetails from "./PetDetails";
import SearchBar from "./SearchBar";
import "../styles/main.css"

function Search() {
  const [query, setQuery] = useState("");
  const [petList, setPetList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [selectedPet, setSelectedPet] = useState("")

  const getAllPets = async () => {
    try {
      const allPets = await axios.get(`http://localhost:8080/pet?${query}`);
      setPetList(allPets.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllPets();
  }, [query]);

  const handleShowDetails = (pet) => {
    handleShow()
    setSelectedPet(pet)
   };
  // when search, click on pet => navigate to pet page using _id
  return (
    <div className="w-75 text-center mx-auto mt-5">
      <h1 className="display-4 mb-3">
        Search{" "}
        <i>
          <b>Adopt A Pet</b>
        </i>
      </h1>
      {/* <SearchBar /> */}
      <form className="d-flex my-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search pet by breed..."
          onChange={(e)=> setQuery(e.target.value)}
        />
        <button className=" btn-outline-dark text-light" type="submit">
          Search
        </button>
      </form>
      <ul className="list-group list-group-flush">
        {petList.length &&
          petList
          .filter((pet)=> pet.breed.toLowerCase().includes(query))
          .map((pet) => {
            return(
            <li key={pet._id} className="list-group-item cursor-pointer" onClick={()=>handleShowDetails(pet)}>
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
