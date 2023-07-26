import { useNavigate } from "react-router";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls";
// import useKeyDown from "../hooks/useKeyDown";
import usePlayer from "../hooks/usePlayerMain";
import useModal from "../hooks/useModal";
import AboutModal from "../components/AboutModal";
import s from "../css/main.module.css";

const Main = () => {
  const {
    currentVideo,
    previousVideo,
    nextVideo,
    submitToArchive,
    useKeyDown,
  } = usePlayer();
  const { handleClick, handleClose, showModal } = useModal();
  const navigate = useNavigate();

  useKeyDown("ArrowRight", nextVideo);
  useKeyDown("ArrowLeft", previousVideo);
  return (
    <div className={s.main}>
      <h1 className={s.mainHeader}>GRAPHIC BALANCE</h1>
      <div className={s.navWrapper}>
        <button className={s.nav} onClick={() => navigate("/archive")}>
          archive
        </button>
        <button className={s.nav} onClick={() => navigate("/")}>
          splash
        </button>
        <button className={s.nav} onClick={handleClick}>
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
      {showModal && <AboutModal handleClose={handleClose} />}
    </div>
  );
};

export default Main;
