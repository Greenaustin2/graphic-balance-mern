import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import usePlayer from "../hooks/use-playermain";
import TextAnimation from "../utils/textAnimation";

const Splash = () => {
  const { initialRequest } = usePlayer();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/main");
  };

  useEffect(() => {
    initialRequest();
  }, []);
  return (
    <div>
      <TextAnimation />
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Main" />
      </form>
    </div>
  );
};

export default Splash;
