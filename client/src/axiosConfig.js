import axios from "axios";
// require("dotenv").config({ path: "../../.env" });

const env = process.env.NODE_ENV;

const instance = axios.create({
  baseURL:
    env === "production"
      ? "https://graphic-balance-3bf05d57cb18.herokuapp.com/" // production
      : "http://localhost:5000/", // development
});

export default instance;
