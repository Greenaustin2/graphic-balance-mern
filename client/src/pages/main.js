import { useNavigate } from "react-router";
import React, { useEffect, useRef, useState } from "react";
// import IframeConstructor from "../components/IframeConstructor";
import IframeConstructor from "../components/IframeConstructor.js";
import YoutubeApi from "../api";
import IframeControls from "../components/iframeControls";

const Main = () => {
  //Current video state controls what is shown on screen to user
  const [currentVideo, setCurrentVideo] = useState();
  //Next video ref cues up video data to be passed into currentVideo State
  const nextVideoRef = useRef();
  //Watch history tracks and stores previously watched videos
  const watchHistory = useRef([]);
  //Router navigation
  const navigate = useNavigate();

  //Runs two API requests, one for initial video and another to cue video
  useEffect(() => {
    initialRequest();
  }, []);

  //currentVideo and nextVideoRef are asiggned apiRequest video results
  const initialRequest = async () => {
    const result = await YoutubeApi();
    setCurrentVideo(result);
    updateWatchHistory(result);
    const result2 = await YoutubeApi();
    nextVideoRef.current = result2;
  };

  //Appends current video to the watch history array
  const updateWatchHistory = (videoData) => {
    watchHistory.current.push(videoData);
    console.log("watch history: " + watchHistory.current);
  };

  //Skip to next video
  const nextVideo = (event) => {
    console.log("watch history length" + watchHistory.current.length);
    if (
      currentVideo !== watchHistory.current[watchHistory.current.length - 1]
    ) {
      var index = watchHistory.current.findIndex((el) => {
        return el === currentVideo;
      });
      setCurrentVideo(watchHistory.current[index + 1]);
    } else {
      submitApi(event);
    }
  };
  //Skip to previous video
  const previousVideo = () => {
    if (currentVideo !== watchHistory.current[0]) {
      var index = watchHistory.current.findIndex((el) => {
        return el === currentVideo;
      });
      setCurrentVideo(watchHistory.current[index - 1]);
    }
  };

  //State is updated via pre-loaded video from nextVideoRef, and nextVideoRef is updated
  const submitApi = async (event) => {
    event.preventDefault();
    setCurrentVideo(nextVideoRef.current);
    updateWatchHistory(nextVideoRef.current);
    const result = await YoutubeApi();
    nextVideoRef.current = result;
  };

  //Navigation
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
        {currentVideo && <IframeConstructor currentVideo={currentVideo} />}
      </div>
      <IframeControls
        submitApi={submitApi}
        previousVideo={previousVideo}
        nextVideo={nextVideo}
      />
    </div>
  );
};

export default Main;
