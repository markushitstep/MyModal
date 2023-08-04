import { modalMapping } from "../components/Modal/Modal";
import { Content } from "../types";

class ModalModule {
  component: React.ElementType | React.ReactNode = (<></>);
  public setType(type: Content) {
    this.component = modalMapping[type];
  }
}
const modalModule = new ModalModule();
export default modalModule;
