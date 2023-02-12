import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import AppContext from "../context/AppContext";
import "../styles/main.css";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

function AddPet(props) {
  const { user, setUser } = useContext(AppContext);
  const {
    editPet,
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
    _id,
  } = props;
  // const { petDetails, setPetDetails } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [petDetails, setPetDetails] = useState({
    picture: "",
    type: type || "",
    name: name || "",
    breed: breed || "",
    adoptionStatus: adoptionStatus || "Available",
    height: height || "",
    weight: weight || "",
    hypoallergenic: hypoallergenic || "",
    color: color || "",
    bio: bio || "",
    dietary: bio || "",
  });
  // const {
  //   type,
  //   name,
  //   breed,
  //   adoptionStatus,
  //   picture,
  //   height,
  //   weight,
  //   hypoallergenic,
  //   color,
  //   bio,
  //   dietary,
  // } = petDetails;

  const token = JSON.parse(localStorage.getItem("token"));

  const [petImage, setPetImage] = useState("");
  const handleAddPet = async () => {
    setLoading(true);
    try {
      const petData = new FormData();
      petData.append("picture", petDetails.petImage);
      petData.append("type", petDetails.type);
      petData.append("name", petDetails.name);
      petData.append("breed", petDetails.breed);
      petData.append("adoptionStatus", petDetails.adoptionStatus);
      petData.append("height", petDetails.height);
      petData.append("weight", petDetails.weight);
      petData.append("hypoallergenic", petDetails.hypoallergenic);
      petData.append("color", petDetails.color);
      petData.append("bio", petDetails.bio);
      petData.append("dietary", petDetails.dietary);

      if (!editPet) {
        const res = await axios.post("http://localhost:8080/pet", petData, {
          headers: { authorization: `Bearer ${token}` },
        });
        setLoading(false);
        toast.success("Pet has been added");
      } else {
        const res = await axios.put(
          `http://localhost:8080/pet/${_id}`,
          petData,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        setLoading(false);
        toast.success("Pet has been edited");
      }
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/user`, {
          headers: { authorization: `Bearer ${token}` },
        });
      } catch (err) {
        if (err.response.data === "Invalid Token") {
          setUser(false);
          localStorage.clear();
        }
      }
    };
    verifyUser();
  }, []);

  return (
    <div
      className={
        !editPet ? "w-50 mx-auto mt-5 mb-5 background p-3" : "w-100 h-100"
      }
    >
      {loading === true && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!editPet && (
        <h1>
          Add a new pet to{" "}
          <b>
            <i>Adopt A Pet</i>
          </b>{" "}
        </h1>
      )}
      <Form className="overflow-y">
        <Form.Group className="mb-3">
          <div className="my-3">* Required field</div>
          <Form.Label>Name *</Form.Label>
          <Form.Control
            type="text"
            value={petDetails.name}
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
            <Form.Label>Type *</Form.Label>
            <Form.Control
              type="text"
              value={petDetails.type}
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
            <Form.Label>Breed *</Form.Label>
            <Form.Control
              type="text"
              value={petDetails.breed}
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
          <Form.Label>Adoption status *</Form.Label>
          <select
            class="form-select"
            id="inputGroupSelect01"
            onChange={(e) =>
              setPetDetails({
                ...petDetails,
                adoptionStatus: e.target.value,
              })
            }
          >
            <option value="Available">Available</option>
            <option value="Fostered">Fostered</option>
            <option value="Adopted">Adopted</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture *</Form.Label>
          <input
            type="file"
            class="form-control"
            onChange={(e) => setPetImage(e.target.files[0])}
            accept="image/*"
          ></input>
        </Form.Group>
        <div className="d-flex flex-row">
          <Form.Group className="mb-3 me-3 flex-fill">
            <Form.Label>Height in CM *</Form.Label>
            <Form.Control
              type="number"
              value={petDetails.height}
              onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  height: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill">
            <Form.Label>Weight in KG *</Form.Label>
            <Form.Control
              type="number"
              value={petDetails.weight}
              onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  weight: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3 flex-fill">
            <Form.Label>Hypoallergenic *</Form.Label>
            <select
              class="form-select"
              id="inputGroupSelect02"
              onChange={(e) =>
                setPetDetails({
                  ...petDetails,
                  hypoallergenic: e.target.value,
                })
              }
            >
              <option selected value="Yes">
                Yes
              </option>
              <option value="No">No</option>
            </select>
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Color *</Form.Label>
          <Form.Control
            type="text"
            value={petDetails.color}
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
            value={petDetails.bio}
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
          <Form.Label>Dietary restrictions *</Form.Label>
          <Form.Control
            type="text"
            value={petDetails.dietary}
            placeholder="Pet's dietary needs"
            onChange={(e) =>
              setPetDetails({
                ...petDetails,
                dietary: e.target.value,
              })
            }
          />
        </Form.Group>
        <button type="button" onClick={handleAddPet}>
          {!editPet ? "Add pet" : "Edit pet"}
        </button>
      </Form>
    </div>
  );
}

export default AddPet;
