import { useState, useRef, useEffect } from "react";
import instance from "../axiosConfig";

function usePlayerAdmin() {
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
    instance
      .get("/temp-archive/table", {
        params: {
          sortKey: sortKey,
          sortDirection: sortDirection,
        },
      })
      .then((response) => {
        console.log("load video archive response");
        console.log("response data" + response.data);
        setVideoData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  //delete video from temporary archive
  const handleDelete = () => {
    instance
      .delete("/temp-archive/" + currentVideo)
      .then(() => {
        console.log("video deleted");
      })
      .catch((error) => {
        alert(error);
      });
  };

  //deletes video from temporary archive and adds to permanent archive
  const transferToPermanentArchive = () => {
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
    instance
      .post("/archive-data/add/", videoFile)
      .then(function (response) {
        console.log(response);
        alert("succesfully submitted to archive");
      })
      .catch(function (error) {
        console.log(error.response);
      });
    handleDelete();
  };

  const handleTableClick = (id) => {
    setCurrentVideo(id);
  };

  //Update currentVideo State only when videoData is defined, skip initial render
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    // console.log("video data from use effect" + videoData);
    setCurrentVideo(videoData[0]["_id"]);
  }, [videoData]);

  //Load video archive on initial render
  useEffect(() => {
    loadVideoArchive("dateAdded", -1);
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
    transferToPermanentArchive,
  };
}

export default usePlayerAdmin;
