export const getModalData = async () => {
  const response = await ApiService.get("http://localhost:3002/data");
  return response;
};

class ApiService {
  static async get(url) {
    const data = await fetch(url);
    return data.json();
  }
}
