import React from "react";

function ImageGallery() {
  return (
    <div className="mt-5 w-75 mx-auto">
      <h1>Take a look at some of our animals!</h1>
      <div className="p-5">
        <div className="row row-cols-4">
          <img className="col" src={require("../images/dog_logo.png")} />
          <img className="col" src={require("../images/dog_logo.png")} />
          <img className="col" src={require("../images/dog_logo.png")} />
          <img className="col" src={require("../images/dog_logo.png")} />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
