import React from "react";

// import VideosContext from "../context/videos";

const IframeControls = ({
  previousVideo,
  nextVideo,
  submitToArchive,
  handleDelete,
}) => {
  return (
    <div>
      <div>
        {submitToArchive && (
          <button
            type="button"
            value="Submit to Archive"
            onClick={submitToArchive}
          >
            Archive
          </button>
        )}
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
      <div>
        {handleDelete && (
          <button type="button" onClick={handleDelete} value="Delete">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default IframeControls;
