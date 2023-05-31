import React, { useState, useEffect } from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Main from "./pages/main";
import Archive from "./pages/archive";
import Splash from "./pages/splash";
import YoutubeApi from "./api";

const App = () => {
  const [video, setVideo] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [nextVideo, setNextVideo] = useState([]);
  const submitRequest = async () => {
    const result = await YoutubeApi();
    setVideo(result);
  };

  useEffect(() => {
    submitRequest();
    console.log("called initial api request");
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route
          path="/main"
          element={<Main videoData={video} apiRequest={submitRequest} />}
        />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
};

export default App;
