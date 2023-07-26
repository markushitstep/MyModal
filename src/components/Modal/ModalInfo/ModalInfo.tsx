import react from "react";
import s from "./ModalInfo.module.scss";

const ModalInfo = (props: any) => {
  const { data, handleCloseModal } = props;
  return (
    <>
      <div className={s.modalTitle}>{data.title}</div>
      <div className={s.modalSubTitle}>{data.subTitle}</div>
      <div className={s.modalFooter}>
        <button onClick={() => handleCloseModal()}>Okay</button>
      </div>
    </>
  );
};

export default ModalInfo;
