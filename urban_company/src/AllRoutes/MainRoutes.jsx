import React from "react";
import { Route, Routes } from "react-router-dom";
import Package from "../Components/Package/Package";

import Home from "./Home";
import { Services } from "./Services";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/package" element={<Package />} />
      <Route path="/service" element={<Services />} />
    </Routes>
  );
};




export default MainRoutes;

