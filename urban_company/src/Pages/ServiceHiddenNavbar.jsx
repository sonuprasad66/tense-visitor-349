import React from "react";
import "../styles/Services/ServiceHiddenNavbar.css";
import { FaSistrix, FaAngleDown } from "react-icons/fa";

export const ServiceHiddenNavbar = () => {
  return (
    <div className="hidden_navbar">
      <div className="navbar_contenar">
        <div className="search_bar">
          <div className="search_icon">
            <FaSistrix />
          </div>
          <div className="input_box">
            <input type="text" placeholder="Search for services" />
          </div>
        </div>

        {/* ==========================right content=============================================== */}
        <div className="right_content">
          <div className="right_content_box">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
              alt="cc"
            />
            <p>Women's...</p>
          </div>
          <div className="right_content_box">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
              alt="cc"
            />
            <p>Salon for Men</p>
          </div>
          <div className="right_content_box">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
              alt="cc"
            />
            <p>Men's Therapies</p>
          </div>
        </div>
      </div>
    </div>
  );
};
