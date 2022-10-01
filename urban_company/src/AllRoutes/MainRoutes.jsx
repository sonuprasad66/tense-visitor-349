import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../Components/Checkout/Checkout";
import Package from "../Components/Package/Package";
import Blog from "../Components/PackageNavbar/Blog";
import PBooking from "../Components/PackageNavbar/PBooking";
import ViewCart from "../Components/ViewCart/ViewCart";


import Home from "./Home";
import { Services } from "./Services";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/package" element={<Package />} />
      <Route path="/viewcart" element={<ViewCart />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/service" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/booking" element={<PBooking />} />
    </Routes>
  );
};




export default MainRoutes;

