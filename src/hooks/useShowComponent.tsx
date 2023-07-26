import react, { useState } from "react";
import { Content } from "../types";
import ModalInfo from "../components/Modal/ModalInfo/ModalInfo";
import ModalError from "../components/Modal/ModalError/ModalError";

const useShowComponent = (props: any) => {
  const { data, typeContent, handleCloseModal, handleCancel } = props;
  const [type, setType] = useState(typeContent);

  return (
    <>
      {type === Content.Info && (
        <ModalInfo handleCloseModal={handleCloseModal} data={data} />
      )}
      {type === Content.Warning && (
        <ModalError
          handleCloseModal={handleCloseModal}
          handleCancel={handleCancel}
          data={data}
        />
      )}
      {type === Content.Error && (
        <ModalError
          handleCloseModal={handleCloseModal}
          handleCancel={handleCancel}
          data={data}
        />
      )}
    </>
  );
};

export default useShowComponent;
