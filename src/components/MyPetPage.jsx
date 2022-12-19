import React from 'react'
import PetCard from './PetCard'
import '../styles/main.css'

function MyPetPage() {
    // define noPets!
  return (
    <div className='text-center mt-5'>
        {/* {noPets &&  */}
        <h3>You currently have no fostered/ adopted pets </h3>
         {/* } */}
        <div>
            <PetCard />
        </div>
    </div>
  )
}

export default MyPetPage