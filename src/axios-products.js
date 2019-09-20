import axios from "axios";

const instance = axios.create({
  baseURL: "https://acme-project-930ec.firebaseio.com/"
});

export default instance;
