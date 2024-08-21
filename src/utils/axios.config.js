import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  "https://happy-pizza-restaurant-backend.onrender.com/api/v1";
// axios.defaults.headers.common["Authorization"] = "Bearer token";

export default axios;
