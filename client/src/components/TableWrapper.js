import { formatTime, formatDate } from "../utils/timeConversion";
import SortingButtons from "../components/SortingButtons";
// import VideoDataTable from "../components/VideoDataTable";

const TableWrapper = ({
  videoData,
  handleTableClick,
  currentVideo,
  loadVideoArchive,
}) => {
  const VideoDataTable = (videoData) => {
    const videoArray = videoData["videoData"];
    console.log("table re render");
    return Object.keys(videoArray).map((key, value) => {
      const id = videoArray[key]["_id"];
      return (
        <tr
          key={id}
          onClick={() => handleTableClick(id)}
          className={currentVideo === id ? "active" : null}
        >
          <td>{videoArray[key]["videoTitle"]}</td>
          <td>{videoArray[key]["channelTitle"]}</td>
          <td>{formatTime(videoArray[key]["duration"])}</td>
          <td>{formatDate(videoArray[key]["publisheTime"])}</td>
        </tr>
      );
    });
  };
  return (
    <table>
      <tbody>
        <tr>
          <th>
            title
            <SortingButtons
              loadVideoArchive={loadVideoArchive}
              sortParameter={"videoTitle"}
            />
          </th>
          <th>
            channel
            <SortingButtons
              loadVideoArchive={loadVideoArchive}
              sortParameter={"channelTitle"}
            />
          </th>
          <th>
            duration
            <SortingButtons
              loadVideoArchive={loadVideoArchive}
              sortParameter={"duration"}
            />
          </th>

          <th>
            date
            <SortingButtons
              loadVideoArchive={loadVideoArchive}
              sortParameter={"publisheTime"}
            />
          </th>
        </tr>

        {videoData && (
          <VideoDataTable
            videoData={videoData}
            handleTableClick={handleTableClick}
            currentVideo={currentVideo}
          />
        )}
      </tbody>
    </table>
  );
};

export default TableWrapper;
