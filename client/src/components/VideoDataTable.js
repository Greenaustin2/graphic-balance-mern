// import { formatTime, formatDate } from "../utils/timeConversion";
// import React from "react";

//   const VideoDataTable = (videoData) => {
//     const videoArray = videoData["videoData"];
//     console.log("table re render");
//     return Object.keys(videoArray).map((key, value) => {
//       const id = videoArray[key]["_id"];
//       return (
//         <tr
//           key={id}
//           onClick={() => handleTableClick(id)}
//           className={currentVideo === id ? "active" : null}
//         >
//           <td>{videoArray[key]["videoTitle"]}</td>
//           <td>{videoArray[key]["channelTitle"]}</td>
//           <td>{formatTime(videoArray[key]["duration"])}</td>
//           <td>{formatDate(videoArray[key]["publisheTime"])}</td>
//         </tr>
//       );
//     });
//   };
// export default VideoDataTable;
