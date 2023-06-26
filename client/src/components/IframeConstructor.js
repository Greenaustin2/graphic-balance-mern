import React, { memo } from "react";
import Youtube from "react-youtube";
// import VideosContext from "../context/videos";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    playsInline: 1,
    rel: 0,
    modestbranding: 1,
    controls: 1,
    color: "white",
    fs: 1,
  },
};

const IframeConstructor = ({ currentVideo }) => {
  console.log("iframe function entered");
  return <Youtube opts={opts} videoId={currentVideo["id"]} />;
};

export default memo(IframeConstructor);
