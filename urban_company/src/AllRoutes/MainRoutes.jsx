import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLandingPage from "../Components/MainLandingPage";
import Home from "./Home";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MainLandingPage" element={<MainLandingPage/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;




