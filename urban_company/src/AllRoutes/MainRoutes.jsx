import React from "react";
import { Route, Routes } from "react-router-dom";
import Package from "../Components/Package/Package";
import Home from "./Home"


const MainRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />

      </Routes>
    
  );
};

export default MainRoutes;
