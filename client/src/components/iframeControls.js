import React from "react";

// import VideosContext from "../context/videos";

const IframeControls = ({ previousVideo, nextVideo, submitApi }) => {
  return (
    <div>
      <div>
        <button type="button" value="Submit to Archive">
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
