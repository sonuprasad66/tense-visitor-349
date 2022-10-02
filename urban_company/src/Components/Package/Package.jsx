import React from "react";
import PackageNavbar from "../PackageNavbar/PackageNavbar";

import DetailPack from "./DetailPack";
import PackageData from "./PackageData";
import TopSection from "./TopSection";
import PackageFooter from "../PackageNavbar/PackageFooter";

const Package = () => {
  return (
    <div>
    <PackageNavbar />
      <TopSection />

      <DetailPack />
      <PackageData />
      <PackageFooter/>
    </div>
  );
};

export default Package;
