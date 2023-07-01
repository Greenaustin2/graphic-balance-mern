import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import axios from "axios";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls";
import "../css/archive.css";
import { formatTime, formatDate } from "../utils/timeConversion";
import usePlayerArchive from "../hooks/use-playerArchive";
import SortingButtons from "../components/SortingButtons";
import VidInfo from "../components/VidInfo";
// import VideoDataTable from "../components/VideoDataTable";

const Archive = () => {
  const {
    videoData,
    setVideoData,
    currentVideo,
    setCurrentVideo,
    nextVideo,
    previousVideo,
  } = usePlayerArchive();

  const navigate = useNavigate();
  //ref to prevent initial render of currentVideo useEffect
  const didMount = useRef(false);

  //update currentVideo State only when videoData is defined, skip initial render
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

  const handleTableClick = (id) => {
    setCurrentVideo(id);
  };

  // fetch video archive data and set to videoData state
  //sortKey indicated varibale with which rows are sorted
  //sort direction accepts either 1 or -1, indicating ascending and descending values
  function loadVideoArchive(sortKey, sortDirection) {
    // var sortCriteria = {};
    // sortCriteria[sortKey] = sortDirection;
    console.log("load video archive");
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

  const VideoDataTable = (videoData) => {
    const videoArray = videoData["videoData"];
    console.log("table re render");
    return Object.keys(videoArray).map((key, value) => {
      const id = videoArray[key]["_id"];
      return (
        <tr
          key={id}
          onClick={() => handleTableClick(id)}
          className={currentVideo === id ? "active" : null}
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
        <form onSubmit={() => navigate("/main")}>
          <input type="submit" value="main" />
        </form>
        <form onSubmit={() => navigate("/splash")}>
          <input type="submit" value="splash" />
        </form>
      </div>
      <div className="left">
        <button onClick={() => loadVideoArchive()}>default sort</button>
        <table>
          <tbody>
            <tr>
              <th>
                title
                <SortingButtons
                  loadVideoArchive={loadVideoArchive}
                  sortParameter={"videoTitle"}
                />
              </th>
              <th>
                channel
                <SortingButtons
                  loadVideoArchive={loadVideoArchive}
                  sortParameter={"channelTitle"}
                />
              </th>
              <th>
                duration
                <SortingButtons
                  loadVideoArchive={loadVideoArchive}
                  sortParameter={"duration"}
                />
              </th>

              <th>
                date
                <SortingButtons
                  loadVideoArchive={loadVideoArchive}
                  sortParameter={"publisheTime"}
                />
              </th>
            </tr>
            {videoData && (
              <VideoDataTable
                videoData={videoData}
                // videoData={videoData}
                // handleTableClick={handleTableClick}
                // currentVideo={currentVideo}
              />
            )}
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
        {videoData && (
          <VidInfo currentVideo={currentVideo} videoData={videoData} />
        )}
      </div>
    </div>
  );
};

export default Archive;
