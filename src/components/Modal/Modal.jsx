import React from "react";
import s from "./Modal.module.scss";
import c from "classnames";

const Modal = (props) => {
  const { active, ModalComponent } = props;

  return (
    <div
      className={c({
        [s.modal]: active,
        [s.modalUnActive]: !active,
      })}
    >
      <div className={s.modalContent}>{ModalComponent}</div>
    </div>
  );
};

export default Modal;
