import { useRef, useState, useEffect } from "react";
import YoutubeApi from "../api";
import axios from "axios";

function usePlayer() {
  //Current video state controls what is shown on screen to user
  const [currentVideo, setCurrentVideo] = useState();
  //Next video ref cues up video data to be passed into currentVideo State
  const nextVideoRef = useRef();
  //Watch history tracks and stores previously watched videos
  const watchHistory = useRef([]);

  //currentVideo and nextVideoRef are asiggned apiRequest video results
  const initialRequest = async () => {
    const result = await YoutubeApi();
    setCurrentVideo(result);
    updateWatchHistory(result);
    const result2 = await YoutubeApi();
    nextVideoRef.current = result2;
    // setCurrentVideo({ id: "PpRrG_b23y0" });
  };

  //Appends current video to the watch history array
  const updateWatchHistory = (videoData) => {
    watchHistory.current.push(videoData);
    console.log("watch history: " + watchHistory.current);
  };

  //Skip to next video
  const nextVideo = (event) => {
    if (event["_reactName"] === "onClick") {
      event.preventDefault();
    }
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
  const previousVideo = (event) => {
    event.preventDefault();
    if (currentVideo !== watchHistory.current[0]) {
      var index = watchHistory.current.findIndex((el) => {
        return el === currentVideo;
      });
      setCurrentVideo(watchHistory.current[index - 1]);
    }
  };

  //State is updated via pre-loaded video from nextVideoRef, and nextVideoRef is updated
  const submitApi = async (event) => {
    setCurrentVideo(nextVideoRef.current);
    updateWatchHistory(nextVideoRef.current);
    const result = await YoutubeApi();
    nextVideoRef.current = result;
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
      .post("http://localhost:5000/archive/add/", videoFile)
      .then(function (response) {
        console.log(response);
        alert("succesfully submitted to archive");
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  useEffect(() => {
    initialRequest();
  }, []);

  /////////////////////////////////////////////////////////////////////////
  return {
    currentVideo,
    previousVideo,
    nextVideo,
    initialRequest,
    submitToArchive,
  };
}

export default usePlayer;
