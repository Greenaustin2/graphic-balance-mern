import { useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls";
import "../css/archive.css";

const Archive = () => {
  const [videoData, setVideoData] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const navigate = useNavigate();
  //ref to prevent initial render of currentVideo useEffect
  const didMount = useRef(false);

  //Navigation
  const mainSubmit = () => {
    navigate("/main");
  };
  const splashSubmit = () => {
    navigate("/");
  };

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
  const loadVideoArchive = () => {
    console.log("load video archive");
    axios
      .get("http://localhost:5000/archive")
      .then((response) => {
        console.log("load video archive response");
        setVideoData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  //update currentVideo State only when videoData is defined, skip initial render
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    setCurrentVideo(videoData[0]["_id"]);
    console.log(typeof videoData);
  }, [videoData]);

  //Load video archive on initial render
  useEffect(() => {
    loadVideoArchive();
  }, []);

  //reformat duration string in table
  const formatTime = (duration) => {
    const formattedTime = duration
      .replace("PT", "")
      .replace("H", ":")
      .replace("M", ":")
      .replace("S", "");
    return formattedTime;
  };

  //reformat publish date in table
  const formatDate = (date) => {
    const formattedDate = date.split("T");
    return formattedDate[0];
  };

  //highlights current playing video
  const conditionalStyles = (id) => {
    if (id === currentVideo) {
      return "highlight";
    }
  };

  const handleTableClick = (video) => {
    setCurrentVideo(video);
  };

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

  const VideoDataTable = (videoData) => {
    const videoArray = videoData["videoData"];
    console.log("table re render");
    return Object.keys(videoArray).map((key, value) => {
      const id = videoArray[key]["_id"];
      return (
        <tr
          key={id}
          onClick={() => handleTableClick(id)}
          className={() => conditionalStyles(id)}
        >
          <td>{videoArray[key]["videoTitle"]}</td>
          <td>{videoArray[key]["channelTitle"]}</td>
          <td>{formatTime(videoArray[key]["duration"])}</td>
          <td>{formatDate(videoArray[key]["publisheTime"])}</td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div classname="header">
        <h1>Archive</h1>
        <form onSubmit={mainSubmit}>
          <input type="submit" value="main" />
        </form>
        <form onSubmit={splashSubmit}>
          <input type="submit" value="splash" />
        </form>
      </div>
      <div className="left">
        <table>
          <tbody>
            <tr>
              <th>title</th>
              <th>channel</th>
              <th>duration</th>
              <th>date</th>
            </tr>
            {videoData && <VideoDataTable videoData={videoData} />}
          </tbody>
        </table>
      </div>
      <div className="right">
        {currentVideo && (
          <IframeConstructor currentVideo={currentVideo} onEnd={nextVideo} />
        )}
        <IframeControls
          previousVideo={previousVideo}
          nextVideo={nextVideo}
          handleDelete={handleDelete}
          submitToArchive={null}
        />
      </div>
    </div>
  );
};

export default Archive;
