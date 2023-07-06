import React from "react";
import { useNavigate } from "react-router";
// import usePlayer from "../hooks/usePlayerMain";
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
      <TextAnimation
        containerClass="text-animation-container"
        textClass="text-animation"
        interval={500}
      />
      <TextAnimation
        containerClass="text-animation-container secondary"
        textClass="text-animation secondary"
        interval={300}
      />
      <h1 className="splash-header">GRAPHIC BALANCE</h1>
      {/* <div className="circle"></div> */}
      <form onSubmit={handleSubmit}>
        <input className="nav-button" type="submit" value="enter" />
      </form>
    </div>
  );
};

export default Splash;
