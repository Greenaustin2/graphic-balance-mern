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
        if (response.data.length === 0) {
        } else {
          setVideoData(response.data);
        }
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
        alert("video deleted");
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };

  //deletes video from temporary archive and adds to permanent archive
  const transferToPermanentArchive = () => {
    console.log(videoData[0]["_id"]);
    const videoFile = {
      _id: videoData[0]["_id"],
      videoTitle: videoData[0]["videoTitle"],
      channelId: videoData[0]["channelId"],
      channelTitle: videoData[0]["channelTitle"],
      description: videoData[0]["description"],
      publisheTime: videoData[0]["publisheTime"],
      dateAdded: videoData[0]["dateAdded"],
      duration: videoData[0]["duration"],
      thumbnailHigh: videoData[0]["thumbnailHigh"],
      userRating: videoData[0]["userRating"],
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
