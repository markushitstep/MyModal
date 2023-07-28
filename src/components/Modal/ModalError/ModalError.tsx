import s from "./ModalError.module.scss";
import { infoData } from "../../../types";

type Props = {
  data: infoData;
  handleCloseModal: () => void;
  handleCancel: () => void;
};

const ModalError = (props: Props) => {
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
