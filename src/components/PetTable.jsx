import React from 'react'

function PetTable({pets}) {
  const handleShowDetails = () => {
    console.log("clicked")
  }
  return (
    <div>
              <h3 className="text-center mx-auto">Pets</h3>

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
      {pets.length &&
        pets.map((pet) => {
          return (
            <tr>
              <td>{pet.type}</td>
              <td>{pet.name}</td>
              <td>{pet.breed}</td>
              <td>{pet.adoptionStatus}</td>
              {/* can access _id. check id _id = fetch id */}
              <td onClick={handleShowDetails}><a className="link-secondary">Details</a></td>
            </tr>
          );
        })}
    </tbody>
  </table></div>
  )
}

export default PetTable