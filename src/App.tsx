import React, { FC, useState } from "react";
import Modal from "./components/Modal/Modal";
import { Content } from "./types";

const infoData = {
  title: "Info",
  subTitle:
    "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...",
};

const App: FC = () => {
  const [activeInfoModal, setActiveInfoModal] = useState<boolean>(false);
  const typeContent = Content.Warning;

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
