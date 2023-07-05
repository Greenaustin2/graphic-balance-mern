import { useNavigate } from "react-router";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls.js";
import usePlayer from "../hooks/usePlayerMain";

const Main = () => {
  const { currentVideo, previousVideo, nextVideo, submitToArchive } =
    usePlayer();

  const navigate = useNavigate();

  return (
    <div className="main">
      <h1>Main</h1>
      <form onSubmit={() => navigate("/archive")}>
        <input type="submit" value="archive" />
      </form>
      <form onSubmit={() => navigate("/")}>
        <input type="submit" value="splash" />
      </form>

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
