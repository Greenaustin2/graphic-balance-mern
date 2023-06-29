const VideoDataTable = ({
  videoData,
  handleTableClick,
  formatTime,
  formatDate,
}) => {
  const videoArray = videoData["videoData"];
  console.log("table re render");
  return Object.keys(videoArray).map((key, value) => {
    const id = videoArray[key]["_id"];
    return (
      <tr key={id} onClick={() => handleTableClick(id)}>
        <td>{videoArray[key]["videoTitle"]}</td>
        <td>{videoArray[key]["channelTitle"]}</td>
        <td>{formatTime(videoArray[key]["duration"])}</td>
        <td>{formatDate(videoArray[key]["publisheTime"])}</td>
      </tr>
    );
  });
};

export default VideoDataTable;
