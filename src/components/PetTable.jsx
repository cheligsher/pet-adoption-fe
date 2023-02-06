import React, { useState } from "react";
import PetDetails from "./PetDetails";
import "../styles/main.css";
import axios from "axios";
import PetPreview from "./PetPreview";
import { Col, Container, Row } from "react-bootstrap";

function PetTable({ pets }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [selectedPet, setSelectedPet] = useState("");

  const handleShowDetails = (pet) => {
    handleShow();
    setSelectedPet(pet);
  };

  return (
    <div className="background">
      <h3 className="text-center mx-auto">Pets</h3>
      <Container className="text-center">
        <Row xs={2} md={3} lg={4}>
          {pets.length &&
            pets.map((pet) => {
              return (
                <Col><PetPreview pet={pet} handleShowDetails={handleShowDetails} /></Col>
                
              );
            })}
        </Row>
      </Container>
      <PetDetails
        handleClose={handleClose}
        show={show}
        selectedPet={selectedPet}
      />
    </div>
  );
}

export default PetTable;
