import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services/ServiceHomePage.css";
import { ServiceSidebar } from "./ServiceSidebar";
import { FaSistrix, FaAngleDown } from "react-icons/fa";

export const ServiceHomePage = () => {
  return (
    <div className="main_container">
      <div className="home_container">
        <div className="home_top">
          <div className="home_top_loge">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
              alt="logo"
            />
          </div>

          <div className="home_top_right">
            <ul>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link className="register_professional">
                  Register as a Professional
                </Link>
              </li>
              <li>
                <ServiceSidebar />
              </li>
            </ul>
          </div>
        </div>

        <div className="home_bottom">
          <div className="home_bottom_text1">
            <p>
              <span>Home</span> / <span>delhi-ncr</span>
            </p>
          </div>
          <div className="home_bottom_text2">
            <h1>Home services, on demand.</h1>
          </div>
          {/* ---------------------------------Search Box------------------------------------------- */}
          <div className="home_bottom_text3">
            <div className="select_country">
              <div className="select_img">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png"
                  alt="flag"
                />
              </div>
              <div>
                <p>Delhi NCR</p>
              </div>
              <div>
                <FaAngleDown />
              </div>
            </div>
            <div className="search_country">
              <div className="search_icon">
                <FaSistrix />
              </div>
              <div className="search_input_box">
                <input type="text" placeholder="Search for services" />
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="home_bottom_text4">
            <p>
              <span>
                <Link>Women's Therapies,</Link>
              </span>
              <span>
                <Link>Salon for Men,</Link>
              </span>
              <span>
                <Link>Men's Therapies,</Link>
              </span>
              <span> etc</span>
            </p>
          </div>
        </div>
      </div>

      <div className="home_base">
        <div className="home_base_up"></div>
        <div className="home_base_down"></div>
      </div>
    </div>
  );
};
