import React from 'react'
import PetCard from './PetCard'

function MyPetPage() {
    // define noPets!
  return (
    <div>
        {noPets && <h3>You currently have no fostered/ adopted pets </h3>}
        <div>
            <PetCard />
        </div>
    </div>
  )
}

export default MyPetPage