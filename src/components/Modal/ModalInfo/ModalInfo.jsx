import s from "./ModalInfo.module.scss";

const ModalInfo = (props) => {
  const { title, subTitle, handleClickOk } = props;
  return (
    <>
      <div className={s.modalTitle}>{title}</div>
      <div className={s.modalSubTitle}>{subTitle}</div>
      <div className={s.modalFooter}>
        <button onClick={handleClickOk}>Okay</button>
      </div>
    </>
  );
};

export default ModalInfo;
