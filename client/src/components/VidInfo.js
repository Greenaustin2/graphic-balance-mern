const VidInfo = ({ currentVideo, videoData }) => {
  let selectedVideo;
  for (const video in videoData) {
    console.log(videoData[video]["_id"]);
    if (currentVideo === videoData[video]["_id"]) {
      selectedVideo = videoData[video];
      console.log("selected video " + selectedVideo);
    }
  }

  return (
    <div>
      <p>{selectedVideo["videoTitle"]}</p>
      <p>
        <a
          href={"http://www.youtube.com/channel/" + selectedVideo["channelId"]}
          target="_blank"
        >
          {selectedVideo["channelTitle"]}
        </a>
      </p>
      <p>{selectedVideo["description"]}</p>
      <p>{selectedVideo["publisheTime"]}</p>
    </div>
  );
};

export default VidInfo;
