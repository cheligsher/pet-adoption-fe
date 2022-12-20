import React from "react";
import "../styles/main.css";

function PetCard() {
  // define fostered & adopted
  return (
    <div className="border border-dark rounded mx-auto w-25">
      <img src="" alt="" />
      <div>My name is: </div>
      {/* {fostered &&  */}
      <div>I am currently being fostered</div>
      {/* } */}
      {/* {adopted &&  */}
      <div>I have being adopted</div>
      {/* } */}
      {/* {!fostered && !adopted ?  */}
      <div>I am available for fostering and adopting!</div>
      {/* : ""} */}
      <button className="btn btn-dark">More info</button>
    </div>
  );
}

export default PetCard;
