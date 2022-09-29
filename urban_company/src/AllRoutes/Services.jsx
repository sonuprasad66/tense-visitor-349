import React from "react";
import { ServiceAppliances } from "../Pages/ServiceAppliances";
import { ServiceBestDeal } from "../Pages/ServiceBestDeal";
import { ServiceFooter } from "../Pages/ServiceFooter";
import { ServiceHomePage } from "../Pages/ServiceHomePage";
import { ServiceInformation } from "../Pages/ServiceInformation";

export const Services = () => {
  return (
    <div>
      <ServiceHomePage />
      <ServiceBestDeal />
      <ServiceAppliances />
      <ServiceInformation />
      <ServiceFooter />
    </div>
  );
};
