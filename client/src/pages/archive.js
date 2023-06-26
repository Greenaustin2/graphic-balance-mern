import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import IframeConstructor from "../components/IframeConstructor.js";
import "../css/archive.css";

// const archiveStateTemplate = {
//   _id: "",
//     videoTitle: "",
//     channelId: "",
//     channelTitle: "",
//     description: "",
//     publisheTime: "",
//     dateAdded: "",
//     duration: "",
//     thumbnailHigh: "",
//     userRating: 0,
// }

const Archive = () => {
  const [videoData, setVideoData] = useState();
  // _id: "",
  // videoTitle: "",
  // channelId: "",
  // channelTitle: "",
  // description: "",
  // publisheTime: "",
  // dateAdded: "",
  // duration: "",
  // thumbnailHigh: "",
  // userRating: 0,
  const navigate = useNavigate();
  const currentVideo = { id: "3EOTl-DLkuA" };

  const mainSubmit = () => {
    navigate("/main");
  };

  const splashSubmit = () => {
    navigate("/");
  };

  const loadVideoArchive = () => {
    axios
      .get("http://localhost:5000/archive")
      .then((response) => {
        // response.data.map((r) => {
        //   setVideoData(...videoData, { _id: r._id, videoTitle: r.videoTitle });
        setVideoData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    loadVideoArchive();
  }, []);

  const VideoDataTable = (videoData) => {
    console.log("video data table entered");

    return (
      // Object.entries(tifs).map(([key,value],i) => <option key={i} value={key}>{value}</option>)
      Object.keys(videoData["videoData"]).map((key, value) => {
        return (
          <tr>
            <td>{videoData["videoData"][key]["videoTitle"]}</td>
            <td>{videoData["videoData"][key]["_id"]}</td>
          </tr>
        );
        //
      })
    );
  };

  // useEffect(() => {
  //   videoData.map;
  // }, [videoData]);

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
        <IframeConstructor currentVideo={currentVideo} />
      </div>
    </div>
  );
};

export default Archive;
