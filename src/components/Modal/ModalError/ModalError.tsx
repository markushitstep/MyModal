import react from "react";
import s from "./ModalError.module.scss";

const ModalError = (props: any) => {
  const { data, handleCloseModal, handleCancel } = props;
  return (
    <>
      <div className={s.modalTitle}>{data.title}</div>
      <div className={s.modalSubTitle}>{data.subTitle}</div>
      <div className={s.modalFooter}>
        <button onClick={() => handleCloseModal()}>Okay</button>
        <button onClick={() => handleCancel()}>Cansel</button>
      </div>
    </>
  );
};

export default ModalError;
