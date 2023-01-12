import axios from "axios";
import React from "react";
import Form from "react-bootstrap/Form";

function AddPet() {
  const handleAddPet = async () => {
    try {
        const token = localStorage.getItem("token")
      const res = await axios.get(
        "http://localhost:8080/pet", {headers: {authorization: `Bearer ${token}`}}
      );
      console.log(res);
      alert("Pet has been added");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-50 mx-auto mt-5 mb-5">
      <h1>
        Add a new pet to{" "}
        <b>
          <i>Adopt A Pet</i>
        </b>{" "}
        :
      </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Pet's name" />
        </Form.Group>
        <div className="d-flex flex-row">
        <Form.Group className="mb-3 me-3 flex-fill">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="e.g. Dog, cat etc" />
        </Form.Group>
        <Form.Group className="mb-3 flex-fill">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="e.g. Poodle, Chow" />
        </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Adoption status</Form.Label>
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="available">Available</option>
            <option value="fostered">Fostered</option>
            <option value="adopted">Adopted</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture</Form.Label>
          <input type="file" class="form-control"/>
        </Form.Group>
        <div className="d-flex flex-row">
          <Form.Group className="mb-3 me-3 flex-fill">
            <Form.Label>Height in CM</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill">
            <Form.Label>Weight in KG</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3 flex-fill">
            <Form.Label>Hypoallergenic</Form.Label>
            <select class="form-select" id="inputGroupSelect02">
            <option selected>Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="Pet's fur color" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control type="text" placeholder="A bit about the pet..." />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dietary restrictions</Form.Label>
          <Form.Control type="text" placeholder="Pet's dietary needs" />
        </Form.Group>
        <button onClick={handleAddPet}>Add pet</button>
      </Form>
    </div>
  );
}

export default AddPet;
