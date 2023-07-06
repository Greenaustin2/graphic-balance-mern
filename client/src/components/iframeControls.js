import React from "react";
import s from "../css/iframeControls.module.css";
// import VideosContext from "../context/videos";

const IframeControls = ({
  previousVideo,
  nextVideo,
  submitToArchive,
  handleDelete,
}) => {
  return (
    <div className={s.iframeControls}>
      {submitToArchive && (
        <button
          className={s.control}
          type="button"
          value="Submit to Archive"
          onClick={submitToArchive}
        >
          submit to archive
        </button>
      )}
      <button
        className={s.control}
        type="button"
        onClick={nextVideo}
        value="Next"
      >
        next
      </button>
      <button
        className={s.control}
        type="button"
        onClick={previousVideo}
        value="Previous"
      >
        previous
      </button>
      {handleDelete && (
        <button
          className={s.control}
          type="button"
          onClick={handleDelete}
          value="Delete"
        >
          delete
        </button>
      )}
    </div>
  );
};

export default IframeControls;
