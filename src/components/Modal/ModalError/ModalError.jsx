import s from "./ModalError.module.scss";

const ModalError = (props) => {
  const { title, subTitle, handleClickOk, handleCloseModal } = props;

  return (
    <>
      <div className={s.modalTitle}>{title}</div>
      <div className={s.modalSubTitle}>{subTitle}</div>
      <div className={s.modalFooter}>
        <button onClick={handleClickOk}>Okay</button>
        <button onClick={handleCloseModal}>Cansel</button>
      </div>
    </>
  );
};

export default ModalError;
