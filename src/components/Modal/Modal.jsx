import React from "react";
import s from "./Modal.module.scss";
import c from "classnames";
import { Content } from "../../types";
import ModalInfo from "./ModalInfo/ModalInfo";
import ModalError from "./ModalError/ModalError";
import ModalWarning from "./ModalWarning/ModalWarning";

export const modalMapping = {
  [Content.Info]: ModalInfo,
  [Content.Warning]: ModalWarning,
  [Content.Error]: ModalError,
};

const Modal = (props) => {
  const { active, data, typeContent, handleCloseModal, handleCancel } = props;

  const ModalComponent = () => modalMapping[typeContent];

  return (
    <div
      className={c({
        [s.modal]: active,
        [s.modalUnActive]: !active,
      })}
    >
      <div className={s.modalContent}>
        <ModalComponent />
      </div>
    </div>
  );
};

export default Modal;
