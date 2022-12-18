import React from 'react'

function PetCard() {
    // define fostered & adopted
  return (
    <div>
        <img src="" alt="" />
        <div>My name is: </div>
        {fostered && <div>I am currently being fostered</div>}
        {adopted && <div>I have being adopted</div>}
        {!fostered && !adopted ? <div>I am available for fostering and adopting!</div> : ""}
        <button>More info</button>
    </div>
  )
}

export default PetCard