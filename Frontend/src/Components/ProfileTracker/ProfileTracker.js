import React, { useState } from "react";
import {
  AddPersonalDetails,
  AddSkills,
  AddEducation,
  AddExperience,
} from "../TrackerFields/TrackerFields";
import ModalDialog from "../ModalDialog/ModalDialog";

export default function ProfileTracker() {
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => {
    setShowModal(false);
  };

  const saveButton = () => {
    setStep(step + 1);
  };

  return (
    <ModalDialog open={showModal} maxWidth={"lg"} handleClose={closeModal}>
      {step === 0 && (
        <AddPersonalDetails
          onSave={() => {
            saveButton();
          }}
        />
      )}
      {step === 1 && (
        <AddSkills
          onSave={() => {
            saveButton();
          }}
        />
      )}
      {step === 2 && (
        <AddEducation
          onSave={() => {
            saveButton();
          }}
        />
      )}
      {step === 3 && (
        <AddExperience onSave={closeModal} onCancel={closeModal} />
      )}
    </ModalDialog>
  );
}
