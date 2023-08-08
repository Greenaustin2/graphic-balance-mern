import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://graphic-balance-mern-d81vo1ekw-greenaustin2.vercel.app" ||
    "http://localhost:5000",
});

export default instance;
