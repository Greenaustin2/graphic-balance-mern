import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Archive from "./pages/archive";
import Splash from "./pages/splash";
import Admin from "./pages/admin";
import PrivacyPolicy from "./pages/privacyPolicy";
import "./css/app.css";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
