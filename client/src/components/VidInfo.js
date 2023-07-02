import React from "react";
import { ExternalLink } from "react-external-link";
import { formatDate } from "../utils/timeConversion";

const VidInfo = ({ currentVideo, videoData }) => {
  let selectedVideo;
  for (const video in videoData) {
    if (currentVideo === videoData[video]["_id"]) {
      selectedVideo = videoData[video];
    }
  }

  return (
    <div>
      <ExternalLink
        href={"https://www.youtube.com/watch?v=" + selectedVideo["id"]}
      >
        <span>{selectedVideo["videoTitle"]}</span>
      </ExternalLink>

      <br />
      <ExternalLink
        href={"http://www.youtube.com/channel/" + selectedVideo["channelId"]}
      >
        <span>{selectedVideo["channelTitle"]}</span>
      </ExternalLink>

      <p>{selectedVideo["description"]}</p>
      <p>{formatDate(selectedVideo["publisheTime"])}</p>
    </div>
  );
};

export default VidInfo;
