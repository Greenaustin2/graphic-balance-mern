import React from "react";
import { ExternalLink } from "react-external-link";
import { formatDate } from "../utils/timeConversion";
import s from "../css/vidInfo.module.css";

const VidInfo = ({ currentVideo, videoData }) => {
  let selectedVideo;
  for (const video in videoData) {
    if (currentVideo === videoData[video]["_id"]) {
      selectedVideo = videoData[video];
    }
  }

  return (
    <div className={s.infoContainer}>
      <ExternalLink
        href={"https://www.youtube.com/watch?v=" + selectedVideo["_id"]}
      >
        <span className={s.link}>{selectedVideo["videoTitle"]}</span>
      </ExternalLink>

      <br />
      <ExternalLink
        href={"http://www.youtube.com/channel/" + selectedVideo["channelId"]}
      >
        <span className={s.link}>User: {selectedVideo["channelTitle"]}</span>
      </ExternalLink>
      <br />
      <p className={s.text}>{selectedVideo["description"]}</p>
      <p className={s.text}>
        Upload Date: {formatDate(selectedVideo["publisheTime"])}
      </p>
    </div>
  );
};

export default VidInfo;
