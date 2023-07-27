import { useNavigate } from "react-router";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls";
import usePlayerArchive from "../hooks/usePlayerArchive";
import useKeyDown from "../hooks/useKeyDown";
import VidInfo from "../components/VidInfo";
import DatabaseSubmit from "../components/DatabaseSubmit";
import TableWrapper from "../components/TableWrapper";
import useModal from "../hooks/useModal";
import AboutModal from "../components/AboutModal";
import s from "../css/archive.module.css";

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
  const { handleClick, handleClose, showModal } = useModal();
  const navigate = useNavigate();

  useKeyDown("ArrowRight", nextVideo, currentVideo);
  useKeyDown("ArrowLeft", previousVideo, currentVideo);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1 className={s.mainHeader}>GRAPHIC BALANCE</h1>
        <div className={s.navWrapper}>
          <button className={s.nav} onClick={() => navigate("/main")}>
            home
          </button>
          <button className={s.nav} onClick={() => navigate("/")}>
            splash
          </button>
          <button className={s.nav} onClick={handleClick}>
            about
          </button>
        </div>
      </div>
      <div className={s.navbar}>
        <div className={s.navbarHeader}>Archive List</div>
        <div className={s.navbarDropdown}>
          {/* <button onClick={() => loadVideoArchive()}>default sort</button> */}
          <TableWrapper
            videoData={videoData}
            handleTableClick={handleTableClick}
            currentVideo={currentVideo}
            loadVideoArchive={loadVideoArchive}
          />
        </div>
      </div>
      <div className={s.right}>
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

      {showModal && <AboutModal handleClose={handleClose} />}
    </div>
  );
};

export default Archive;
