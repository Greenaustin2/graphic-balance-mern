import React from "react";

// import VideosContext from "../context/videos";

const IframeControls = ({
  previousVideo,
  nextVideo,
  submitToArchive,
  handleDelete,
}) => {
  return (
    <div className="iframe-controls">
      {submitToArchive && (
        <button
          className="control"
          type="button"
          value="Submit to Archive"
          onClick={submitToArchive}
        >
          submit to archive
        </button>
      )}
      <button
        className="control"
        type="button"
        onClick={nextVideo}
        value="Next"
      >
        next
      </button>
      <button
        className="control"
        type="button"
        onClick={previousVideo}
        value="Previous"
      >
        Previous
      </button>
      {handleDelete && (
        <button
          className="control"
          type="button"
          onClick={handleDelete}
          value="Delete"
        >
          previous
        </button>
      )}
    </div>
  );
};

export default IframeControls;
