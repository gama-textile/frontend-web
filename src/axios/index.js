import axios from "axios";

const url = "http://localhost:5000/api";

export default axios.create({
  baseURL: url
});
