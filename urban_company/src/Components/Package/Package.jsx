import React from "react";
import PackageNavbar from "../PackageNavbar/PackageNavbar";
import DetailPack from "./DetailPack";
import PackageData from "./PackageData";
import TopSection from "./TopSection";

const Package = () => {
  return (
    <div>
    <PackageNavbar/>
      <TopSection />

      <DetailPack />
      <PackageData />
    </div>
  );
};

export default Package;
