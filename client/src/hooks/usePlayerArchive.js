import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { formatTime, formatDate } from "../utils/timeConversion";

function usePlayerArchive() {
  const [videoData, setVideoData] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  //ref to prevent initial render of currentVideo useEffect
  const didMount = useRef(false);

  const nextVideo = () => {
    const dataLength = videoData.length;
    const index = videoData.findIndex((el) => {
      return el["_id"] === currentVideo;
    });
    if (currentVideo !== videoData[dataLength - 1]["_id"]) {
      setCurrentVideo(videoData[index + 1]["_id"]);
    }
  };

  const previousVideo = () => {
    const index = videoData.findIndex((el) => {
      return el["_id"] === currentVideo;
    });
    if (currentVideo !== videoData[0]["_id"]) {
      setCurrentVideo(videoData[index - 1]["_id"]);
    }
  };

  // fetch video archive data and set to videoData state
  //sortKey indicated varibale with which rows are sorted
  //sort direction accepts either 1 or -1, indicating ascending and descending values
  function loadVideoArchive(sortKey, sortDirection) {
    axios
      .get("http://localhost:5000/archive", {
        params: {
          sortKey: sortKey,
          sortDirection: sortDirection,
        },
      })
      .then((response) => {
        console.log("load video archive response");
        setVideoData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  const handleDelete = () => {
    axios
      .delete("http://localhost:5000/archive/" + currentVideo)
      .then(() => {
        console.log("video deleted");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleTableClick = (id) => {
    setCurrentVideo(id);
    // console.dir(id);
  };

  //Update currentVideo State only when videoData is defined, skip initial render
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    setCurrentVideo(videoData[0]["_id"]);
  }, [videoData]);

  //Load video archive on initial render
  useEffect(() => {
    loadVideoArchive("videoTitle", 1);
  }, []);

  return {
    videoData,
    setVideoData,
    currentVideo,
    setCurrentVideo,
    nextVideo,
    previousVideo,
    loadVideoArchive,
    handleDelete,
    handleTableClick,
  };
}

export default usePlayerArchive;
