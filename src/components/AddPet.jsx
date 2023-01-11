import React from "react";
import Form from "react-bootstrap/Form";

function AddPet() {
  return (
    <div className="w-50 mx-auto mt-5">
      <h1>
        Add a new pet to{" "}
        <b>
          <i>Adopt A Pet</i>
        </b>{" "}
        :
      </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="e.g. dog, cat etc" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Pet's name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Adoption status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Available, fostered, adopted"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture</Form.Label>
          <Form.Control type="image" />
        </Form.Group>
        <div className="d-flex flex-row">
          <Form.Group className="mb-3">
            <Form.Label>Height in CM</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Weight in KG</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hypoallergenic (check if yes)</Form.Label>
            <input type="checkbox" />
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
        <Form.Group className="mb-3">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="e.g. Poodle, Chow" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddPet;
