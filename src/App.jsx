import React, { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
import { getModalData } from "./services";
import ModalModule from "./assets/ModalModule";

const modal = new ModalModule();
const App = () => {
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    getModalData()
      .then((data) => {
        modal.setType(data.info.type);
        modal.setProps({
          title: data.info.title,
          subTitle: data.info.subTitle,
          handleClickOk: () => {
            console.log("modal info");
            setActiveModal(false);
          },
        });
      })
      .catch((error) => {
        modal.setType("Error");
        modal.setProps({
          title: error,
          subTitle: `${error}, try again later`,
          handleClickOk: () => {
            console.log("modal error");
            setActiveModal(false);
          },
          handleCloseModal: () => {
            console.log("modal error");
            setActiveModal(false);
          },
        });
      });
  }, []);

  const handleOpenInfoModal = () => {
    setActiveModal(true);
  };

  return (
    <div>
      <div>
        <button onClick={handleOpenInfoModal}>open info modal</button>
      </div>
      {modal.getComponent() && (
        <Modal active={activeModal} ModalComponent={modal.getComponent()} />
      )}
    </div>
  );
};

export default App;
