import { dataUrl } from "../assets/urls";

export const getModalData = async () => {
  const response = await ApiService.get(dataUrl);
  const isSuc = Math.random() > 0.5;
  return isSuc ? response : Promise.reject("Can`t fetch");
};

class ApiService {
  static async get(url) {
    const data = await fetch(url);
    return data.json();
  }
}
