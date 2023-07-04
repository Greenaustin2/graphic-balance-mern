import { useNavigate } from "react-router";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls";
import usePlayerArchive from "../hooks/usePlayerArchive";
import VidInfo from "../components/VidInfo";
import DatabaseSubmit from "../components/DatabaseSubmit";
import TableWrapper from "../components/TableWrapper";

import "../css/archive.css";

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
        <TableWrapper
          videoData={videoData}
          handleTableClick={handleTableClick}
          currentVideo={currentVideo}
          loadVideoArchive={loadVideoArchive}
        />
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
