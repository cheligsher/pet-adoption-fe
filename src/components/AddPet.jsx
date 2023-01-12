import axios from "axios";
import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import AppContext from "../context/AppContext";

function AddPet() {
    // move state here
  const { petDetails, setPetDetails } = useContext(AppContext);
  const {
    type,
    name,
    breed,
    adoptionStatus,
    picture,
    height,
    weight,
    hypoallergenic,
    color,
    bio,
    dietary,
  } = petDetails;
  const handleAddPet = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.post("http://localhost:8080/pet", petDetails, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(res.data);
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
      <Form >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pet's name"
            onChange={(e) =>
              setPetDetails({
                ...petDetails,
                name: e.target.value,
              })
            }
          />
        </Form.Group>
        <div className="d-flex flex-row">
          <Form.Group className="mb-3 me-3 flex-fill">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              value={type}
              placeholder="e.g. Dog, cat etc"
              onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  type: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3 flex-fill">
            <Form.Label>Breed</Form.Label>
            <Form.Control
              type="text"
              value={breed}
              placeholder="e.g. Poodle, Chow"
              onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  breed: e.target.value,
                })
              }
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Adoption status</Form.Label>
          <select
            class="form-select"
            value={adoptionStatus}
            id="inputGroupSelect01"
            onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  adoptionStatus: e.target.value,
                })
              }
          >
            <option selected>Choose...</option>
            <option value="available">Available</option>
            <option value="fostered">Fostered</option>
            <option value="adopted">Adopted</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture</Form.Label>
          <input type="file" value={picture} class="form-control" onChange={(e) =>
              setPetDetails({
                ...petDetails,
                picture: e.target.files,
              })
            }/>
        </Form.Group>
        <div className="d-flex flex-row">
          <Form.Group className="mb-3 me-3 flex-fill">
            <Form.Label>Height in CM</Form.Label>
            <Form.Control type="number" value={height} onChange={(e) =>
              setPetDetails({
                ...petDetails,
                height: e.target.value,
              })
            } />
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill">
            <Form.Label>Weight in KG</Form.Label>
            <Form.Control type="number" value={weight} onChange={(e) =>
              setPetDetails({
                ...petDetails,
                weight: e.target.value,
              })
            }/>
          </Form.Group>
          <Form.Group className="mb-3 flex-fill">
            <Form.Label>Hypoallergenic</Form.Label>
            <select
              class="form-select"
              value={hypoallergenic}
              id="inputGroupSelect02"
              onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  hypoallergenic: true,
                })
              }
            >
              <option selected>Choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            value={color}
            placeholder="Pet's fur color"
            onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  color: e.target.value,
                })
              }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            type="text"
            value={bio}
            placeholder="A bit about the pet..."
            onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  bio: e.target.value,
                })
              }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dietary restrictions</Form.Label>
          <Form.Control
            type="text"
            value={dietary}
            placeholder="Pet's dietary needs"
            onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  dietary: e.target.value,
                })
              }
          />
        </Form.Group>
        <button type="button" onClick={handleAddPet}>Add pet</button>
      </Form>
    </div>
  );
}

export default AddPet;
