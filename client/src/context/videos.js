import { useState, createContext } from "react";
import YoutubeApi from "../api";

const VideosContext = createContext();

function Provider({ children }) {
  // const [watchHistory, setWatchHistory] = useState([]);
  // const [currentVideo, setCurrentVideo] = useState([]);
  // const [nextVideo, setNextVideo] = useState([]);
  const submitRequest = async () => {
    setCurrentVideo(nextVideo);
    const result = await YoutubeApi();
    setNextVideo(result);
    console.log("before set video state");
    return result;
  };

  // const initialRequest = async () => {
  //   const result = await YoutubeApi();
  //   setCurrentVideo(result);
  //   const result2 = await YoutubeApi();
  //   setNextVideo(result2);
  // };
  const videoFunctions = {
    initialRequest,
    submitRequest,
    currentVideo,
    setCurrentVideo,
    nextVideo,
    setNextVideo,
    // watchHistory,
    // setWatchHistory,
  };
  return (
    <VideosContext.Provider value={videoFunctions}>
      {children}
    </VideosContext.Provider>
  );
}

export { Provider };
export default VideosContext;

//initial request, state isnt set but api call is cued
//main loaded, setstate(currentVideo), setState(nextVideo)
//onPlayerStateChange, submitRequest()
//nextButton, cue from nextVideo, submit request
// const initialValues = {
//     currentVideo: [],
//     nextVideo: []
// }
// const [video, setVideo] = useState(initialValues)

// const initialRequest = () => {
//     //api is called
//     //
// }
