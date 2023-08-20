import s from "../css/iframeControls.module.css";

const IframeControls = ({
  previousVideo,
  nextVideo,
  submitToArchive,
  handleDelete,
  transferToPermanentArchive,
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
      {previousVideo && (
        <button
          className={s.control}
          type="button"
          onClick={previousVideo}
          value="Previous"
        >
          &lt;--
        </button>
      )}
      {nextVideo && (
        <button
          className={s.control}
          type="button"
          onClick={nextVideo}
          value="Next"
        >
          --&gt;
        </button>
      )}
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
      {transferToPermanentArchive && (
        <button
          className={s.control}
          type="button"
          onClick={transferToPermanentArchive}
          value="Transfer"
        >
          Xfer
        </button>
      )}
    </div>
  );
};

export default IframeControls;
