import s from "./ModalWarning.module.scss";

const ModalWarning = (props) => {
  const { title, subTitle, handleClickOk, handleClickCancel } = props;
  return (
    <>
      <div className={s.modalTitle}>{title}</div>
      <div className={s.modalSubTitle}>{subTitle}</div>
      <div className={s.modalFooter}>
        <button onClick={handleClickOk}>Okay</button>
        <button onClick={handleClickCancel}>Cansel</button>
      </div>
    </>
  );
};

export default ModalWarning;
