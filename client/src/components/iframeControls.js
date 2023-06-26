import React from "react";

// import VideosContext from "../context/videos";

const IframeControls = ({ previousVideo, nextVideo, submitToArchive }) => {
  return (
    <div>
      <div>
        <button
          type="button"
          value="Submit to Archive"
          onClick={submitToArchive}
        >
          Archive
        </button>
      </div>
      <div>
        <button type="button" onClick={nextVideo} value="Next">
          Next
        </button>
      </div>
      <div>
        <button type="button" onClick={previousVideo} value="Previous">
          Previous
        </button>
      </div>
    </div>
  );
};

export default IframeControls;
