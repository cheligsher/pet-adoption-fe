import React from "react";
import PetDetails from "./PetDetails";
import "../styles/main.css";

function PetPage() {
  return (
    <div>
      {/* <h3>Pet Details</h3>
      <PetDetails /> */}
      {/* {fostered || adopted ?  */}
      <button>Return pet</button>
      {/* : ""} */}
      {/* ^^ only for owner to see */}
      {/* { notOwner &&  */}
      <span>
        <button>Adopt</button>
        <button>Foster</button>
      </span>
      {/* } */}
      {/* { fosteredByUser &&  */}
      <button>Adopt</button>
      {/* } */}
      <button>
        Save
        {/* {isSaved ? "Save for later" : "Unsave"} */}
      </button>
    </div>
  );
}

export default PetPage;
