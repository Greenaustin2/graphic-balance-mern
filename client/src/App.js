import React, { useState, useEffect, useContext } from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Main from "./pages/main";
import Archive from "./pages/archive";
import Splash from "./pages/splash";
import YoutubeApi from "./api";
import VideosContext from "./context/videos.js";

const App = () => {
  const { submitRequest } = useContext(VideosContext);
  //Initial API request is called

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
};

export default App;
