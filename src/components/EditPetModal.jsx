import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddPet from "./AddPet";

function EditPetModal({ handleShowEdit, handleCloseEdit, showEdit, selectedPet }) {
  const editPet = true;
console.log(selectedPet)
  return (
    <>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPet editPet={editPet} {...selectedPet} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPetModal;
