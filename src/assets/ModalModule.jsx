import { modalMapping } from "../components/Modal/Modal";

class ModalModule {
  component = (<></>);
  setType(type) {
    this.component = modalMapping[type];
  }
}
const modalModule = new ModalModule();
export default modalModule;
