import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import { Content } from "./types";
import modalModule from "./assets/ModalModule";

const infoData = {
  title: "Info",
  subTitle:
    "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...",
  isData: true,
};

const App = () => {
  const [activeInfoModal, setActiveInfoModal] = useState(false);
  const typeContent = Content.Warning;

  modalModule.setType(infoData.title);

  const handleOpenModal = () => {
    setActiveInfoModal(true);
  };
  const handleCloseModal = () => {
    setActiveInfoModal(false);
  };
  const handleCancel = () => {
    console.log("Redirect to home page");
  };
  return (
    <div>
      <button onClick={handleOpenModal}>open modal</button>
      <Modal
        active={activeInfoModal}
        //setActive={setActiveInfoModal}
        data={infoData}
        typeContent={typeContent}
        handleCloseModal={handleCloseModal}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default App;
