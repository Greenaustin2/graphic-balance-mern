import { useNavigate } from "react-router";
import { useEffect, useContext } from "react";
// import IframeConstructor from "../components/IframeConstructor";
import Youtube from "react-youtube";
import IframeConstructor from "../components/IframeConstructor.js";
import VideosContext from "../context/videos";

const Main = () => {
  const { submitRequest } = useContext(VideosContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/archive");
  };
  const splashSubmit = () => {
    navigate("/");
  };

  const submitApi = async (event) => {
    event.preventDefault();
    submitRequest();
  };
  console.log("loading iframe");
  return (
    <div>
      <h1>Main</h1>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="archive" />
      </form>
      <form onSubmit={splashSubmit}>
        <input type="submit" value="splash" />
      </form>
      <form onSubmit={submitApi}>
        <input type="submit" value="api request" />
      </form>
      <div>
        <IframeConstructor text="hello" />
      </div>
    </div>
  );
};

export default Main;
