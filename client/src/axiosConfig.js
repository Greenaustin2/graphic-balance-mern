import axios from "axios";
// require("dotenv").config({ path: "../../.env" });

const env = process.env.NODE_ENV;

const instance = axios.create({
  baseURL:
    env === "production"
      ? "https://graphic-balance-test-46e35e237003.herokuapp.com/" // production
      : "http://localhost:5000/", // development
});

export default instance;
