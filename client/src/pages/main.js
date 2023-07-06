import { useNavigate } from "react-router";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls.js";
import usePlayer from "../hooks/usePlayerMain";
import "../css/main.css";

const Main = () => {
  const { currentVideo, previousVideo, nextVideo, submitToArchive } =
    usePlayer();

  const navigate = useNavigate();

  return (
    <div className="main">
      <h1 className="main-header">GRAPHIC BALANCE</h1>
      <div className="nav-wrapper">
        <button className="nav" onClick={() => navigate("/archive")}>
          archive
        </button>
        <button className="nav" onClick={() => navigate("/")}>
          about
        </button>
      </div>

      {currentVideo && (
        <IframeConstructor
          currentVideo={currentVideo["id"]}
          onEnd={nextVideo}
        />
      )}

      <IframeControls
        previousVideo={previousVideo}
        nextVideo={nextVideo}
        submitToArchive={submitToArchive}
      />
    </div>
  );
};

export default Main;
