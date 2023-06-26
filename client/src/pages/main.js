import { useNavigate } from "react-router";
import React, { useEffect } from "react";
// import IframeConstructor from "../components/IframeConstructor";
import IframeConstructor from "../components/IframeConstructor.js";
import IframeControls from "../components/iframeControls";
import usePlayer from "../hooks/use-playermain.js";
import axios from "axios";

const Main = () => {
  const { currentVideo, previousVideo, nextVideo, initialRequest } =
    usePlayer();
  const navigate = useNavigate();

  //Navigation
  const handleSubmit = () => {
    navigate("/archive");
  };
  const splashSubmit = () => {
    navigate("/");
  };

  const submitToArchive = () => {
    const videoFile = {
      _id: currentVideo["id"],
      videoTitle: currentVideo["snippet"]["title"],
      channelId: currentVideo["snippet"]["channelId"],
      channelTitle: currentVideo["snippet"]["channelTitle"],
      description: currentVideo["snippet"]["description"],
      publisheTime: currentVideo["snippet"]["publishTime"],
      dateAdded: Date(),
      duration: currentVideo["contentDetails"]["duration"],
      thumbnailHigh: currentVideo["snippet"]["thumbnails"]["high"]["url"],
      userRating: 0,
    };
    axios
      .post("http://localhost:5000/archive/add", videoFile)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  useEffect(() => {
    initialRequest();
  }, []);

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
        {currentVideo && <IframeConstructor currentVideo={currentVideo} />}
      </div>
      <IframeControls
        previousVideo={previousVideo}
        nextVideo={nextVideo}
        submitToArchive={submitToArchive}
      />
    </div>
  );
};

export default Main;
