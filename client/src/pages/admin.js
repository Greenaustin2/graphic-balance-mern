import { useState } from "react";
import { useNavigate } from "react-router";
import useModal from "../hooks/useModal";
import usePlayerAdmin from "../hooks/usePlayerAdmin";
import VidInfo from "../components/VidInfo";
import DatabaseSubmit from "../components/DatabaseSubmit";
import TableWrapper from "../components/TableWrapper";
import s from "../css/archive.module.css";
import IframeConstructor from "../components/IframeConstructor";
import IframeControls from "../components/IframeControls";
import AboutModal from "../components/AboutModal";
import table from "../images/table.png";

const Admin = () => {
  const [input, setInput] = useState("");
  const [page, setPage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.value === process.env.REACT_APP_ADMIN_PASS) {
      setPage(true);
    }
  };

  const {
    videoData,
    currentVideo,
    nextVideo,
    previousVideo,
    loadVideoArchive,
    handleDelete,
    handleTableClick,
    transferToPermanentArchive,
  } = usePlayerAdmin();
  const { handleClick, handleClose, showModal } = useModal();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
        <input type="submit" value="69" />
      </form>
      {page && (
        <div>
          <div className={s.container}>
            <div className={s.header}>
              <h1 className={s.mainHeader}>GRAPHIC BALANCE</h1>
              <div className={s.navWrapper}>
                <button className={s.nav} onClick={() => navigate("/main")}>
                  &lt;home&gt;
                </button>
                <button className={s.nav} onClick={handleClick}>
                  &lt;about&gt;
                </button>
              </div>
            </div>
            <div className={s.navbar}>
              <div className={s.navbarHeader}>
                <img src={table} alt="table icon" className={s.tableIcon} />
              </div>
              <div className={s.navbarDropdown}>
                {/* <button onClick={() => loadVideoArchive()}>default sort</button> */}
                {videoData && (
                  <TableWrapper
                    videoData={videoData}
                    handleTableClick={handleTableClick}
                    currentVideo={currentVideo}
                    loadVideoArchive={loadVideoArchive}
                  />
                )}
              </div>
            </div>
            <div className={s.right}>
              {currentVideo && (
                <IframeConstructor
                  currentVideo={currentVideo}
                  onEnd={nextVideo}
                />
              )}
              <IframeControls
                previousVideo={previousVideo}
                nextVideo={nextVideo}
                handleDelete={handleDelete}
                submitToArchive={transferToPermanentArchive}
              />
              {videoData && currentVideo && (
                <VidInfo currentVideo={currentVideo} videoData={videoData} />
              )}
              <DatabaseSubmit />
            </div>

            {showModal && <AboutModal handleClose={handleClose} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
