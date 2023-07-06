import { useNavigate } from "react-router";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls.js";
import usePlayer from "../hooks/usePlayerMain";
// import "../css/main.css";
import s from "../css/main.module.css";

const Main = () => {
  const { currentVideo, previousVideo, nextVideo, submitToArchive } =
    usePlayer();

  const navigate = useNavigate();

  return (
    <div className={s.main}>
      <h1 className={s.mainHeader}>GRAPHIC BALANCE</h1>
      <div className={s.navWrapper}>
        <button className={s.nav} onClick={() => navigate("/archive")}>
          archive
        </button>
        <button className={s.nav} onClick={() => navigate("/")}>
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
