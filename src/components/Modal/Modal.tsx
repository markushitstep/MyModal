import React, { Dispatch, FC, SetStateAction } from "react";
import s from "./Modal.module.scss";
import c from "classnames";
import { Content, infoData } from "../../types";
import ModalInfo from "./ModalInfo/ModalInfo";
import ModalError from "./ModalError/ModalError";
import useShowComponent from "../../hooks/useShowComponent";

interface IModalData {
  active: boolean;
  //setActive: Dispatch<SetStateAction<boolean>>;
  data: infoData;
  typeContent: Content;
  handleCloseModal: any;
  handleCancel: any;
}

const Modal: FC<IModalData> = (props) => {
  const { active, data, typeContent, handleCloseModal, handleCancel } = props;

  return (
    <div
      className={c({
        [s.modal]: active,
        [s.modalUnActive]: !active,
      })}
    >
      <div className={s.modalContent}>
        {typeContent === Content.Info && (
          <ModalInfo handleCloseModal={handleCloseModal} data={data} />
        )}
        {typeContent === Content.Warning && (
          <ModalError
            handleCloseModal={handleCloseModal}
            handleCancel={handleCancel}
            data={data}
          />
        )}
        {typeContent === Content.Error && (
          <ModalError
            handleCloseModal={handleCloseModal}
            handleCancel={handleCancel}
            data={data}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
