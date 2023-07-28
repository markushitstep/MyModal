import s from "./ModalInfo.module.scss";
import { infoData } from "../../../types";

type Props = {
  data: infoData;
  handleCloseModal: () => void;
};

const ModalInfo = (props: Props) => {
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
