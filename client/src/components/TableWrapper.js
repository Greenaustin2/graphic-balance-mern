import { formatTime, formatDate } from "../utils/timeConversion";
import SortingButtons from "../components/SortingButtons";
import s from "../css/tableWrapper.module.css";

const TableWrapper = ({
  videoData,
  handleTableClick,
  currentVideo,
  loadVideoArchive,
}) => {
  const VideoDataTable = (videoData) => {
    const videoArray = videoData["videoData"];
    return Object.keys(videoArray).map((key, value) => {
      const id = videoArray[key]["_id"];
      return (
        <tr
          key={id}
          onClick={() => handleTableClick(id)}
          className={currentVideo === id ? `${s.active}` : null}
        >
          <td>{videoArray[key]["videoTitle"]}</td>
          <td>{videoArray[key]["channelTitle"]}</td>
          <td>{formatTime(videoArray[key]["duration"])}</td>
          <td>{formatDate(videoArray[key]["publisheTime"])}</td>
          <td>{formatDate(videoArray[key]["dateAdded"])}</td>
        </tr>
      );
    });
  };
  return (
    <div className={`${s.tableWrapper} ${s.tableFixHead}`}>
      <table>
        <thead>
          <tr className={s.red}>
            <th>
              TITLE
              <SortingButtons
                loadVideoArchive={loadVideoArchive}
                sortParameter={"videoTitle"}
              />
            </th>
            <th>
              CHANNEL
              <SortingButtons
                loadVideoArchive={loadVideoArchive}
                sortParameter={"channelTitle"}
              />
            </th>
            <th>
              DURATION
              <SortingButtons
                loadVideoArchive={loadVideoArchive}
                sortParameter={"duration"}
              />
            </th>

            <th>
              DATE
              <SortingButtons
                loadVideoArchive={loadVideoArchive}
                sortParameter={"publisheTime"}
              />
            </th>
            <th>
              DATE ADDED
              <SortingButtons
                loadVideoArchive={loadVideoArchive}
                sortParameter={"dateAdded"}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {videoData && (
            <VideoDataTable
              videoData={videoData}
              handleTableClick={handleTableClick}
              currentVideo={currentVideo}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
