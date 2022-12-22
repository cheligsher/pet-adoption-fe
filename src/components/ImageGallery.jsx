import React from "react";

function ImageGallery() {
  return (
    <div className="mt-5 border border-dark">
      <h1>Take a look at some of our animals!</h1>
      <div className="p-5 border border-primary">
        <div className="row row-cols-4">
          <img className="col" src={require("../images/dog_logo.png")}/>
          <img className="col" src={require("../images/dog_logo.png")}/>
          <img className="col" src={require("../images/dog_logo.png")}/>
          <img className="col" src={require("../images/dog_logo.png")}/>
        </div>
        <div className="row row-cols-4">
          <img className="col" src={require("../images/dog_logo.png")}/>
          <img className="col" src={require("../images/dog_logo.png")}/>
          <img className="col" src={require("../images/dog_logo.png")}/>
          <img className="col" src={require("../images/dog_logo.png")}/>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
