import ModalError from "../components/Modal/ModalError/ModalError";
import ModalInfo from "../components/Modal/ModalInfo/ModalInfo";
import ModalWarning from "../components/Modal/ModalWarning/ModalWarning";

class ModalModule {
  #component = null;
  #modalMapping = {};
  #props;
  setType(type) {
    this.#component = this.#createModalMapping(type);
  }
  setProps(props) {
    this.#props = props;
  }
  #createModalMapping(type) {
    this.#modalMapping = {
      Info: ModalInfo,
      Warning: ModalWarning,
      Error: ModalError,
    };
    return this.#modalMapping[type];
  }
  getComponent() {
    const Component = this.#component;
    if (!this.#props || !this.#component) return null;
    return <Component {...this.#props} />;
  }
}
export default ModalModule;
