import { useNavigate } from "react-router";
import React, { useEffect, useContext, useState } from "react";
// import IframeConstructor from "../components/IframeConstructor";
import Youtube from "react-youtube";
import IframeConstructor from "../components/IframeConstructor.js";
import VideosContext from "../context/videos";
import YoutubeApi from "../api";

const Main = () => {
  // const { submitRequest} =
  //   useContext(VideosContext);
  const navigate = useNavigate();

  useEffect(async () => {
    const result = await YoutubeApi();
  }, []);

  const submitApi = async (event) => {
    event.preventDefault();
    await submitRequest();
    console.log("submitApi request complete");
  };

  const handleSubmit = () => {
    navigate("/archive");
  };
  const splashSubmit = () => {
    navigate("/");
  };

  console.log("main called");
  return (
    <div>
      <h1>Main</h1>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="archive" />
      </form>
      <form onSubmit={splashSubmit}>
        <input type="submit" value="splash" />
      </form>
      <div>
        <IframeConstructor />
      </div>
    </div>
  );
};

export default Main;
