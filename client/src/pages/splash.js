import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";

// We import all the components we need in our app
import TextAnimation from "../components/textAnimation";

const Splash = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/main");
  };
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
