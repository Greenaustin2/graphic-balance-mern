import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls.js";
import usePlayer from "../hooks/usePlayerMain";
import axios from "axios";
import Youtube from "react-youtube";

const Main = () => {
  const { currentVideo, previousVideo, nextVideo, submitToArchive } =
    usePlayer();

  if (currentVideo) {
    var videoId = currentVideo["id"];
  }
  const navigate = useNavigate();

  // const submitToArchive = () => {
  //   const videoFile = {
  //     _id: currentVideo["id"],
  //     videoTitle: currentVideo["snippet"]["title"],
  //     channelId: currentVideo["snippet"]["channelId"],
  //     channelTitle: currentVideo["snippet"]["channelTitle"],
  //     description: currentVideo["snippet"]["description"],
  //     publisheTime: currentVideo["snippet"]["publishTime"],
  //     dateAdded: Date(),
  //     duration: currentVideo["contentDetails"]["duration"],
  //     thumbnailHigh: currentVideo["snippet"]["thumbnails"]["high"]["url"],
  //     userRating: 0,
  //   };
  //   axios
  //     .post("http://localhost:5000/archive/add/", videoFile)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response);
  //     });
  // };

  // useEffect(() => {
  //   initialRequest();
  // }, []);

  return (
    <div>
      <h1>Main</h1>
      <form onSubmit={() => navigate("/archive")}>
        <input type="submit" value="archive" />
      </form>
      <form onSubmit={() => navigate("/")}>
        <input type="submit" value="splash" />
      </form>

      <div>
        <IframeConstructor currentVideo={videoId} onEnd={nextVideo} />
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
