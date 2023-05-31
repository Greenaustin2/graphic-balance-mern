import React from "react";
import Youtube from "react-youtube";

const IframeConstructor = ({ apiRequest, videoData }) => {
  const submitApi = () => {
    apiRequest();
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      playsInline: 1,
      rel: 0,
      autoplay: 1,
      modestbranding: 1,
      controls: 1,
      color: "white",
      fs: 1,
    },
  };
  return (
    <div>
      <div>
        <Youtube opts={opts} videoId={videoData["id"]} onEnd={submitApi} />
      </div>
    </div>
  );
};

export default IframeConstructor;
