import React from "react";
import "../styles/Services/ServiceBestDeal.css";

export const ServiceInformation = () => {
  return (
    <div className="information_container">
      {/* ========================insurance============================================ */}
      <div className="insurance">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_a4e46fa0.png"
          alt="insurance"
        />
      </div>
      <div className="backgrount"></div>
      {/* ========================Policy============================================ */}
      <div className="policy">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1624344861242-558286.png"
          alt="policy"
        />
      </div>
      <div className="backgrount"></div>
      {/* ========================partnar============================================ */}
      <div className="partnar">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_3cffdf20.png"
          alt="partnar"
        />
      </div>
      <div className="backgrount"></div>
    </div>
  );
};
