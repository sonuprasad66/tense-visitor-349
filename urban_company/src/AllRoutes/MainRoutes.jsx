import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLandingPage from "../Components/MainLandingPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLandingPage/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;




{/* <Route path="/" element={<Navbar/>} />
<Route path="/GodadyMainPage" element={<GodadyMainPage/>} />
<Route path="/Halloween" element={<Halloween/>} />
<Route path="/RestaurantMenu" element={<RestaurantMenu/>} />
<Route path="/Menu" element={<Menu/>} /> */}