import { useNavigate } from "react-router";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls";
import "../css/archive.css";
import { formatTime, formatDate } from "../utils/timeConversion";
import usePlayerArchive from "../hooks/usePlayerArchive";
import SortingButtons from "../components/SortingButtons";
import VidInfo from "../components/VidInfo";
import { YOUTUBE_API_KEY, apiRequest } from "../api";
import DatabaseSubmit from "../components/DatabaseSubmit";

const Archive = () => {
  const {
    videoData,
    currentVideo,
    nextVideo,
    previousVideo,
    loadVideoArchive,
    handleDelete,
    handleTableClick,
  } = usePlayerArchive();

  const navigate = useNavigate();

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
        <form onSubmit={() => navigate("/")}>
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
        {videoData && currentVideo && (
          <VidInfo currentVideo={currentVideo} videoData={videoData} />
        )}
        <DatabaseSubmit />
      </div>
    </div>
  );
};

export default Archive;
