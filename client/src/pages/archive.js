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

  const handleTableClick = (video) => {
    setCurrentVideo(video);
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
    axios
      .get("http://localhost:5000/archive")
      .then((response) => {
        console.log(response.data);
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

  const VideoDataTable = (videoData) => {
    const videoArray = videoData["videoData"];
    return Object.keys(videoArray).map((key, value) => {
      return (
        <tr
          key={videoArray[key]["_id"]}
          onClick={() => handleTableClick(videoArray[key]["_id"])}
        >
          <td>{videoArray[key]["videoTitle"]}</td>
          <td>{videoArray[key]["_id"]}</td>
        </tr>
      );
      //
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
              <th>video title</th>
              <th>id</th>
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
          submitToArchive={null}
        />
      </div>
    </div>
  );
};

export default Archive;
