import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLandingPage from "../Components/MainLandingPage";


import Package from "../Components/Package/Package";
import Home from "./Home"


const MainRoutes = () => {
  return (
    
      <Routes>


      <Route path="/MainLandingPage" element={<MainLandingPage/>} />
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />


      </Routes>
    
  );
};

export default MainRoutes;




