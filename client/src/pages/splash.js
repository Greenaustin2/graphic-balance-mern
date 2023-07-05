import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import usePlayer from "../hooks/usePlayerMain";
import TextAnimation from "../utils/textAnimation";
import "../css/splash.css";

const Splash = () => {
  // const { initialRequest } = usePlayer();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/main");
  };
  /////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   initialRequest();
  // }, []);
  return (
    <div className="splash">
      <TextAnimation />
      <div className="main-nav">
        <form onSubmit={handleSubmit}>
          <input className="nav-button" type="submit" value="enter" />
        </form>
      </div>
    </div>
  );
};

export default Splash;
